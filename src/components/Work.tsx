import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { projects } from "../data/projectsData";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{project.id}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <div className="work-actions">
                  {project.githubLink ? (
                    <a
                      className="work-action-btn"
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor={"disable"}
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <span
                      className="work-action-btn work-action-btn-disabled"
                      aria-label={`${project.title} GitHub repository not available`}
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </span>
                  )}
                  {project.hostedLink ? (
                    <a
                      className="work-action-btn"
                      href={project.hostedLink}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor={"disable"}
                      aria-label={`${project.title} hosted link`}
                    >
                      <MdOpenInNew />
                      <span>Live</span>
                    </a>
                  ) : (
                    <span
                      className="work-action-btn work-action-btn-disabled"
                      aria-label={`${project.title} hosted link not available`}
                    >
                      <MdOpenInNew />
                      <span>Live</span>
                    </span>
                  )}
                </div>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
