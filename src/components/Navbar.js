import {useState} from "react";
import {FaBars,FaTimes} from "react-icons/fa"
import { Link } from "react-router-dom";
export default function Navbar() {
  const [hamIcons , setHamIcons] = useState(false);
  return (
    <div>
      <nav className="bg-black fixed w-full top-0 z-50">
        <div className="px-6 py-6 flex  justify-between">

          <div className=" ml-100  font-signature text-3xl md:text-5xl lg:text-5xl">Hardik</div>
          <div className="max-lg:hidden mx-2 my-2 flex justify-evenly items-center w-2/4 ">
              <div className="text-lg"><Link to='/' >Home</Link></div>
              <div className="text-lg"><Link to='/work' >Project</Link></div>
              <div className="text-lg"><Link to='/about' >About</Link></div>
              <div className="text-lg"><a href="https://drive.google.com/file/d/1ZuK5J0caGg8T_W5uLNnBWROPokSSgzoL/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        Resume
      </a></div>
      </div>
          
          <button className="max-lg:hidden  text-lg border ease-in-out duration-300 bg-white font-bold text-black rounded-full w-auto px-[1rem]">
          <Link to='/contact'>Get In Touch</Link>
          </button>
          <button onClick={()=>{setHamIcons(!hamIcons)}} className="lg:hidden pointer-events-hover">
            {hamIcons?<FaTimes size={30}></FaTimes>:<FaBars size={30}></FaBars>}
          </button>
        </div>
        {hamIcons && 
          <div className="lg:hidden border border-sky-400 w-[100%] bg-black flex-col justify-evenly align-middle absolute z-10 ">
              <div className="text-center my-4 text-lg"><Link to='/' >Home</Link></div>
              <div className="text-center my-4 text-lg"><Link to='/work' >Project</Link></div>
              <div className="text-center my-4 text-lg"><Link to='/about' >About</Link></div>
              <div className="text-center my-4 text-lg"><a href="https://drive.google.com/file/d/1ZuK5J0caGg8T_W5uLNnBWROPokSSgzoL/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        Resume
      </a></div>
              <div className="text-center my-4">
                <Link to='/contact'>
                <button className=" bg-white text-lg font-bold text-black rounded-full w-auto px-[1rem] ease-in-out duration-300">
                Get In Touch
                </button>
                </Link>
               </div>
          </div>
          }
      </nav>
    </div>
  );
}
