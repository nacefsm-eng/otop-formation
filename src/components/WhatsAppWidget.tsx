"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = "33600000000"; // Replace with real phone number
    const message = "Bonjour, je souhaite avoir plus d'informations sur OTOP Formation.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-2xl mb-4 w-72 origin-bottom-right"
                    >
                        <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="font-bold text-sm">OTOP Formation</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                            >
                                <X size={16} />
                            </button>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                            Bonjour ! Comment pouvons-nous vous aider aujourd'hui ?
                        </p>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center bg-[#25D366] hover:bg-[#20BE5C] text-white py-2.5 rounded-xl font-bold text-sm transition-colors"
                        >
                            Démarrer le chat
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:shadow-[#25D366]/40 transition-shadow"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
            </motion.button>
        </div>
    );
};
