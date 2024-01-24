import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
    
      <div className=" w-full mt-[84px] lg:mt-[96px]"><h1 className="text-center space-x-4 font-semibold font-dm-sans text-7xl sm:text-[9rem] md:text-[9rem] lg:text-[15rem] xl:text-[18rem] leading-none tracking-tighter whitespace-nowrap m-0 p-0 text-[rgba(241,180,62)]">About Me</h1></div>
      <div className="flex flex-col">
        <div className=" mt-[2rem] mb-[1rem] flex flex-col lg:flex-row ">
          <div className="lg:w-1/4 m-[0.7rem] h-auto border border-white lg:ml-[4rem] lg:mr-[1rem]  rounded-[2rem] bg-gray-700">
            <div className="lg:mt-[4rem] lg:ml-[2rem] mt-[2rem] mx-[1rem]">
              <div className="text-[2rem] my-[1rem] font-bold text-[rgba(241,180,62)]">Hi, I am Hardik Garg 👋</div>
              <div className="text-[1.2rem] my-[1rem]">Full Stack Developer</div>
            </div>
          </div>
          <div className="lg:w-3/4 m-[0.7rem] h-auto border border-white lg:mr-[4rem] lg:ml-[1rem] rounded-[2rem] bg-gray-700">
            <div className="lg:mt-[4rem] lg:ml-[2rem] mt-[2rem] mx-[1rem]">
              <div className="text-[2rem] mt-[1rem] mb-[0.5rem] font-bold text-[rgba(241,180,62)]">About me</div>
              <div className="text-[1.2rem] mb-[1.5rem]">Hello, I'm Hardik Garg, a highly motivated and ambitious individual with a burning passion for learning new technologies. I possess a relentless drive to excel in the world of technology and a strong desire to leverage my skills to create innovative solutions that shape the future.</div>
            </div>
          </div>
          {/* <div className="lg:w-1/4 m-[0.7rem] h-[16rem] border border-white lg:mr-[4rem] lg:ml-[1rem] rounded-[2rem] bg-gray-700"></div> */}
        </div>
        <div className=" mt-[2rem] mb-[1rem] flex flex-col lg:flex-row ">
          <div className="lg:w-1/2 m-[0.7rem] h-auto border border-white lg:ml-[4rem] lg:mr-[1rem]  rounded-[2rem] bg-gray-700">
            <div className="lg:mt-[4rem] lg:ml-[2rem] mt-[2rem] mx-[1rem]">
              <div className="text-[2rem] my-[1rem] font-bold text-[rgba(241,180,62)]">Experience 📰</div>
              <div className="text-[1.2rem] my-[1rem]">USIP Lab On Wheels 🚌 InternShip</div>
              <div className="text-[1.2rem] my-[1rem]">Devoted 40+ hours to empower and taught 50+ school students in computer education, covering software,
hardware, internet browsing, MS Office, and Python programming language.</div>
            </div>
          </div>
          {/* <div className="lg:w-1/2 m-[0.7rem] h-[16rem] border border-white lg:mx-[1rem] rounded-[2rem] bg-gray-700"></div> */}
          <div className="lg:w-1/2 m-[0.7rem] h-auto border border-white lg:mr-[4rem] lg:ml-[1rem] rounded-[2rem] bg-gray-700">
            <div className="lg:mt-[4rem] lg:ml-[2rem] mt-[2rem] mx-[1rem]">
              <div className="text-[2rem] my-[1rem] font-bold text-[rgba(241,180,62)]">Achievements 🏆</div>
              <div className="text-[1.2rem] my-[0.2rem]">• Institute Level Winner in GeeksforGeeks Solving for India Google X AMD Hackathon</div>
              <div className="text-[1.2rem] my-[0.2rem]">• Hacktoberfest 2023 contributor, merged 5 PRs in AlgoManiacZ, ReactToWeather, QuoteVerse</div>
              <div className="text-[1.2rem] my-[0.2rem]">• Solved 300+ problems on leetcode, codestudio, geeksforgeeks.</div>
              <div className="text-[1.2rem] my-[0.2rem] mb-[1.5rem]">• Highest rating of 1516 at leetcode</div>
            </div>
          </div>
        </div>
          
        <div className="mt-[2rem] mb-[1rem] flex flex-col lg:flex-row ">
          <div className="lg:w-1/4 m-[0.7rem] h-auto border border-white lg:ml-[4rem] lg:mr-[1rem]  rounded-[2rem] bg-gray-700">
          <div className="flex justify-center items-center h-full">
            
            <a href="https://www.linkedin.com/in/hardik2972/" target="_blank" rel="noopener noreferrer">
            <button >
            <CiLinkedin size={200} className="bg-cover"/>
            </button>
      </a>
            
            </div>
          </div>
          <div className="lg:w-1/2 m-[0.7rem] h-auto  border border-white lg:mx-[1rem] rounded-[2rem] bg-gray-700">
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
