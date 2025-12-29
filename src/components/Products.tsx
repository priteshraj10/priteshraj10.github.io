"use client";

import React, { useState } from "react";
import { Product, products } from "@/data/products";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Products = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="space-y-2">
            {products.map((product: Product, idx: number) => (
                <motion.div
                    key={product.href}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <Link
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block py-8 border-b border-zinc-800 hover:border-zinc-600 transition-colors"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="text-zinc-600 text-sm font-mono">0{idx + 1}</span>
                                    <motion.h3
                                        className="text-2xl md:text-3xl font-light text-white"
                                        animate={{ x: hoveredIndex === idx ? 10 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {product.title}
                                    </motion.h3>
                                </div>
                                <p className="text-zinc-500 max-w-xl pl-10">
                                    {product.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4 pl-10">
                                    {product.stack?.map((stack: string) => (
                                        <span
                                            key={stack}
                                            className="text-xs px-3 py-1 text-zinc-500 border border-zinc-800 rounded-full"
                                        >
                                            {stack}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <motion.div
                                className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-zinc-700 text-zinc-500 group-hover:border-white group-hover:text-white transition-colors"
                                animate={{
                                    scale: hoveredIndex === idx ? 1.1 : 1,
                                    rotate: hoveredIndex === idx ? 45 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <ArrowUpRight className="w-5 h-5" />
                            </motion.div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
};
