import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Certifications from '../components/sections/Certifications';
import Education from '../components/sections/Education';
import CodingProfiles from '../components/sections/CodingProfiles';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Education />
      <CodingProfiles />
      <Contact />
    </>
  );
};

export default Home;
