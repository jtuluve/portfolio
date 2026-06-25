"use client";

import { motion } from "framer-motion";
import { useLoading } from "@/components/loading-provider";

export const FolderKanbanIcon = () => {
  const { loading } = useLoading();

  const barVariants = {
    initial: { scaleY: 1 },
    hover: (delay: number) => ({
      pathLength: [1, 0.5, 1.1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut" as const,
        delay,
      },
    }),
  };

  return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-folder-kanban p-2"
        initial="initial"
        whileHover="hover"
      >
        {/* Folder outline */}
        <motion.path
          d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: loading ? 0 : 1 }}
          transition={{ duration: 1 }}
        />
  
        {/* Equalizer bars */}
        <motion.line
          x1="8"
          x2="8"
          y1="10"
          y2="16"
          variants={barVariants}
          custom={0}
          style={{ originY: 0 }}
        />
        <motion.line
          x1="12"
          x2="12"
          y1="10"
          y2="12"
          variants={barVariants}
          custom={0.2}
          // style={{ originY: 1 }}
          className="origin-top"
        />
        <motion.line
          x1="16"
          x2="16"
          y1="10"
          y2="14"
          variants={barVariants}
          custom={0.4}
          // style={{ originY: 1 }}
        />
    </motion.svg>
  );
};
