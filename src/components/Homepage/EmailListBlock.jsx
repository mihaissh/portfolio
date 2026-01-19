import { useState, useEffect } from "react";
import { Block } from "./Block";
import { FiMail, FiX, FiCheck, FiAlertCircle } from "react-icons/fi";

export const EmailListBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields before submitting
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    
    if (emailError || phoneError) {
      setErrors({
        email: emailError,
        phone: phoneError,
      });
      return; // Don't submit if there are errors
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { default: emailjs } = await import("@emailjs/browser");
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Validate that environment variables are set
      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS credentials not configured. Please check your .env file."
        );
      }

      // Template parameters - these will be used in your EmailJS template
      const templateParams = {
        to_email: "mstraculencu@gmail.com",
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone || "Not provided",
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      setErrors({ email: "", phone: "" });

      // Close modal after 2 seconds on success
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      // Only log errors in development
      if (import.meta.env.DEV) {
        console.error("Failed to send email:", error);
      }
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateEmail = (email) => {
    if (!email) return "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePhone = (phone) => {
    if (!phone) return ""; // Phone is optional
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length > 0 && digitsOnly.length < 7) {
      return "Phone number is too short";
    }
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Phone number validation - allow only digits, spaces, parentheses, hyphens, and plus sign
    if (name === "phone") {
      const sanitizedValue = value.replace(/[^\d\s\-\(\)\+]/g, "");
      // Limit to 20 characters
      if (sanitizedValue.length <= 20) {
        setFormData((prev) => ({
          ...prev,
          [name]: sanitizedValue,
        }));
        // Validate phone
        const phoneError = validatePhone(sanitizedValue);
        setErrors((prev) => ({
          ...prev,
          phone: phoneError,
        }));
      }
    } else if (name === "email") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      // Validate email
      const emailError = validateEmail(value);
      setErrors((prev) => ({
        ...prev,
        email: emailError,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <Block className="col-span-12 md:col-span-9">
        <p className="mb-3 text-lg">Contact me</p>
        <div className="flex items-center gap-3">
          <p className="text-zinc-400 text-sm flex-1">
            Have a question or want to work together? Drop me a message!
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
          >
            <FiMail /> Send Message
          </button>
        </div>
      </Block>

      {/* Modal */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-lg bg-zinc-900 border border-zinc-700 p-6 shadow-xl animate-scale-in"
          >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <FiX size={24} />
              </button>

              {/* Modal Header */}
              <h2 className="text-2xl font-bold text-zinc-100 mb-6">
                Complete Your Message
              </h2>

              {/* Contact Form */}
              <form onSubmit={handleModalSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-zinc-300 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-zinc-100 transition-colors focus:border-emerald-400 focus:outline-none focus:ring-0"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-300 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full rounded border ${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-zinc-700 focus:border-emerald-400"
                    } bg-zinc-800 px-3 py-2 text-zinc-100 transition-colors focus:outline-none focus:ring-0`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <FiAlertCircle size={12} />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-zinc-300 mb-1"
                  >
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    maxLength={20}
                    className={`w-full rounded border ${
                      errors.phone
                        ? "border-red-500 focus:border-red-500"
                        : "border-zinc-700 focus:border-emerald-400"
                    } bg-zinc-800 px-3 py-2 text-zinc-100 transition-colors focus:outline-none focus:ring-0`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone ? (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <FiAlertCircle size={12} />
                      {errors.phone}
                    </p>
                  ) : (
                    <p className="text-xs text-zinc-400 mt-1">
                      {formData.phone.length}/20 characters
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-300 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-zinc-100 transition-colors focus:border-emerald-400 focus:outline-none focus:ring-0 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 rounded bg-green-500/10 border border-green-500/20 px-4 py-3 text-green-400 animate-slide-down">
                    <FiCheck className="text-lg" />
                    <span className="text-sm">Message sent successfully!</span>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 rounded bg-red-500/10 border border-red-500/20 px-4 py-3 text-red-400 animate-slide-down">
                    <FiAlertCircle className="text-lg" />
                    <span className="text-sm">
                      Failed to send message. Please try again.
                    </span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    disabled={isSubmitting}
                    className="flex-1 rounded border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 rounded bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiMail /> Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
    </>
  );
};
