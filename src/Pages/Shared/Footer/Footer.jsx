import { AiFillLinkedin, AiOutlineGoogle, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import doctorLogo from "../../../assets/logo.svg";



const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#151515] text-white">
  <aside className="flex flex-col  gap-6 items-start" >
            {/* mobile logo logo */}
            <div className="doctor-logo  w-16 ">
          <img src={doctorLogo} className=" w-full h-full " />
        </div>
    <p className="w-64" >Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
    <div className="icons flex gap-4 text-2xl">
      <AiOutlineGoogle className="bg-[#2c2c2c] w-[38px] h-[38px] rounded-full p-2 " />
      <AiOutlineTwitter className="bg-[#2c2c2c] w-[38px] h-[38px] rounded-full p-2 " />
      <AiOutlineInstagram className="bg-[#2c2c2c] w-[38px] h-[38px] rounded-full p-2 " />
      <AiFillLinkedin className="bg-[#2c2c2c] w-[38px] h-[38px] rounded-full p-2 " />
    </div>
  </aside> 
  <nav>
    <header className="footer-title">About</header> 
    <a className="link link-hover">Home</a> 
    <a className="link link-hover">Service</a> 
    <a className="link link-hover">Contact</a> 
    
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">Why Car Doctor?</a> 
    <a className="link link-hover">About</a> 
  </nav> 
  <nav>
    <header className="footer-title">Support</header> 
    <a className="link link-hover">Support Center</a> 
    <a className="link link-hover">Feedback</a> 
    <a className="link link-hover">Accesbility</a>
  </nav>
</footer>
  )
}

export default Footer