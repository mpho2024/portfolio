// components/Projects.js
import Head from 'next/head';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Quiz Project',
    description: 'A fun and interactive quiz app built with HTML, CSS, and JavaScript.',
    image: '/images/projects/quiz.png',
    link: '/projects/quiz-project',
  },
  {
    title: 'Office Booking System',
    description: 'An office booking app for organizations using Angular and Spring Boot.',
    image: '/images/projects/office.png',
    link: '/projects/office-booking-system',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-10 bg-white">
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Portfolio Projects" />
      </Head>

      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
