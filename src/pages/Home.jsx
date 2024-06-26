import "./pages.scss";
import AnimatedLetters from "../components/Animations/AnimatedLetters";
import AnimatedLogo from "../components/Animations/AnimatedLogo";
import LogoS from "../assets/images/logo-s.png";

const handleAnimationEnd = (e) => {
  e.target.style["opacity"] = `1`;
  e.target.style["animation"] = `none`;
  e.target.classList.add("hover_enabled");
};

export default function Home() {
  return (
    <>
      <div className="current-page home-page">
        <div className="page-text-container">
          <h1>
            <AnimatedLetters word={"Hello, I am"} start_delay={1} />
            <br />
            <AnimatedLetters word={"Muhammad"} start_delay={10} />
            <img
              id="text-s-logo"
              src={LogoS}
              alt="S"
              onAnimationEnd={handleAnimationEnd}
            />{" "}
            <AnimatedLetters word={"hayan,"} start_delay={20} />
            <br />
            <AnimatedLetters word={"A CS Enthusiast"} start_delay={27} />
          </h1>

          <h5>BS-CS Senior @ LUMS, Full Stack Web Developer</h5>

          <a href="/contact"><button className="flat-btn">CONTACT US</button></a>
        </div>

        <AnimatedLogo />
      </div>
    </>
  );
}