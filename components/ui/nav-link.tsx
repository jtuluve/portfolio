'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  title: string;
  children: ReactNode;
}

export const NavLink = ({ href, title, children }: NavLinkProps) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link href={href} passHref legacyBehavior>
      <motion.a
        title={title}
        onClick={scrollToSection}
        // whileHover={{ scale: 1.2, rotate: 10 }}
        // transition={{ type: 'spring', stiffness: 300 }}
        className="cursor-pointer"
      >
        {children}
      </motion.a>
    </Link>
  );
};
