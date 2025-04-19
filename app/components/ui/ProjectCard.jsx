import Image from 'next/image';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/80 backdrop-blur-sm hover:border-gray-700 transition-all">
      <div className="aspect-video relative overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <span className="text-gray-400 text-lg font-medium">{title}</span>
          </div>
        )}
      </div>
      
      <div className="p-5 border-t border-gray-800">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description || 'Descrição em breve.'}</p>
        <div className="mt-4 flex justify-end">
          <button className="px-4 py-1.5 rounded-full border border-gray-700 text-gray-300 text-sm hover:bg-gray-800 transition-colors">
            Ver detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 