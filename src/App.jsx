import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Solutions from '@/components/Solutions';
import IAgri from '@/components/IAgri';
import News from '@/components/News';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Solutions />
        <IAgri />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
