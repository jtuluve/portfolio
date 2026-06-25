"use client";
import React from "react";
import { useLoading } from "@/components/loading-provider";

const LoadingScreen = () => {
  const { loading } = useLoading();
  return (
    <div className={"fixed inset-0 bg-white flex items-center justify-center z-50" + (loading ? "" : " hidden")}>
      <style>
        {`
          @keyframes slide-clip {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(0);
            }
          }
          .clip-shape {
            animation: slide-clip 2s ease-in-out forwards;
          }
        `}
      </style>
      <svg
        width="760"
        height="140"
        viewBox="0 0 760 140"
        xmlns="http://www.w3.org/2000/svg"
        className="m-auto w-1/2 max-w-xs"
      >
        <defs>
          <clipPath id="loading-clip">
            {/* same shape as the bar itself */}
            <path
              d="M60 80V100H700V80H720V60H700V40H60V60H40V80H60Z"
              className="clip-shape"
            />
          </clipPath>
        </defs>

        {/* Frame */}
        <path d="M40 0H720V20H40V0Z" fill="black" />
        <path d="M40 120H720V140H40V120Z" fill="black" />
        <path d="M720 20H740V40H720V20Z" fill="black" />
        <path d="M20 20H40V40H20V20Z" fill="black" />
        <path d="M720 100H740V120H720V100Z" fill="black" />
        <path d="M20 100H40V120H20V100Z" fill="black" />
        <path d="M740 40H760V100H740V40Z" fill="black" />
        <path d="M0 40H20V100H0V40Z" fill="black" />

        {/* Actual bar, revealed by clipPath */}
        <path
          d="M60 80V100H700V80H720V60H700V40H60V60H40V80H60Z"
          fill="black"
          clipPath="url(#loading-clip)"
        />
      </svg>
    </div>
  );
};

export default LoadingScreen;
