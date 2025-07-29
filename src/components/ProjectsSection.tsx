'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  side: 'left' | 'right';
  date: string;
  slug: string;
}

const ProjectCard: React.FC<{ project: Project; side: 'left' | 'right' }> = ({ project, side }) => (
  <a
    href={`/projects/${project.slug}`}
    className={`w-full md:w-5/12 p-6 border rounded-lg shadow-md bg-white text-left transition-transform duration-300 hover:scale-105 hover:shadow-lg ${
      side === 'left' ? 'md:mr-auto' : 'md:ml-auto'
    }`}
  >
    <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
    <p className="text-gray-600 mt-2">{project.description}</p>
  </a>
);

const TimelineConnector: React.FC<{ side: 'left' | 'right'; date: string }> = ({ side, date }) => (
  <div className="relative w-full md:w-6/12">
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-[#f2e6ee] to-[#977dff] rounded-full ${
        side === 'left' ? 'left-0 md:left-0' : 'right-0 md:right-0'
      }`}
    ></div>
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 h-1 bg-gradient-to-br from-[#f2e6ee] to-[#977dff] ${
        side === 'left' ? 'left-6 md:left-6 w-1/3' : 'right-6 md:right-6 w-1/3'
      }`}
    ></div>
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 text-sm font-medium text-white bg-gradient-to-br from-[#f2e6ee] to-[#977dff] px-3 py-1 rounded-full ${
        side === 'left' ? 'left-[calc(33%+1rem)] md:left-[calc(33%+1rem)]' : 'right-[calc(33%+1rem)] md:right-[calc(33%+1rem)]'
      }`}
    >
      {date}
    </div>
  </div>
);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects: Project[] = [
    {
      title: 'BESTIE – Personal Meal Planner',
      description: 'A personalized meal planning app using multi stage recommender system.',
      side: 'left',
      date: 'Jan 2025 - Aug 2025',
      slug: 'bestie',
    },
    {
      title: 'US AQI Analysis',
      description: 'BI project applying ETL and data warehousing to analyze US air quality trends.',
      side: 'right',
      date: 'Sep 2024 - Dec 2024',
      slug: 'us-aqi',
    },
    {
      title: 'End-to-End ETL Workflow',
      description: 'A real-time data pipeline using Kafka, Spark, Hadoop, Power BI, and Airflow for fraud detection and reporting.',
      side: 'left',
      date: 'Nov 2024 - Dec 2024',
      slug: 'credit-card',
    },
  ];

  useEffect(() => {
    const items = [titleRef.current, ...projectRefs.current].filter(Boolean);

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
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-projects-gradient px-6 relative">
      {/* Central Timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/20 h-[30rem] top-40"></div>

      <div className="max-w-6xl mx-auto text-center">
        <div ref={titleRef}>
          <h2 className="text-4xl font-bold mb-6 tracking-wide">Projects</h2>
        </div>
        <div className="relative space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              ref={(el) => { projectRefs.current[index] = el; }}
              className={`flex flex-col md:flex-row items-center justify-center gap-6 ${
                project.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <ProjectCard project={project} side={project.side} />
              <TimelineConnector side={project.side} date={project.date} />
              <div className="w-full md:w-5/12 md:hidden"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;