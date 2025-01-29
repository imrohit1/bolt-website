"use client";
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AppConfig } from '@/config';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';

export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (status === 'loading') return;

    if (status === 'unauthenticated') {
      router.push('/login');
      return;
    }

    const foundProduct = AppConfig.products.find((p) => p.id === id);
    setProduct(foundProduct);
  }, [id, status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    return <p>Redirecting to login...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

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
        {product.title}
      </motion.h2>
      <motion.div
        className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-gray-200 mb-4">{product.description}</p>
        <img src={product.imageURL} alt={product.title} className="max-w-xs mx-auto" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-center text-gray-200 mt-8">
          This is a placeholder for the individual product page. You can add more details about this product here.
        </p>
      </motion.div>
    </motion.main>
  );
}
