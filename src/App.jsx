import { useState } from "react";
import Header, { ResponsiveMenu } from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <>
        <ResponsiveMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
      </>
  )
}

export default App;
