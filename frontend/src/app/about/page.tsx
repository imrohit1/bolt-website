"use client";
import { motion } from 'framer-motion';

export default function About() {
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
        About Us
      </motion.h2>
      <motion.div
        className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md max-w-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-200">
          We are a team of passionate AI enthusiasts dedicated to developing cutting-edge solutions. Our mission is to empower businesses and individuals with the latest advancements in artificial intelligence.
        </p>
        <p className="text-gray-200 mt-4">
          We believe in the transformative power of AI and strive to create products that are not only innovative but also accessible and user-friendly.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-center text-gray-200 mt-8">
          This is a placeholder for the about us page. You can add more details about your company's history, values, and team here.
        </p>
      </motion.div>
    </motion.main>
  );
}
