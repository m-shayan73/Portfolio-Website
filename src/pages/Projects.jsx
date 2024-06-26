import { useEffect, useRef } from "react";
import AddProject from "../components/Projects/AddProject";
import projectsData from "../data/projects.json";
import 'react-awesome-slider/dist/styles.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Projects() {
  const slider = useRef(null);
  let enableSliderScroll = true;

  function scroll(e) {
    if (enableSliderScroll === true) {
      enableSliderScroll = false;
      if (slider === null) return 0;

      e.wheelDelta > 0
        ? slider.current.slickNext()
        : slider.current.slickPrev();

      setTimeout(() => {
        enableSliderScroll = true;
      }, 2000)
    }
  }

  useEffect(() => {
    window.addEventListener("wheel", scroll, true);

    return () => {
      window.removeEventListener("wheel", scroll, true);
    };
  }, []);
  

  return (
    <>
      <div className="project-page">
        {projectsData.map((projectTypeObj) => {
          let projectType = projectTypeObj.type;
          return (
            <div key={projectType}>
              <div>
                <Carousel>
                  {projectTypeObj.projects.map((typeProjectsObj, index) => (
                    <div key={index}>
                      <AddProject
                        heading={typeProjectsObj.name}
                        type={projectType}
                        stack={typeProjectsObj.stack}
                        url={typeProjectsObj.url}
                        images={typeProjectsObj.images}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
