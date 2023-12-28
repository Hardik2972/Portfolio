import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className=" text-white py-4">
      <div className=" h-[3rem] flex  justify-center items-center">
        <div className="lg:w-1/2 h-[100%] w-3/4 flex justify-evenly items-center">
          <FaGithub/>
          <FaLinkedinIn/>
          <FaInstagram/>
          <FaXTwitter/>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <p>&copy; All rights reserved. </p>
        <p>   Code by Hardik with💖</p>
      </div>
    </footer>
  )
}
