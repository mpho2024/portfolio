// pages/skills.js
import Navbar from '../components/Navbar';

const skills = [
  { name: 'JavaScript', level: 50, image: '/images/icon/js.png' },
  { name: 'React', level: 30, image: '/images/icon/react.png' },
  { name: 'Next.js', level: 60, image: '/images/icon/nextjs.png' },
  { name: 'Angular', level: 70, image: '/images/icon/angular.png' },
  { name: 'Spring Boot', level: 60, image: '/images/icon/spring-boot.png' },
  { name: 'PostgreSQL', level: 50, image: '/images/icon/postgre.png' },
  { name: 'HTML', level: 70, image: '/images/icon/html.png' },
  { name: 'CSS', level: 40, image: '/images/icon/css.png' }
];

const Skills = () => {
  return (
    <>
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-8">Skills</h1>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-4 text-left flex items-center">
              <img src={skill.image} alt={skill.name} className="w-8 h-8 mr-4" />
              <div className="flex-1">
                <span className="block text-lg font-semibold mb-2">{skill.name}</span>
                <div className="relative h-4 bg-gray-200 rounded">
                  <div
                    className="absolute top-0 left-0 h-full bg-[#4B0082] rounded"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
