import "./home.css";
import Background from "../../assets/bg1.jpg";

const Home = () => {
  return (
    <section id="home" className="home">
        <div className="home--image">
          <img src={Background} alt="" />
        </div>
        
    </section>
  )
}

export default Home;