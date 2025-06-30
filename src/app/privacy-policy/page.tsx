"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-light dark:bg-dark">
      <div className="max-w-4xl mx-auto space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold font-montserrat text-dark dark:text-light"
        >
          Privacy Policy
        </motion.h1>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="space-y-6 text-light/80 font-poppins"
        >
          <p>
            Your privacy is important to us. This policy explains how we collect
            and handle your data.
          </p>

          <ul className="list-disc pl-5 space-y-4">
            <li>
              <h2>
                <strong>Information Collected:</strong>
              </h2>{" "}
              Name, email, WhatsApp number, project details, and meeting
              preferences.
            </li>
            <li>
              <h2>
                <strong>Purpose:</strong>
              </h2>{" "}
              Used to schedule meetings, understand project scope, and send
              updates or confirmations.
            </li>
            <li>
              <h2>
                <strong>Third-Party Access:</strong>
              </h2>{" "}
              No information is sold or shared. Shared only with tools used in
              your project.
            </li>
            <li>
              <h2>
                <strong>Data Security:</strong>
              </h2>{" "}
              Your data is stored securely and only kept as long as necessary.
            </li>
            <li>
              <h2>
                <strong>Cookies:</strong>
              </h2>{" "}
              May be used for UX improvements and analytics (e.g., Google
              Analytics).
            </li>
            <li>
              <h2>
                <strong>Your Rights:</strong>
              </h2>{" "}
              You may request deletion or review of your data at any time by
              contacting us.
            </li>
            <li>
              <h2>
                <strong>Updates:</strong>
              </h2>{" "}
              If this policy changes, we’ll notify you via WhatsApp or Email.
            </li>
          </ul>

          <p>
            📧 Email: hafizrazaahmed42@gmail.com <br />
            📱 WhatsApp: +92 314 1087568
          </p>
        </motion.div>
      </div>
    </section>
  );
}
