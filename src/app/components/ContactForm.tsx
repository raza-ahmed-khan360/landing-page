"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  whatsapp: string;
  plan: string;
  addons: string[];
  message: string;
  meeting: string;
}

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-dark p-6 rounded-xl max-w-md w-full text-center shadow-xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="text-xl font-semibold font-montserrat text-dark dark:text-light mb-2">
          ✅ Message Sent
        </h3>
        <p className="text-muted text-sm mb-4 font-poppins">
          Thank you! I’ll get back to you within 24 hours.
        </p>
        <button
          onClick={onClose}
          className="px-5 py-2 bg-primary text-dark rounded-lg font-semibold hover:bg-white hover:text-primary border border-primary transition"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    whatsapp: "",
    plan: "Starter",
    addons: [],
    message: "",
    meeting: "",
  });

  const [sending, setSending] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({
        ...prev,
        addons: checked
          ? [...prev.addons, value]
          : prev.addons.filter((item) => item !== value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setShowModal(true);
      setForm({
        name: "",
        email: "",
        whatsapp: "",
        plan: "Starter",
        addons: [],
        message: "",
        meeting: "",
      });
    }

    setSending(false);
  };

  return (
    <section
      id="contact"
      className="w-full dark:bg-light bg-dark py-20 px-4 md:px-8"
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold dark:text-dark text-light font-montserrat"
        >
          Start Your Project
        </motion.h2>
        <p className="text-muted font-poppins">
          Fill in the form and I’ll get back to you within 24 hours.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-left mt-10 dark:text-dark text-light font-poppins"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl border border-muted/30 focus:outline-none"
            required
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            type="email"
            className="w-full px-4 py-3 rounded-xl border border-muted/30"
            required
          />
          <input
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="WhatsApp Number"
            className="w-full px-4 py-3 rounded-xl border border-muted/30"
          />

          <div>
            <label className="text-sm text-muted block mb-1">
              Choose Plan:
            </label>
            <select
              name="plan"
              value={form.plan}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-muted/30"
              required
            >
              <option className="text-light" value="Starter">
                Starter
              </option>
              <option className="text-light" value="Pro">
                Pro
              </option>
              <option className="text-light" value="Elite">
                Elite
              </option>
            </select>
          </div>

          <div>
            <label className="text-sm text-muted block mb-1">Add-ons:</label>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                "Dark Mode",
                "Logo Design",
                "Multilingual Setup",
                "Custom 404 Page",
                "Hero Section Illustration",
                "Loading Animations",
                "Payment Gateway Integration",
                "Newsletter Integration",
              ].map((addon) => (
                <label key={addon} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="addons"
                    value={addon}
                    checked={form.addons.includes(addon)}
                    onChange={handleChange}
                  />
                  {addon}
                </label>
              ))}
            </div>
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Message / Project Details"
            className="w-full px-4 py-3 rounded-xl border border-muted/30"
            required
          />

          <input
            name="meeting"
            value={form.meeting}
            onChange={handleChange}
            type="datetime-local"
            className="w-full px-4 py-3 rounded-xl border border-muted/30"
            required
          />

          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-dark rounded-xl font-semibold hover:bg-white hover:text-primary border border-primary transition"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <AnimatePresence>
        {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </section>
  );
}
