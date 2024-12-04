import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex px-10 flex-col gap-5 h-screen justify-center items-center">
      <h1 className="text-6xl font-bold text-blue-500">About Me</h1>
      <p className="text-2xl text-gray-600">
        I am a software engineer with a passion for building web applications
        using React and Next.js.
      </p>
      <p className="text-2xl text-gray-600">
        I have been working in the industry for 5 years and have developed a
        wide range of skills, from front-end development to back-end
        development.
      </p>
      <p className="text-2xl text-gray-600">
        I also have experience with DevOps and creating CICD pipelines using
        Docker and Kubernetes.
      </p>

      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Home
      </Link>
    </div>
  );
};

export default AboutPage;
