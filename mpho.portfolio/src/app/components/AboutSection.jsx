"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TabButton from "./TabButton";
{/*
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="skills-grid">
        <div className="skill-item">
          <div className="skill-circle-container">
            <div className="skill-circle">PostgreSQL</div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-circle-container">
            <div className="skill-circle">Angular</div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-circle-container">
            <div className="skill-circle">Spring Boot</div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-circle-container">
            <div className="skill-circle">JavaScript</div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-circle-container">
            <div className="skill-circle">Next.js</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Mokgubi Secondary School</li>
        <li>University Of Mpumalanga</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Web Development (Udemy)</li>
        <li>JavaScript ES6 (Coursera)</li>
      </ul>
    ),
  },
];*/}

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex flex-col items-center">
          {/* Profile image with oval shape */}
          <div className="overflow-hidden w-64 h-80 rounded-full">
            <Image
              src="/images/mphop.png"
              width={500}
              height={500}
              alt="Profile Image"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Social icons below the profile image */}
          <div className="flex space-x-4 mt-4">
            <Link href="https://github.com/mpho2024" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/GITT.png"
                alt="GitHub"
                width={50}
                height={50}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/mpho-tsatsi-5a93472a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android">
              <Image
                src="/images/linkedincon.png"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#4B0082] mb-4">Hello, I am Mpho Tsatsi!</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript,Springboot
            PostgreSQL,HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
          </p>
       {/* <div className="flex flex-row text-[#4B0082] justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>*/}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
