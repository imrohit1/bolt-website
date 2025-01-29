"use client";
import { AppConfig } from '@/config';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.main 
      className="flex min-h-screen flex-col items-center justify-center p-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-3xl font-bold mb-8 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Contact Us
      </motion.h2>
      <motion.div
        className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-200 mb-4">
          If you have any questions or inquiries, please feel free to reach out to us.
        </p>
        <p className="text-gray-200 mb-2">
          <strong>Phone:</strong> {AppConfig.contactNumber}
        </p>
        <p className="text-gray-200">
          <strong>Email:</strong> {AppConfig.supportEmail}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-center text-gray-200 mt-8">
          This is a placeholder for the contact page. You can add a contact form or more details about how to reach you here.
        </p>
      </motion.div>
    </motion.main>
  );
}
