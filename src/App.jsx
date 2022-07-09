// React Bootstrap Styles
import 'bootstrap/dist/css/bootstrap.min.css';
// Global Styles
import './App.css';
// Hero Section Component
import Banner from './components/Banner';
// Navbar Component
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
    </div>
  );
}

export default App;
