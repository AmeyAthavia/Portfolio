import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Socials from "./components/Socials";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { Skills } from "./components/Skills";
import Contact from "./components/Contact";
import Modal from "./components/Modal";
// import {Parallax, ParallaxLayer} from '@react-spring/parallax';
// import sky from './assets/starry-sky.jpg';

function App() {
  return (
    <div className="App ">
      
      <NavBar />
      <Home /> 
      <Projects />
      <Experience /> 
      <Modal />
      <Skills /> 
      <About />
      <Contact />
      <Socials />
      
    </div>
  );
}

export default App;
