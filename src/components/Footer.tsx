import { ArrowUpRight, MoveUp } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer bg-[#12243F] text-[#C4DAF3] w-full px-10">
        <div className="footer-top flex flex-col gap-12 max-w-7xl mx-auto ">
            <div className="footer-upper flex justify-between w-full py-5">
                <div className="footer-upper-left">
                <Link to="/" className="text-xl font-bold text-primary tracking-wider">
                        <img src="/images/logo.png" alt="" />
                    </Link>
                </div>
                <div className="footer-upper-right flex gap-8 items-center">
                    <div className="section1 flex justify-between gap-4 ">
                        <Link to="/" className="text-lg font-normal">Gallery</Link>
                        <Link to="/" className="text-lg font-normal">Discussions</Link>
                        <Link to="/" className="text-lg font-normal">Learn</Link>
                        <Link to="/" className="text-lg font-normal">News</Link>
                    </div>
                    <div className="section2">
                        <button className="p-2 pl-4 bg-[#C4DAF3] text-[#12243F] rounded-full text-center items-center flex gap-4 ">  Support <div className="aspect-square p-2 bg-[#12243F] text-[#C4DAF3] rounded-full"><ArrowUpRight /></div></button>
                    </div>
                    <div className="section3 bg-[#C4DAF3] text-[#12243F] rounded-full p-4 "><MoveUp /></div>
                </div>
            </div>
            <div className="footer-lower flex justify-between w-full">
                <div className="footer-lower-left">
                    <h3 className="text-5xl">NIMI DEVELOPERS</h3>
                    <h2 className="text-7xl">PRIVATE LIMITED</h2>
                </div>
                <div className="footer-lower-right">
                <div  className="socials icons flex flex-row justify-start gap-4 py-4">
            <a href="/">
            <div className="bg-[#414F64]  aspect-square rounded-full h-10 flex items-center justify-center cursor-pointer">
              <img src="/images/face.png" alt="Facebook" className="text-white h-6 rounded-full" />
            </div></a>
            <a href="/">
            <div className="bg-[#414F64] aspect-square rounded-lg h-10 flex items-center justify-center cursor-pointer">
              <img src="/images/insta.png" alt="Instagram" className="text-white h-6 " />
            </div> 
            </a>
            <a href="/">
            <div className="bg-[#414F64] aspect-square rounded-lg h-10 flex items-center justify-center cursor-pointer">
              <img src="/images/x.png" alt="Twitter" className="text-white h-6 " />
            </div>
            </a>
            <a href="/">
            <div className="bg-[#414F64] aspect-square rounded-lg h-10 flex items-center justify-center cursor-pointer">
              <img src="/images/wp.png" alt="Whatsapp" className="text-white h-6 " />
            </div>
            </a>
          </div>
                    
                </div>
            </div>
        </div>
        <div className="footer-bottom flex justify-between max-w-7xl mx-auto pt-2 pb-5 border-t-2 border-[#C4DAF3]">
            <div className="footer-left">
                <p>© 2021 Builders All rights reserved</p>
            </div>
            <div className="footer-right">
                <p>Terms & Conditions . Privacy Policy</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
