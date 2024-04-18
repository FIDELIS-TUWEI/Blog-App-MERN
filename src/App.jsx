import Cards from "./components/Cards";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import {
  Navbar, Hero, Analytics
} from "./components/index"

const App = () => (
<div>
  <Navbar />
  <Hero />
  <Analytics />
  <NewsLetter />
  <Cards />
  <Footer />
</div>
);

export default App;
