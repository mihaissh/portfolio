import { useState, useEffect } from "react";
import { Block } from "./Block";
import { FiMail, FiX, FiCheck, FiAlertCircle } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export const EmailListBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [errors, setErrors] = useState({
    email: "",
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
    
    if (emailError) {
      setErrors({
        email: emailError,
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
        setSubmitStatus("error");
        setIsSubmitting(false);
        alert("Email service is not configured. Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your environment variables.");
        return;
      }

      // Template parameters - these will be used in your EmailJS template
      const templateParams = {
        to_email: "mstraculencu@gmail.com",
        full_name: formData.fullName,
        email: formData.email,
        subject: formData.subject || "No Subject",
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({ fullName: "", email: "", subject: "", message: "" });
      setErrors({ email: "" });

      // Close modal after 2 seconds on success
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error("Failed to send email:", error);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "email") {
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
      <Block className="w-full h-full flex flex-col justify-center bg-zinc-900/20 border-zinc-800/30 rounded-xl p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold tracking-tight text-white uppercase mb-1">Contact me</p>
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Have a question or want to work together?
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-3 whitespace-nowrap rounded-lg bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-emerald-400 active:scale-95"
          >
            <FiMail className="text-sm" /> Send Message
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
            className="relative w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800/50 p-8 md:p-12 shadow-2xl animate-scale-in"
          >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-6 top-6 h-10 w-10 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
              >
                <FiX size={20} />
              </button>

              {/* Modal Header */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
                  Let's Talk
                </h2>
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                  Fill out the form below and I'll get back to you soon.
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleModalSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-white transition-all focus:border-emerald-500/50 focus:outline-none focus:ring-0"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full rounded-xl border ${
                      errors.email
                        ? "border-red-500/50"
                        : "border-zinc-800 focus:border-emerald-500/50"
                    } bg-zinc-950/50 px-4 py-3 text-sm text-white transition-all focus:outline-none focus:ring-0`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-[10px] text-red-400 flex items-center gap-1 font-mono uppercase tracking-widest">
                      <FiAlertCircle size={10} />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-white transition-all focus:border-emerald-500/50 focus:outline-none focus:ring-0"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-white transition-all focus:border-emerald-500/50 focus:outline-none focus:ring-0 resize-none"
                    placeholder="How can I help you?"
                  />
                </div>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 text-emerald-400"
                    >
                      <FiCheck className="text-lg" />
                      <span className="text-xs font-bold uppercase tracking-widest">Sent successfully!</span>
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-red-400"
                    >
                      <FiAlertCircle className="text-lg" />
                      <span className="text-xs font-bold uppercase tracking-widest">Failed to send.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action Buttons */}
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 rounded-lg bg-white text-[10px] font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 flex items-center gap-3"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <FiMail className="text-sm" /> Send Message
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
