import {useState} from "react";
import {FaBars,FaTimes} from "react-icons/fa"

export default function Navbar() {
  const [hamIcons , setHamIcons] = useState(false);
  return (
    <div>
      <nav className="bg-black fixed w-full top-0 z-50">
        <div className="px-6 py-6 flex  justify-between">

          <div className=" ml-100  font-signature text-3xl md:text-5xl lg:text-5xl">Hardik</div>
          <div className="max-lg:hidden mx-2 my-2 flex justify-evenly items-center w-2/4 ">
              <div className="text-lg">Home</div>
              <div className="text-lg">Project</div>
              <div className="text-lg">About</div>
              <div className="text-lg">Resume</div>
          </div>
          
          <button className="max-lg:hidden  text-lg border ease-in-out duration-300 bg-white font-bold text-black rounded-full w-auto px-[1rem]">
            Get In Touch
          </button>
          <button onClick={()=>{setHamIcons(!hamIcons)}} className="lg:hidden pointer-events-hover">
            {hamIcons?<FaTimes size={30}></FaTimes>:<FaBars size={30}></FaBars>}
          </button>
        </div>
        {hamIcons && 
          <div className="lg:hidden border border-sky-400 w-[100%] bg-black flex-col justify-evenly align-middle absolute z-10 ">
              <div className="text-center my-4 text-lg">Home</div>
              <div className="text-center my-4 text-lg">Project</div>
              <div className="text-center my-4 text-lg">About</div>
              <div className="text-center my-4 text-lg">Resume</div>
              <div className="text-center my-4">
                <button className=" bg-white text-lg font-bold text-black rounded-full w-auto px-[1rem] ease-in-out duration-300">
                Get In Touch
                </button>
               </div>
          </div>
          }
      </nav>
    </div>
  );
}
