import { Link } from "react-router-dom"
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full bg-[#90BAE9] backdrop-blur supports-[backdrop-filter]:bg-[#90BAE9]/60 z-50 px-4">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-20">
                <div className="flex items-center">
                    <Link to="/" className="text-xl font-bold text-primary tracking-wider">
                        <img src="/images/logo.png" alt="" />
                    </Link>
                </div>

                <DesktopNavbar />
                <MobileNavbar />
            </div>
        </div>
    </nav>
  )
}

export default Navbar
