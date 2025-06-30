"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-light dark:bg-dark">
      <div className="max-w-4xl mx-auto space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold font-montserrat text-dark dark:text-light"
        >
          Terms & Conditions
        </motion.h1>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="space-y-6 text-light/80 font-poppins"
        >
          <p>
            Welcome to <strong>Raza – Dev</strong>. By engaging with our
            services, you agree to the terms outlined below.
          </p>

          <ul className="list-disc pl-5 space-y-4">
            <li>
              <h2>
                <strong>Project Engagement:</strong>
              </h2>{" "}
              Clients must provide a valid WhatsApp number and confirm a meeting
              before work begins. Projects without communication will not be
              considered valid.
            </li>
            <li>
              <h2>
                <strong>Payments:</strong>
              </h2>{" "}
              A 50% advance is required to start. Remaining 50% must be paid on
              completion before delivery.
            </li>
            <li>
              <h2>
                <strong>Timeline:</strong>
              </h2>{" "}
              Delivery depends on the selected package and communication
              responsiveness.
            </li>
            <li>
              <h2>
                <strong>Revisions:</strong>
              </h2>{" "}
              Each package includes limited revisions. Extra revisions are
              charged separately.
            </li>
            <li>
              <h2>
                <strong>Add-ons:</strong>
              </h2>{" "}
              Optional features (dark mode, payment gateway, newsletter, etc.)
              are billed additionally.
            </li>
            <li>
              <h2>
                <strong>Refund Policy:</strong>
              </h2>{" "}
              No refunds after development begins. Partial refunds at our
              discretion before that.
            </li>
            <li>
              <h2>
                <strong>Ownership:</strong>
              </h2>{" "}
              After full payment, you own the project. We reserve the right to
              showcase work in our portfolio.
            </li>
            <li>
              <h2>
                <strong>Communication:</strong>
              </h2>{" "}
              WhatsApp, Email & scheduled meetings are required. Delays in
              response may delay project.
            </li>
            <li>
              <h2>
                <strong>Disclaimer:</strong>
              </h2>{" "}
              We are not responsible for hosting, domains, or third-party
              outages post-delivery.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
