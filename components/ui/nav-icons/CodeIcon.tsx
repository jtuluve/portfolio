"use client";

import { motion } from "framer-motion";
import { useLoading } from "@/components/loading-provider";

export const CodeIcon = () => {
  const { loading } = useLoading();

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-code-2"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
    >
      <motion.path
        d="m18 16 4-4-4-4"
        whileHover={{ translateX: 2, transition: { duration: 0.2 } }}
      />
      <motion.path
        d="m6 8-4 4 4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: loading ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.path
        d="m14.5 4-5 16"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: loading ? 0 : 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </motion.svg>
  );
};
