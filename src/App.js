import './App.css';
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx';
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
