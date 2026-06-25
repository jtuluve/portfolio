"use client";

import { motion } from "framer-motion";
import { useLoading } from "@/components/loading-provider";

export const SparklesIcon = () => {
  const { loading } = useLoading();

  return (
    <motion.svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="loading"
      animate={loading ? "loading" : "rest"}
      whileHover="hover"
      variants={{
        loading: { scale: 0, opacity: 0 },
        rest: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
      }}
    >
      {/* Main sparkle */}
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1H10V0H11H12V1H13V5H14V7H15V8H20V9H21V10V11H20V12H15V13H14V15H13V19H12V20H11H10V19H9V15H8V13H7V12H2V11H1V10V9H2V8H7V7H8V5H9V1ZM11 17H10V14H9V12H8V11H7H4V10V9H7H8V8H9V6H10V3H11H12V6H13V8H14V9H15H18V10V11H15H14V12H13V14H12V17H11Z"
        fill="black"
        variants={{
          rest: { scale: 1, opacity: 1 },
          hover: {
            opacity: [1, 0.3, 1],
            transition: { duration: 2, repeat: Infinity },
          },
        }}
      />

      {/* Bottom sparkle */}
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 19H6V17H5V16H4V15H2V16H1V17H0V19H1V20H2V21H4V20H5V19ZM4 17H2V19H4V17Z"
        fill="black"
        variants={{
          rest: { scale: 1, opacity: 1 },
          hover: {
            opacity: [1, 0.3, 1],
            scale: [1, 1.2, 1],
            transition: { duration: 1, repeat: Infinity },
          },
        }}
      />

      {/* Top sparkle */}
      <motion.path
        d="M20 0H18V1H17V3H18V4H20V3H21V1H20V0Z"
        fill="black"
        variants={{
          rest: { scale: 1, opacity: 1 },
          hover: {
            opacity: [1, 0.3, 1],
            scale: [1, 1.2, 1],
            transition: { duration: 1, repeat: Infinity, delay: 0.2 },
          },
        }}
      />
    </motion.svg>
  );
};
