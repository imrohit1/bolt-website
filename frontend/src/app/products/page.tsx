"use client";
import { useEffect, useState } from 'react';
import { getProducts } from '@/services/productService';
import { AppConfig } from '@/config';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <motion.main 
      className="flex min-h-screen flex-col items-center p-24"
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
        Our Products
      </motion.h2>
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {products.map((product: any) => (
          <motion.li 
            key={product.id}
            className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Link href={`/products/${product.id}`} className="block">
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-200">{product.description}</p>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-center text-gray-200 mt-8">
          This is a placeholder for the products overview page. You can add more details about your products here.
        </p>
      </motion.div>
    </motion.main>
  );
}
