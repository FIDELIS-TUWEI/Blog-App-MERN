import { useState } from "react";
import Footer from "./components/Footer";
import Header, { ResponsiveMenu } from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <>
        <ResponsiveMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <Services />
        <Footer />
      </>
  )
}

export default App;
