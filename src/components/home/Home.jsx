import "./home.css";
import Background from "../../assets/bg1.jpg";
import Banner from "../../assets/Banner.png";
import SuccessBanner from "../../assets/about2.jpg";
import ServiceAgent from "../../assets/agent.jpg";

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
  <>
    <div className="solutions--content">
      <h4>Solutions</h4>
      <h2>Expertise</h2>
    </div>
    <div className="card--container">
      <article className="card--layout">
        <div className="card--title">
          <h5>IPTV</h5>
        </div>

        <p>
          IPTV is the new generation of High Definition (HD) digital interactive television systems for hotels, communities and ships
        </p>
        <button className="start--btn">Start Today</button>
      </article>

      <article className="card--layout">
        <div className="card--title">
          <h5>HSIA</h5>
        </div>

        <p>
          For today’s increasingly mobile world, a guest’s main focus is around High-Speed Internet Access (HSIA). The PTC HSIA platform is an ideal solution to connect the guest’s devices
        </p>
        <button className="story--btn">Learn More</button>
      </article>

      <article className="card--layout">
        <div className="card--title">
          <h5>Digital Signage</h5>
        </div>

        <p>
          PTC offers Digital Signage solutions that relay eye-catching messages and promotions. Digital signage is one of the most effective communication mediums in the market
        </p>
        <button className="story--btn">Learn More</button>
      </article>

      <article className="card--layout">
        <div className="card--title">
          <h5>CCTV</h5>
        </div>

        <p>
          We are installers of CCTV cameras offering the best high end CCTV equipment. Our cameras offer feature for remote viewing via mobile phone, tablet or PC
        </p>
        <button className="start--btn">Learn More</button>
      </article>

      <article className="card--layout">
        <div className="card--title">
          <h5>Hotel PMS</h5>
        </div>

        <p>
          Our Hotel Management software (AI-Powered) is an ideal application for hotel businesses. It is an integrated software solution that helps you manage the hotel's operations like booking, management, organization, and other related procedures
        </p>
        <button className="story--btn">Learn More</button>
      </article>

      <article className="card--layout">
        <div className="card--title">
          <h5>Training</h5>
        </div>

        <p>
        At PTC, training forms a fundamental part of our total solution approach. We have qualified training personnel available to ensure that our clients are properly and efficiently trained in the operation of any equipment and software, which we provide
        </p>
        <button className="story--btn">Learn More</button>
      </article>
    </div>
  </>
);

const HeroService = () => (
    <div className="services--container">
      <img src={ServiceAgent} alt="" />
    </div>
)

const Home = () => {
  return (
    <section id="home" className="home">
      <HeroLanding />
      <HeroContent />
      <HeroSolutions />
      <HeroService />
    </section>
  )
}

export default Home;