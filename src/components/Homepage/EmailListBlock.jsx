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
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({ email: "" });

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const emailError = validateEmail(formData.email);
    if (emailError) {
      setErrors({ email: emailError });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.fullName,
          email: formData.email,
          subject: formData.subject || "No subject",
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send");
      }

      setSubmitStatus("success");
      setFormData({ fullName: "", email: "", subject: "", message: "" });
      setErrors({ email: "" });

      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateEmail = (email) => {
    if (!email) return "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "That doesn't look like a valid email";
    }
    return "";
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      setErrors({ email: validateEmail(value) });
    }
  };

  return (
    <>
      <Block className="w-full h-full flex flex-col justify-center bg-zinc-900/20 border-zinc-800/30 rounded-xl p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold tracking-tight text-white uppercase mb-1">Contact me</p>
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Questions, ideas, or just want to say hi?
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

      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800/50 p-8 md:p-12 shadow-2xl animate-scale-in"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-6 top-6 h-10 w-10 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
            >
              <FiX size={20} />
            </button>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
                Get in touch
              </h2>
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                I'll reply when I can.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={onChange}
                  required
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-white transition-all focus:border-emerald-500/50 focus:outline-none focus:ring-0"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  required
                  className={`w-full rounded-xl border ${
                    errors.email
                      ? "border-red-500/50"
                      : "border-zinc-800 focus:border-emerald-500/50"
                  } bg-zinc-950/50 px-4 py-3 text-sm text-white transition-all focus:outline-none focus:ring-0`}
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
                  onChange={onChange}
                  required
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-white transition-all focus:border-emerald-500/50 focus:outline-none focus:ring-0"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={onChange}
                  required
                  rows={4}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-white transition-all focus:border-emerald-500/50 focus:outline-none focus:ring-0 resize-none"
                />
              </div>

              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 text-emerald-400"
                  >
                    <FiCheck className="text-lg" />
                    <span className="text-xs font-bold uppercase tracking-widest">Sent</span>
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-red-400"
                  >
                    <FiAlertCircle className="text-lg shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-widest">Didn't go through. Try again?</span>
                  </motion.div>
                )}
              </AnimatePresence>

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
                      <FiMail className="text-sm" /> Send
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
