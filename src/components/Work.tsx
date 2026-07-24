import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    function getTranslateX() {
      const boxes = document.querySelectorAll(".work-box");
      const workContainer = document.querySelector(".work-container") as HTMLElement;
      if (!boxes || boxes.length === 0 || !workContainer) return 0;

      const lastBox = boxes[boxes.length - 1] as HTMLElement;
      const totalWidth = lastBox.offsetLeft + lastBox.offsetWidth;
      const containerWidth = workContainer.clientWidth;

      return Math.max(0, totalWidth - containerWidth + 50);
    }

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(refreshTimer);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  const projects = [
    {
      title: "Clothing Customization E-Commerce",
      category: "Full-Stack Web App",
      tools: "HTML, CSS, JavaScript, React",
    },
    {
      title: "Spotify Clone (Machine Learning)",
      category: "Python ML & Data Processing",
      tools: "Python, Machine Learning, Data Visualization",
    },
    {
      title: "Cyber Attack Detector System",
      category: "Cybersecurity & Database",
      tools: "Python, MySQL, Database Security",
    },
    {
      title: "Bubble Smash Game",
      category: "Web Game Development",
      tools: "HTML, CSS, JavaScript",
    },
    {
      title: "Weather Forecast Web App",
      category: "Web Application",
      tools: "Servlet Java, HTML, CSS",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
