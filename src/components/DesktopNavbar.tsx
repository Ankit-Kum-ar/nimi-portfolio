import { NavLink } from "react-router-dom"

const DesktopNavbar = () => {
  return (
    <div className="hidden md:flex items-center space-x-9 font-medium">
        <NavLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
            `nav-item flex items-center gap-2 transition-transform duration-300 font-poppins ${
                isActive
                ? "text-[#DC702F] border-b-2 border-[#DC702F] scale-110"
                : "text-[#284468] hover:text-[#DC702F]"
            }`}
        >
            <span className="hidden lg:inline">Home</span>
        </NavLink>
        <NavLink
            to="/about"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
            `nav-item flex items-center gap-2 transition-transform duration-300 font-poppins ${
                isActive
                ? "text-[#DC702F] border-b-2 border-[#DC702F] scale-110"
                : "text-[#284468] hover:text-[#DC702F]"
            }`}
        >
            <span className="hidden lg:inline">About Us</span>
        </NavLink>
        <NavLink
            to="/product"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
            `nav-item flex items-center gap-2 transition-transform duration-300 font-poppins ${
                isActive
                ? "text-[#DC702F] border-b-2 border-[#DC702F] scale-110"
                : "text-[#284468] hover:text-[#DC702F]"
            }`}
        >
            <span className="hidden lg:inline">Projects</span>
        </NavLink>
        
        <NavLink
            to="/people"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
            `nav-item flex items-center gap-2 transition-transform duration-300 font-poppins ${
                isActive
                ? "text-[#DC702F] border-b-2 border-[#DC702F] scale-110"
                : "text-[#284468] hover:text-[#DC702F]"
            }`}
        >
            <span className="hidden lg:inline">Team</span>
        </NavLink>
        <NavLink
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
            `nav-item flex items-center gap-2 transition-transform duration-300 font-poppins ${
                isActive
                ? "text-[#DC702F] border-b-2 border-[#DC702F] scale-110"
                : "text-[#284468] hover:text-[#DC702F]"
            }`}
        >
            <span className="hidden lg:inline">Contact Us</span>
        </NavLink>
        <NavLink
            to="/news"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
            `nav-item flex items-center gap-2 transition-transform duration-300 font-poppins ${
                isActive
                ? "text-[#DC702F] border-b-2 border-[#DC702F] scale-110"
                : "text-[#284468] hover:text-[#DC702F]"
            }`}
        >
            <span className="hidden lg:inline">News</span>
        </NavLink>
        
    </div>
  )
}

export default DesktopNavbar