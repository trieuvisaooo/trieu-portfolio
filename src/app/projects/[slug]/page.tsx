import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import ProjectsHeader from '@/components/ProjectsHeader';
import ProjectIntro from '@/components/ProjectLayout/ProjectIntro';
import ProjectMainBestie from '@/components/ProjectLayout/ProjectMainBestie';
import ProjectMainAQI from '@/components/ProjectLayout/ProjectMainAQI';
import ProjectMainCreditCard from '@/components/ProjectLayout/ProjectMainCreditCard';


interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const getMainComponent = (slug: string) => {
  switch (slug) {
    case 'bestie':
      return <ProjectMainBestie />;
    case 'us-aqi':
      return <ProjectMainAQI />;
    case 'credit-card':
      return <ProjectMainCreditCard />;
    default:
      return null;
  }
};

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const meta = projects.find((p) => p.slug === slug);
    const MainComponent = getMainComponent(slug);

    if (!meta || !MainComponent) return notFound();

    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            <ProjectsHeader />  
            <ProjectIntro {...meta} />
            {MainComponent}
        </div>
    );
}
