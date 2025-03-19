import { ArrowUpRight, MoveUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-[#12243F] text-[#C4DAF3] w-full px-5 md:px-10">
      <div className="footer-top flex flex-col gap-12 max-w-7xl mx-auto">
        
        {/* Upper Section */}
        <div className="footer-upper flex flex-col md:flex-row justify-between w-full py-5 gap-6">
          
          {/* Logo */}
          <div className="footer-upper-left">
            <Link to="/" className="text-xl font-bold text-primary tracking-wider">
              <img src="/images/logo.png" alt="Nimi Developers Logo" />
            </Link>
          </div>

          {/* Links and Actions */}
          <div className="footer-upper-right flex flex-wrap gap-4 items-center">
            
            {/* Navigation Links */}
            <div className="section1 flex flex-wrap gap-4">
              <Link to="/" className="text-lg font-normal">Home</Link>
              <Link to="/" className="text-lg font-normal">Discussions</Link>
              <Link to="/" className="text-lg font-normal">Learn</Link>
              <Link to="/" className="text-lg font-normal">News</Link>
            </div>

            {/* Support Button */}
            <div className="section2">
              <button className="p-2 pl-4 bg-[#C4DAF3] text-[#12243F] rounded-full text-center items-center flex gap-4">
                Support
                <div className="aspect-square p-2 bg-[#12243F] text-[#C4DAF3] rounded-full">
                  <ArrowUpRight />
                </div>
              </button>
            </div>

            {/* Scroll to Top Icon */}
            <div className="section3 bg-[#C4DAF3] text-[#12243F] rounded-full p-4">
              <MoveUp />
            </div>
          </div>
        </div>

        {/* Lower Section */}
        <div className="footer-lower flex flex-col md:flex-row justify-between w-full gap-6">
          
          {/* Company Info */}
          <div className="footer-lower-left text-center md:text-left">
            <h3 className="text-4xl md:text-5xl">NIMI DEVELOPERS</h3>
            <h2 className="text-5xl md:text-7xl">PRIVATE LIMITED</h2>
          </div>

          {/* Social Icons */}
          <div className="footer-lower-right">
            <div className="socials icons flex flex-wrap justify-center md:justify-start gap-4 py-4">
              {['face', 'insta', 'x', 'wp'].map((icon, index) => (
                <a key={index} href="/">
                  <div className="bg-[#414F64] aspect-square rounded-xl h-10 flex items-center justify-center cursor-pointer">
                    <img
                      src={`/images/${icon}.png`}
                      alt={icon.toUpperCase()}
                      className="h-6"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom flex flex-col sm:flex-row justify-between max-w-7xl mx-auto pt-2 pb-5 border-t-2 border-[#C4DAF3] text-center md:text-left">
        <div className="footer-left">
          <p>© 2021 Builders All rights reserved</p>
        </div>
        <div className="footer-right">
          <p>Terms & Conditions . Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
