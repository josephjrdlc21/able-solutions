import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Services from './components/Services';

function App() {
  return (
    <div className="App overflow-x-hidden">
        <Navbar/>
      <div className="bg-blue-600 w-full pb-10 md:pb-20">
        <Home/>
      </div>
        <About/>
        <Services/>
        <Pricing/>
        <Contact/>
      
      <div className="w-full bg-blue-600 mt-28">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
