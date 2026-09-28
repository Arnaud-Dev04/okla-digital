import Header       from "./components/Header";
import Hero         from "./components/Hero";
import About        from "./components/About";
import Services     from "./components/Services";
import WhyUs        from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import CtaStrip     from "./components/CtaStrip";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <CtaStrip />
        <Contact />
      </main>
      <Footer />
    </>
  );
}