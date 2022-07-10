// React Bootstrap Styles
import 'bootstrap/dist/css/bootstrap.min.css';
// Global Styles
import './App.css';
// Hero Section Component
import HeroSection from './components/HeroSection';
// Navbar Component
import NavBar from './components/NavBar';
// Skills Component
import Skills from './components/Skills';
// Projects Component
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
