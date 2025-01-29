"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (hasAcceptedCookies) {
      setShowBanner(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  const handleRejectCookies = () => {
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <motion.div
      className="fixed bottom-0 left-0 w-full bg-gray-100 p-4 flex justify-center items-center space-x-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-gray-700">
        This website uses cookies to enhance your experience.
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAcceptCookies}
      >
        Accept
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
        onClick={handleRejectCookies}
      >
        Reject
      </button>
    </motion.div>
  );
};

export default CookieBanner;
