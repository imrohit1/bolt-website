"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AppConfig } from '@/config';

const calculateDiscountedPrice = (price: number, discountPercentage: number) => {
  const discount = (price * discountPercentage) / 100;
  return (price - discount).toFixed(2);
};

const PricingOption = ({
  title,
  monthlyPrice,
  yearlyPrice,
  isRecommended,
  isMonthly,
}: {
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  isRecommended?: boolean;
  isMonthly: boolean;
}) => {
  const price = isMonthly ? monthlyPrice : calculateDiscountedPrice(yearlyPrice, AppConfig.discountPercentage);
  const discount = isMonthly ? null : (AppConfig.discountPercentage);
  return (
    <motion.div
      className={`bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md ${
        isRecommended ? 'border-2 border-blue-500' : ''
      }`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-200 mb-4">
        {isMonthly ? `Monthly Price: $${price}` : `Yearly Price: $${price}`}
      </p>
      {discount && (
        <p className="text-green-400 mb-4">
          {discount}% Discount Applied
        </p>
      )}
      {isRecommended && (
        <p className="text-blue-500 font-semibold">Recommended</p>
      )}
      <ul className="list-disc list-inside text-gray-200 mt-4">
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
        {title === "Enterprise" && <li>Custom Feature</li>}
      </ul>
    </motion.div>
  );
};

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

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
        Pricing
      </motion.h2>
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <label className="inline-flex items-center cursor-pointer">
          <span className="mr-2">Monthly</span>
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={!isMonthly}
              onChange={handleToggle}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </div>
          <span className="ml-2">Yearly</span>
        </label>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row gap-8 overflow-x-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <PricingOption
          title="Free"
          monthlyPrice={0}
          yearlyPrice={0}
          isMonthly={isMonthly}
        />
        <PricingOption
          title="Starter"
          monthlyPrice={29}
          yearlyPrice={290}
          isMonthly={isMonthly}
        />
        <PricingOption
          title="Professional"
          monthlyPrice={99}
          yearlyPrice={990}
          isRecommended
          isMonthly={isMonthly}
        />
        <PricingOption
          title="Enterprise"
          monthlyPrice={299}
          yearlyPrice={2990}
          isMonthly={isMonthly}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="text-center text-gray-200 mt-8">
          This is a placeholder for the pricing page. You can add more details about your pricing plans here.
        </p>
      </motion.div>
    </motion.main>
  );
}
