import Navbar from "./layout/Navbar";
import Hero from "./layout/Hero";
import Functionality from "./layout/Functionality"; 
import Contact from "./layout/Contact";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Functionality />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;