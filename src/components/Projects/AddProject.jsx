/* eslint-disable react/prop-types */
import AnimatedLetters from "../Animations/AnimatedLetters";
import Slider from "react-slick";

// eslint-disable-next-line react/prop-types
const AddProject = ({ heading, type, stack, url, images }) => {
  const projImgSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    vertical: true,
    fade: true,
    speed: 750,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    pauseOnHover: false,
    slide: "",
  };

  return (
    <div className="project" key={heading}>
      <div className="page-text-container project-details w-60">
        <div className="project-heading">
          <h1>
            <AnimatedLetters word={heading} start_delay={8} />
            <br />
          </h1>
        </div>
        <div className="project-subdetails mt-30" style={{ animation: `fadeIn 0.5s ease forwards`, animationDelay: `${0.1 * heading.length + 0.6}s`, opacity: 0 }}>
          <h5>Project Type: {type}</h5>
          <h5>Tech Stack: {stack}</h5>
          <a href={url}><button className="flat-btn mt-20">VIEW HERE</button></a>
        </div>
      </div>

      <div className="project-images">
        <Slider {...projImgSettings}>
          {
            // eslint-disable-next-line react/prop-types
            images.map((img, idx) => {
              return (
                <div key={idx} className="project-img">
                  <img src={img} />
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default AddProject;
