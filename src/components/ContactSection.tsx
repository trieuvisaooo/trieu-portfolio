'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const socialRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const items = [titleRef.current, buttonRef.current, socialRef.current].filter(Boolean);

    items.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Button pulse animation
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-30 bg-contact-gradient px-6 relative overflow-hidden">
      {/* Background Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-4 h-4 bg-contact-bubble-gradient rounded-full animate-float top-10 left-20"></div>
        <div className="absolute w-3 h-3 bg-contact-bubble-gradient rounded-full animate-float top-40 right-24 delay-1000"></div>
        <div className="absolute w-5 h-5 bg-contact-bubble-gradient rounded-full animate-float bottom-20 left-32 delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-12">
        <div ref={titleRef}>
          <h2 className="text-4xl font-bold mb-4 text-white tracking-wide">Let's Connect</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Ready to collaborate, discuss a project, or just chat? <br />
            Drop me a line and let&apos;s make something amazing happen!
          </p>
        </div>

        <div ref={buttonRef} className="mb-10">
          <a
            href="mailto:khactrieu.work.2025@gmail.com"
            className="inline-block px-8 py-4 bg-contact-button-gradient text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-[#B5FCCD] transition-all duration-300 hover:scale-110 hover:bg-purple-700"
          >
            Say Hello
          </a>
        </div>

        <div ref={socialRef} className="flex justify-center gap-8">
          <a
            href="mailto:khactrieu.work.2025@gmail.com"
            className="text-white/80 hover:text-[#B5FCCD] transition-transform duration-300 hover:scale-125"
            aria-label="Email"
          >
            <FaEnvelope size={30} />
          </a>
          <a
            href="https://instagram.com/_000000is1_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-[#B5FCCD] transition-transform duration-300 hover:scale-125"
            aria-label="Instagram"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/khactrieu74"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-[#B5FCCD] transition-transform duration-300 hover:scale-125"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/trieuvisaooo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-[#B5FCCD] transition-transform duration-300 hover:scale-125"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Contact;