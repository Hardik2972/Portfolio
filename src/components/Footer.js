import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className=" text-white py-4 ">
      <div className=" h-[3rem] flex  justify-center items-center">
        <div className="lg:w-1/2 h-[100%] w-3/4 flex justify-evenly items-center">
          
            <a href="https://www.linkedin.com/in/hardik2972/" target="_blank" rel="noopener noreferrer">
              <button >
              <FaLinkedinIn/>
              </button>
            </a>
          <a href="https://www.instagram.com/hardikgarg887/" target="_blank" rel="noopener noreferrer">
              <button >
              <FaInstagram />
              </button>
            </a>
            <a href="https://github.com/Hardik2972" target="_blank" rel="noopener noreferrer">
              <button >
              <FaGithub/>
              </button>
            </a>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} All rights reserved. </p>
        <p>Code by Hardik with💖</p>
      </div>
    </footer>
  )
}
