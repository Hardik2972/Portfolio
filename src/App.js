import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <div className="min-h-screen bg-black items-center justify-center text-white font-sans">
      <Navbar className="fixed"/>
      {/* <Home/> */}
      {/* <About/> */}
      <Work/>
      <Footer/>

    </div>
  );
}

export default App;
