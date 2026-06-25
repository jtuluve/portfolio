"use client";

import { motion } from "framer-motion";
import { useLoading } from "@/components/loading-provider";

export const BriefcaseIcon = () => {
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
      className="lucide lucide-briefcase"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
    >
      <motion.rect
        width="20"
        height="14"
        x="2"
        y="7"
        rx="2"
        ry="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: loading ? 0 : 1 }}
        transition={{ duration: 1 }}
      />
      <motion.path
        d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: loading ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.svg>
  );
};
