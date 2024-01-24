
import { FaGithub } from "react-icons/fa";
import blog from "../assets/blog.svg";
import portfolio from "../assets/portfolio.svg";
import agro from "../assets/agro.png";
import { Link } from "react-router-dom";
export default function Work() {
  return (
<div>
      <div className=" w-full  mt-[84px] lg:mt-[96px]"><h1 className="text-center space-x-4 font-semibold font-dm-sans text-7xl sm:text-[9rem] md:text-[9rem] lg:text-[15rem] xl:text-[18rem] leading-none tracking-tighter whitespace-nowrap m-0 p-0 text-[rgba(241,180,62)]">All Works</h1></div>
      <div className="flex flex-col">
        <div className=" mt-[2rem] mb-[1rem] flex flex-col lg:flex-row ">
          <div className="lg:w-1/4 m-[0.7rem] h-auto border border-white lg:ml-[4rem] lg:mr-[1rem]  rounded-[2rem] bg-gray-700">
          <a href="https://github.com/Hardik2972/Agro" target="_blank" rel="noopener noreferrer"> 
            <div className=" flex flex-col justify-center items-center h-auto mb-2">
              <div className="h-1/2 md:w-1/4 lg:w-1/2 w-1/2">
                <img src={agro} className="bg-cover bg-center p-2 rounded-[2rem]"></img>
              </div>
              <div className=" h-1/4 flex flex-col w-3/4 justify-center items-center">
                <div className="text-center text-[rgba(241,180,62)] text-[1.5rem] font-bold">Agro App</div>
              </div>
            </div>
          </a>
          </div>
          <div className="lg:w-1/2 m-[0.7rem] h-auto border border-white lg:mr-[1rem] lg:ml-[1rem] rounded-[2rem] bg-gray-700 flex flex-col justify-center">
          <a href="https://github.com/Hardik2972/hackout_Project" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col justify-center items-center lg:ml-[1rem] lg:justify-start lg:flex-row mb-2">
               <div className="h-1/2 w-1/4 lg:h-[100%]">
                <img src={blog} className="bg-cover bg-center"></img>
              </div>
              <div className="lg:h-[100%] h-1/2 flex flex-col w-3/4 justify-center items-center lg:items-start lg:ml-[1rem]">
                <div className="text-center lg:text-left text-[rgba(241,180,62)] text-[1.5rem] font-bold">Virangna Blogging Website</div>
                <div className="text-center lg:text-left text-[1rem]">Developed a college blogging site. Implemented incident reporting with map visualization using Leaflet, showcasing danger zones within the campus.</div>
              </div>
            </div>
            </a>
          </div>
          <div className="lg:w-1/4 m-[0.7rem] h-auto border border-white lg:mr-[4rem] lg:ml-[1rem] rounded-[2rem] bg-gray-700">
            <a href="https://github.com/Hardik2972/Portfolio" target="_blank" rel="noopener noreferrer"> 
              <div className="flex flex-col justify-center items-center h-auto mb-2">
                <div className="h-1/2 md:w-1/4 lg:w-1/2 w-1/2">
                  <img src={portfolio} className="bg-cover bg-center"></img>
                </div>
                <div className=" h-1/4 flex flex-col w-3/4 justify-center items-center">
                  <div className="text-center text-[rgba(241,180,62)] text-[1.5rem] font-bold">Portfolio Website</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      
        <div className="mt-[2rem] mb-[1rem] flex flex-col lg:flex-row ">
          <div className="lg:w-3/4 m-[0.7rem] h-auto  lg:ml-[4rem] border border-white lg:mr-[1rem] rounded-[2rem] bg-gray-700">
          <Link to='/contact'>
            <div className="lg:mt-[4rem] lg:ml-[2rem] mt-[2rem] mx-[1rem]">
            <div className="text-[2rem] font-bold my-[1rem] text-[rgba(241,180,62)]">Lets Work Together ✨</div>
              <div className="text-[1.5rem] my-[1rem]">Get In Touch Now 🔎</div>
              
            </div>
            </Link>
          </div>
          <div className="lg:w-1/4 m-[0.7rem] h-auto border border-white lg:mr-[4rem] lg:ml-[1rem] rounded-[2rem] bg-gray-700">
          <div className="flex justify-center items-center h-full">
          <a href="https://github.com/Hardik2972" target="_blank" rel="noopener noreferrer">
            <button >
                <FaGithub size={200} />
            </button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
