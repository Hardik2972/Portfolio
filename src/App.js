import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import {
 Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-black items-center justify-center text-white font-sans ">
      
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/about/*" element={<About/>} />
        <Route path="/work/*" element={<Work/>} />
        <Route path="/contact/*" element={<Contact/>}/>
      </Routes>
  
      <Footer/>

    </div>
  );
}

export default App;
