import { Link } from "react-router-dom"
import DesktopNavbar from "./DesktopNavbar"

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <Link to="/" className="text-xl font-bold text-primary tracking-wider">
                        <img src="/images/logo.png" alt="" />
                    </Link>
                </div>

                <DesktopNavbar />
                {/* <MobileNavbar /> */}
            </div>
        </div>
    </nav>
  )
}

export default Navbar
