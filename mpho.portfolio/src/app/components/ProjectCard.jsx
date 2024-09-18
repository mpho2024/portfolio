import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="rounded-lg object-cover mb-4"
      />
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link href={link} className="text-blue-500 hover:underline">
        View Project
      </Link>
    </div>
  );
};

export default ProjectCard;
