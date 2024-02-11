import React from "react";
import { Link } from 'react-router-dom'


const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-2xl min-h-screen gap-6 p-3 mx-auto">
      <h1 className="text-3xl font-semibold">Portfolio</h1>
      <p className="text-gray-500 text-md">
       Click the link below to checkout other projects on my portfolio.
      </p>
      <Link to='https://65c7dbb18e86129f246cde12--jade-platypus-6a50fe.netlify.app/' target="_blank">My Projects</Link>
    </div>
  );
};

export default Projects;
