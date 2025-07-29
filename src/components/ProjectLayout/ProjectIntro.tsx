interface ProjectHeaderProps {
  title: string;
  description: string;
  date: string;
  image: string;
}

const ProjectIntro: React.FC<ProjectHeaderProps> = ({ title, description, date, image }) => (
  <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-10">
    <img src={image} alt={title} className="w-full h-64 object-cover opacity-30 absolute inset-0" />
    <div className="relative z-10 p-8">
      <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-600 mt-2">{description}</p>
      <p className="text-sm text-gray-500 italic mt-1">{date}</p>
    </div>
  </div>
);

export default ProjectIntro;
