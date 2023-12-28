import blob from "../assets/profile.svg";
import profile from "../assets/profile.jpg";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import "../index.css"; 

export default function Home() {
  return (
    <div>
      <div className='flex flex-col-reverse  p-2  lg:flex-row items-center lg:mt-[4rem] mt-[84px]'>
        <div className=" w-full lg:w-1/2 lg:h-[700px]">
          <div className="lg:ml-[60px] mt-[40px] lg:mt-[120px] flex flex-col">
            <div className="flex items-center m-auto lg:m-0">
              <div className="border-t-2 border-[rgba(241,180,62)] w-[25px] mr-1"></div>
              <div className="text-[24px] text-center text-[rgba(241,180,62)]">Hello</div>
            </div>
            <div className="text-[40px] font-bold text-center my-4 lg:text-left">I am Hardik Garg!</div>
            <div className="text-[1.2rem] text-center text-[gray] mb-5 lg:text-left">Full stack developer</div>
            <div className="text-[1.2rem] text-center text-[gray] lg:text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis itaque possimus, quidem placeat omnis, officia deleniti animi tempora maiores doloribus earum minima cum debitis, consequatur dolore? Ullam qui numquam quis.
            Autem earum illo, repudiandae distinctio velit neque aspernatur porro cupiditate exercitationem recusandae maiores aperiam voluptate minus expedita ad, fuga molestias vero explicabo aut omnis eos veniam! Reprehenderit tenetur unde magnam.</div>
          </div>
        </div>
        <div className=" w-full flex justify-center items-center lg:w-1/2 lg:h-[700px]">
          <div className=" lg:h-[450px] lg:w-[450px] mx-[40px] md:mx-[100px]">
            <img src={profile} className="bg-cover bg-center animate-myAnime rounded-full"></img>
          </div>
          {/* <img src={blob} className="z-0 absolute"></img> */}
        </div>
      </div>
      <div className=" w-full "><h1 className="text-center space-x-4 font-semibold font-dm-sans text-7xl sm:text-[9rem] md:text-[9rem] lg:text-[15rem] xl:text-[18rem] leading-none tracking-tighter whitespace-nowrap m-0 p-0 text-[rgba(241,180,62)]">Skills</h1></div>
      <div>
        <div className="flex flex-col">
          <div className="flex lg:flex-row flex-col items-center  lg:mx-[2rem]">
            <div className=" lg:w-1/2 flex h-auto w-[100%] justify-evenly">
              <div className=" lg:w-1/2 w-[8rem] m-[1rem] flex flex-col items-center rounded-[2rem] bg-gray-700"><GrReactjs  size={100}/><div className="text-[rgba(241,180,62)] bg-cover">React js</div></div>
              <div className=" lg:w-1/2 w-[8rem] m-[1rem] flex flex-col items-center rounded-[2rem] bg-gray-700"><FaNodeJs size={100}/><div className="text-[rgba(241,180,62)] bg-cover">Node js</div></div>
            </div>
            <div className="lg:w-1/2 flex h-auto w-[100%] justify-evenly">
              <div className="lg:w-1/2 w-[8rem] m-[1rem] flex flex-col items-center rounded-[2rem] bg-gray-700"><IoLogoJavascript size={100}/><div className="text-[rgba(241,180,62)]">JavaScript</div></div>
              <div className="lg:w-1/2 w-[8rem] m-[1rem] flex flex-col items-center rounded-[2rem] bg-gray-700"><FaHtml5 size={100}/><div className="text-[rgba(241,180,62)]">Html</div></div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:mx-[2rem]">
            <div className="lg:w-1/2 flex h-auto w-[100%] justify-evenly">
              <div className=" lg:w-1/2 w-[8rem] m-[1rem] flex flex-col items-center rounded-[2rem] bg-gray-700"><FaCss3Alt  size={100}/><div className="text-[rgba(241,180,62)] bg-cover">Css</div></div>
              <div className=" lg:w-1/2 w-[8rem] m-[1rem] flex flex-col items-center rounded-[2rem] bg-gray-700"><SiTailwindcss size={100}/><div className="text-[rgba(241,180,62)] bg-cover">Tailwind css</div></div>
            </div>
            <div className=" lg:w-1/2 flex h-auto w-[100%] justify-evenly">
              <div className="lg:w-1/2 w-[8rem] m-[1rem] flex flex-col items-center rounded-[2rem] bg-gray-700"><SiMongodb size={100}/><div className="text-[rgba(241,180,62)]">MongoDB</div></div>
              <div className="lg:w-1/2 w-[8rem] m-[1rem] flex flex-col items-center rounded-[2rem] bg-gray-700"><SiExpress size={100}/><div className="text-[rgba(241,180,62)]">Express</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
