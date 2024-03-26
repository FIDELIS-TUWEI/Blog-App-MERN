import "./home.css";
import Background from "../../assets/bg1.jpg";
import Banner from "../../assets/Banner.png";
import SuccessBanner from "../../assets/about2.jpg";
import ServiceAgent from "../../assets/agent.jpg";
import Logo from "../../assets/Logo.png";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter, FaMapLocationDot } from "react-icons/fa6";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { motion } from "framer-motion";

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
    <motion.div 
      className="card--container"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
    >
      <article className="card--layout">
        <div className="card--title">
          <h5>IPTV</h5>
        </div>

        <p>
          IPTV is the new generation of High Definition (HD) digital interactive television systems for hotels, communities and ships
        </p>
      </article>

      <article className="card--layout">
        <div className="card--title">
          <h5>HSIA</h5>
        </div>

        <p>
          For today’s increasingly mobile world, a guest’s main focus is around High-Speed Internet Access (HSIA). The PTC HSIA platform is an ideal solution to connect the guest’s devices
        </p>
      </article>

      <article className="card--layout">
        <div className="card--title">
          <h5>Digital Signage</h5>
        </div>

        <p>
          PTC offers Digital Signage solutions that relay eye-catching messages and promotions. Digital signage is one of the most effective communication mediums in the market
        </p>
      </article>

      <article className="card--layout">
        <div className="card--title">
          <h5>CCTV</h5>
        </div>

        <p>
          We are installers of CCTV cameras offering the best high end CCTV equipment. Our cameras offer feature for remote viewing via mobile phone, tablet or PC
        </p>
      </article>

      <article className="card--layout">
        <div className="card--title">
          <h5>Hotel PMS</h5>
        </div>

        <p>
          Our Hotel Management software (AI-Powered) is an ideal application for hotel businesses. It is an integrated software solution that helps you manage the hotel's operations like booking, management, organization, and other related procedures
        </p>
      </article>

      <article className="card--layout">
        <div className="card--title">
          <h5>Training</h5>
        </div>

        <p>
        At PTC, training forms a fundamental part of our total solution approach. We have qualified training personnel available to ensure that our clients are properly and efficiently trained in the operation of any equipment and software, which we provide
        </p>
      </article>
    </motion.div>
  </>
);

const HeroService = () => (
    <div className="services--container">
      <img src={ServiceAgent} alt="" />

      <div className="services--content">
        <h2>Service</h2>
        <h5>Client Service</h5>
        <p className="service--text">
        Emergencies are responded to immediately including after office hours and holidays - <br />
        with prior arrangement. Customers who sign-up for 24/7 service are given a stand by <br />
        cell phone number to reach the engineer on after hours assignment for emergency <br /> 
        reporting after office hours and holidays.
        </p>

        <button>More</button>
      </div>
    </div>
);

const HeroContact = () => (
  <div className="contact--container">
    <div className="footer--logo">
      <img src={Logo} alt="" />

      <div className="socials--container">
        <ul className="socials--links">
          <li><a href="#linkedin"><FaLinkedin /></a></li>
          <li><a href="#twitter"><FaSquareXTwitter /></a></li>
          <li><a href="#facebook"><FaFacebook /></a></li>
          <li><a href="#instagram"><FaInstagram /></a></li>
        </ul>
      </div>
    </div>
    
    <motion.div 
      className="contact--cards"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      <article className="contact--layout">
        <div className="contact--info">
          <MdPhoneInTalk />
          <h6>Call Us</h6>
          <span>(+254) 104 132 493</span>
        </div>
      </article>

      <article className="contact--layout">
        <div className="contact--info">
          <MdEmail />
          <h6>Email address</h6>
          <span>info@ptc.co.ke</span>
        </div>
      </article>

      <article className="contact--layout">
        <div className="contact--info">
          <FaMapLocationDot />
          <h6>Location</h6>
          <span>Karen, <br /> Nairobi, KENYA</span>
        </div>
      </article>
    </motion.div>
  </div>
)

const HeroFooter = () => (
  <motion.div 
    className="footer--container"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 2 }}
  >
    <div className="footer-content">
      <ul className="footer--list">
        <li>Privacy Policy</li>
        <li>Terms of Use</li>
        <li>Sitemap</li>
      </ul>
    </div>

    <ul className="footer--terms">
      <li>Copyright &copy; { new Date().getFullYear() }</li>
      <div className="footer--divider"></div>
      <li>PTC Hospitality Systems</li>
      <div className="footer--divider"></div>
      <li>All rights reserved.</li>
    </ul>
  </motion.div>
)

const Home = () => {
  return (
    <section id="home" className="home">
      <HeroLanding />
      <HeroContent />
      <HeroSolutions />
      <HeroService />
      <HeroContact />
      <HeroFooter />
    </section>
  )
}

export default Home;