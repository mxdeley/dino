"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40,
      },
    },
    open: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const menuItems = [
    "Home",
    "Portfolio",
    "Services",
    "Knowledge",
    "Contact Us",
  ];

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-20 z-50 "
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center"
          >
            <ul className="space-y-6 text-center">
              {menuItems.map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 * menuItems.indexOf(item) }}
                >
                  <a
                    href="#"
                    className="text-4xl font-bold text-foreground hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
            <footer className="relative bottom-0">
              <div className="flex">
                <p className="font-bold text-7xl font-karla">DINO</p>
                <div className="flex flex-col">
                  <p className="text-xs font-karla">51.5072° N, 0.1276° W</p>
                  <p className="text-xs font-karla">UK DESIGN STUDIO</p>
                </div>
              </div>
            </footer>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
