"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid md:grid-cols-5 gap-3 md:gap-5">
        <figure>
          <figcaption className="font-extrabold">Languages</figcaption>
          <ul className="list-disc pl-2">
            <li>Java</li>
            <li>Python</li>
            <li>C/C++</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>R</li>
            <li>Shell Script</li>
          </ul>
        </figure>
        <figure>
          <figcaption className="font-extrabold">Research</figcaption>
          <ul className="list-disc pl-2">
            <li>LaTex</li>
            <li>Overleaf</li>
            <li>Jupyter Notebook</li>
            <li>Scikit-learn</li>
            <li>Pandas</li>
            <li>Numpy</li>
            <li>Seaborn</li>
            <li>Matplotlib</li>
            <li>PyTorch</li>
          </ul>
        </figure>
        <figure>
          <figcaption className="font-extrabold">Front-end</figcaption>
          <ul className="list-disc pl-2">
            <li>React</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>MUI</li>
            <li>Chakra UI</li>
            <li>Tailwind CSS</li>
          </ul>
        </figure>
        <figure>
          <figcaption className="font-extrabold">Back-end</figcaption>
          <ul className="list-disc pl-2">
            <li>Node.js</li>
            <li>Express</li>
            <li>Spring Boot</li>
            <li>Redis</li>
            <li>MyBatis</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>DynamoDB</li>
          </ul>
        </figure>
        <figure>
          <figcaption className="font-extrabold">DevOps</figcaption>
          <ul className="list-disc pl-2">
            <li>Bash</li>
            <li>Git</li>
            <li>Docker</li>
            <li>CI/CD</li>
            <li>Infra as Code</li>
            <li>Serverless</li>
            <li>AWS</li>
            <li>GCP</li>
            <li>Firebase</li>
          </ul>
        </figure>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          University of Ottawa - Ottawa, ON, CA
          <ul>
            <li>BSc (Hons.), Summa Cum Laude, Computer Science, 2022</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          AWS
          <ul>
            <li>Solutions Architect - Associate</li>
            <li>Developer - Associate</li>
            <li>SysOps Administrator - Associate</li>
            <li>Data Engineer - Associate</li>
            <li>Cloud Practitioner</li>
            <li>AI Practitioner</li>
          </ul>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about/desk-fixed.png" width={500} height={500} alt="about image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Wenglei Wu is a full-stack developer with a passion for creating funny and innovative 
            applications with secure, resilient, and high-performing architectures. 
            He is a quick learner and always expanding his knowledge and skill set. 
            He envisions himself as a versatile developer, a solutions architect, 
            a curious researcher, and a SaaS platform founder.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
