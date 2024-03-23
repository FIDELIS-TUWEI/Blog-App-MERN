import "./about.css";
import AboutImage from "../../assets/about1.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about--image">
        <img src={AboutImage} alt="" />
      </div>
    </section>
  )
}

export default About;