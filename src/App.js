import './App.css';
import "./index.css"
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience';

import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div >
       <Header />
       <Navbar />
       <About />
       <Experience />
      
       < Portfolio />
       <  Contact/>
       < Footer />
    </div>
  );
}

export default App;
