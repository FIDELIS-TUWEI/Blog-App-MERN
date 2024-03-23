import "./home.css";
import Background from "../../assets/bg1.jpg";
import Banner from "../../assets/Banner.png";
import SuccessBanner from "../../assets/about2.jpg";

const HeroLanding = () => (
  <>
    <div className="home--image">
      <img src={Background} alt="" />
    </div>
        
    <div className="home--info">
      <div className="banner--image">
        <img src={Banner} alt="" />
      </div>

      <div className="home--content">
        <h2 className="home--slogan">Leading Guest entertainment and communication solutions in Africa</h2>
        <p className="home--text">
          In partnership with leading global ICT companies we design and deliver highly <br /> innovative solutions that add value to our clients’ service. <br />
          We have a strong commitment to good customer service delivered through our <br /> support offices in Nairobi.
        </p>

        <div className="home--btn">
          <button>More</button>
          <button>Work with Us</button>
        </div>
      </div>
    </div>
  </>
);

const HeroContent = () => (
  <div className="success--container">
      <img src={SuccessBanner} alt="" />

      <div className="success--content">
        <p>10+ years of success stories across Africa</p>
        <h3>
          Providing our clients with premium, Innovative solutions and enhanced overall customer experience.
        </h3>

        <br />
        
        <button className="story--btn">Success Stories</button>
        <button className="start--btn">Start Today</button>

      </div>
      
  </div>
);

const HeroSolutions = () => (
  <div className="solutions--container">
      <h4>Solutions</h4>
  </div>
)

const Home = () => {
  return (
    <section id="home" className="home">
      <HeroLanding />
      <HeroContent />
      <HeroSolutions />
    </section>
  )
}

export default Home;