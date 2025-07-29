'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  const [metaData, setMetaData] = useState({ star: 0, forks: 0 });

  useEffect(() => {
    fetch('https://api.github.com/repos/pranjalshikhar/portfolio-v3')
      .then((res) => res.json())
      .then((data) =>
        setMetaData({
          star: data.stargazers_count ?? 0,
          forks: data.forks_count ?? 0,
        })
      );
  }, []);

  const socials = [
    { href: 'https://linkedin.com/in/khactrieu74', icon: FaLinkedin },
    { href: 'https://github.com/trieuvisaooo', icon: FaGithub },
    { href: 'https://instagram.com/_000000is1_', icon: FaInstagram },
    { href: 'mailto:khactrieu.work.2025@gmail.com', icon: FaEnvelope },
  ];

  return (
    <footer className="flex flex-col items-center justify-center py-12 text-sm text-gray-600 dark:text-white/70">
      {/* Social Icons */}
      <div className="flex gap-4 mb-6">
        {socials.map(({ href, icon: Icon }, i) => (
          <Link
            key={i}
            href={href}
            target="_blank"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Icon className="w-5 h-5" />
          </Link>
        ))}
      </div>

      {/* GitHub Meta & Credit */}
      <a
        href="https://github.com/trieuvisaooo"
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center text-xs sm:text-sm md:text-base hover:text-purple-700 transition"
      >
      </a>
    </footer>
  );
};

export default Footer;
