import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Project from "@/components/Project/Project";
import Skills from "@/components/Skills/Skills";
import Testimonial from "@/components/Testimonial/Testimonial";
import WorkDetail from "@/components/WorkDetail/WorkDetail";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <WorkDetail/>
    <About/>
    <Testimonial/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  );
}
