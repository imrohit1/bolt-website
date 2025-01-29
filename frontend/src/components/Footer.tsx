"use client";
import { motion } from 'framer-motion';
import { AppConfig } from '@/config';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white p-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p>
        &copy; {new Date().getFullYear()} {AppConfig.brandName}. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
