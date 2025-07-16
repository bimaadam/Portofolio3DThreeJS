import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { Helmet } from "react-helmet";

const Projects = () => {
  return (
    <section className="max-container">
      <Helmet>
        <title>Bima Adam | Project Showcase</title>
        <meta
          name="description"
          content="Real projects built by Bima Adam including ESP32 LED controller via WebSocket, server monitoring bot, AI chatbot, and object detection app using Python."
        />
        <meta
          name="keywords"
          content="Bima Adam projects, ESP32 WebSocket, TypeScript bot, JavaScript AI bot, object detection Python, fullstack developer portfolio"
        />
      </Helmet>
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        I've worked on various projects over the years, but these are the ones
        I’m most proud of. Many are open-source — so if something catches your
        eye, feel free to dive into the code and drop your ideas for
        improvement. Your contribution means a lot and is always welcome!
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
