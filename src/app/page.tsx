import Navbar from './components/Navbar';  
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function MainPage() {
  return (
    <div>
      <Navbar />  
      
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
