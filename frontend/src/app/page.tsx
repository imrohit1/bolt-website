"use client";
import { AppConfig } from '@/config';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.main 
      className="flex min-h-screen flex-col items-center justify-center p-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-4xl font-bold mb-4 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {AppConfig.brandName}
      </motion.h1>
      <motion.p 
        className="text-lg mb-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Contact: {AppConfig.contactNumber}
      </motion.p>
      <motion.p 
        className="text-lg mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Email: {AppConfig.supportEmail}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="text-center text-gray-200">
          Welcome to our AI product platform. Explore our innovative solutions.
        </p>
        <p className="text-center text-gray-200 mt-4">
          This is a placeholder for the home page content. You can add more details about your company and its mission here.
        </p>
      </motion.div>
    </motion.main>
  );
}
