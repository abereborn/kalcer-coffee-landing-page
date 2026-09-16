import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureBar from "./components/FeatureBar";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAdd = () => {
    setCartCount((c) => c + 1);
  };

  return (
    <div className="min-h-screen bg-paper">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <FeatureBar />
        <About />
        <Menu onAdd={handleAdd} />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
