import Cards from "./components/Cards";
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
</div>
);

export default App;
