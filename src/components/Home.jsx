import "../styles/home.css";
import Background from "../assets/background1.jpg";

const Home = () => {
  return (
    <section id="home" className="home">
        <h1 className="home--title"></h1>
        <div className="home--image">
          <img src={Background} alt="background image" />
        </div>
    </section>
  )
}

export default Home;