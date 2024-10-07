
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact'
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';
import Service from './Components/Service/Service';
import Project from './Components/Project/Project';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Service/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
