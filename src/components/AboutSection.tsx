'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const refs = {
    section: useRef<HTMLElement | null>(null),
    title: useRef<HTMLDivElement | null>(null),
    imageContainer: useRef<HTMLDivElement | null>(null),
    images: useRef<(HTMLImageElement | null)[]>([]),
    contentContainer: useRef<HTMLDivElement | null>(null),
    whoAmI: useRef<HTMLDivElement | null>(null),
    whatIDo: useRef<HTMLDivElement | null>(null),
    education: useRef<HTMLDivElement | null>(null),
    skills: useRef<HTMLDivElement | null>(null),
  };

  useEffect(() => {
    // Animate title and skills sections with fade-in
    const elements = [refs.title, refs.skills, refs.education];

    elements.forEach((ref, index) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    // Card fanning effect for images
    if (refs.imageContainer.current && refs.images.current.length > 0) {
      const images = refs.images.current.filter((img) => img !== null) as HTMLImageElement[];

      // Set initial state: stack images on top of each other
      gsap.set(images, {
        opacity: 0,
        scale: 0.8,
        rotation: 0,
        x: 0,
        y: 0,
        zIndex: (i) => i,
      });

      // Create fanning animation with adjusted offsets for three images
      gsap.to(images, {
        opacity: 1,
        scale: 1,
        rotation: (i) => -15 + i * 15, // Spread cards in a fan (-15°, 0°, 15°)
        x: (i) => (i - 1) * 50, // Horizontal offset centered around middle image
        y: (i) => Math.abs(i - 1) * 20, // Subtle vertical arc
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: refs.imageContainer.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Add hover effects for each image
      images.forEach((img) => {
        img.addEventListener('mouseenter', () => {
          gsap.to(img, {
            scale: 1.1,
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
            borderColor: 'rgba(255, 255, 255, 0.5)',
            duration: 0.3,
            ease: 'power2.out',
            zIndex: 10,
          });
        });
        img.addEventListener('mouseleave', () => {
          gsap.to(img, {
            scale: 1,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            duration: 0.3,
            ease: 'power2.out',
            zIndex: (i) => i,
          });
        });
      });

      // Animate content sections (text descriptions)
      const contentBlocks = [refs.whoAmI.current, refs.whatIDo.current].filter(
        (el) => el !== null
      ) as HTMLDivElement[];

      gsap.fromTo(
        contentBlocks,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: refs.contentContainer.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      refs.images.current.forEach((img) => {
        if (img) {
          img.removeEventListener('mouseenter', () => {});
          img.removeEventListener('mouseleave', () => {});
        }
      });
    };
  }, []);

  return (
    <section
      ref={refs.section}
      id="about"
      className="bg-about-gradient text-white py-20 px-6 space-y-12"
    >
      {/* Title */}
      <div className="max-w-4xl mx-auto text-center" ref={refs.title}>
        <h2 className="text-4xl font-bold mb-3 tracking-wide header-section-font">About me</h2>
      </div>

      {/* Main Content: Images on Left, Text on Right */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Image Container with Fanning Effect */}
        <div
          ref={refs.imageContainer}
          className="relative flex justify-center items-center h-[400px] md:h-[500px] perspective-1000"
        >
          {['/avatar2.jpg', '/avatar1.jpg', '/avatar3.jpg'].map((src, index) => (
            <img
              key={index}
              ref={(el) => { refs.images.current[index] = el; }}
              src={src}
              alt={`About image ${index + 1}`}
              className="absolute w-48 h-48 md:w-64 md:h-80 object-cover rounded-xl shadow-md border border-white/20 transition-all duration-300"
            />
          ))}
        </div>

        {/* Text Content */}
        <div ref={refs.contentContainer} className="space-y-8">
          {/* Who I am */}
          <div ref={refs.whoAmI}>
            {/* <h2 className="text-3xl font-bold mb-6 tracking-wide uppercase">Who I am</h2> */}
            <p className="text-white/90 text-base leading-[1.7] description-font">
              I'm <strong>Trieu Nguyen Khac</strong>, a lifelong learner with a passion for turning raw data into powerful, actionable insights.
              <br />
              I'm actively seeking opportunities to gain real-world experience, expand my skill set, and contribute to impactful data-driven projects.
              I thrive in environments that value continuous learning, collaboration, and innovation.
              <br />
            </p>
          </div>

          {/* What I do */}
          <div ref={refs.whatIDo}>
            {/* <h2 className="text-3xl font-bold mb-6 tracking-wide uppercase">What I do</h2> */}
            <p className="text-white/90 text-base leading-[1.7] description-font">
              <i>I build things I love:</i>
              <br />
              🧠 Designing and building scalable data pipelines
              <br />
              🗂️ Integrating and transforming messy, real-world data
              <br />
              ⚙️ Orchestrating workflows
              <br />
              <br />
              <i>Off-coding, I recharge:</i>
              <br />
              🎧 Music lover
              <br />
              🏃‍♂️ Passionate runner
              <br />
              ⚽ Team player
            </p>
          </div>
        </div>
      </div>


      {/* Education Section */}
      <div ref={refs.education} className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center tracking-wide header-section-font">Education</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[  
            {
              title: 'Bachelor of Information Systems',
              institution: 'VNU-HCMUS',
              details: ['GPA: 3.30 / 4.00', 'Expected Graduation: 08/2025'],
            },
            {
              title: 'Certifications',
              institution: 'Language',
              details: ['Completed: 08/2024', 'TOEIC: 820'],
            },
          ].map((edu, index) => (
            <div key={index} className="border-r-4 border-[var(--color-custom-green)] pl-4">
              <h3 className="text-xl font-semibold text-white/90">{edu.title}</h3>
              <p className="text-white/80 text-base">{edu.institution}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {edu.details.map((detail) => (
                  <span
                    key={detail}
                    className="px-3 py-1 bg-[var(--color-custom-green)] text-gray-800 text-sm font-medium rounded-full shadow-sm"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      

      {/* Skills Section (Unchanged) */}
      <div ref={refs.skills} className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center tracking-wide header-section-font">My skillset</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white/90">⚙️ Programming Languages & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'SQL', 'C#', 'C++'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[var(--color-custom-green)] text-gray-800 text-sm font-medium rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
              {['Pandas', 'NumPy', 'PySpark', 'Kafka'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[var(--color-custom-green)] text-gray-800 text-sm font-medium rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
              {['Airflow', 'Git', 'Docker'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[var(--color-custom-green)] text-gray-800 text-sm font-medium rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
              {['Notion', 'Slack', 'Trello'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[var(--color-custom-green)] text-gray-800 text-sm font-medium rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white/90">🛠️ Data Engineering</h3>
            <div className="flex flex-wrap gap-2">
              {['PostgreSQL', 'SQL Server', 'Oracle DB', 'MongoDB', 'Neo4j'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[var(--color-custom-green)] text-gray-800 text-sm font-medium rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
              {['Apache Kafka', 'Spark', 'Hadoop'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[var(--color-custom-green)] text-gray-800 text-sm font-medium rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
              {['Streamlit', 'Power BI'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[var(--color-custom-green)] text-gray-800 text-sm font-medium rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Custom styles for image container */
        .image-container {
          position: relative;
          height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default About;