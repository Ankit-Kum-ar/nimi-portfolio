import { Link } from "react-router-dom"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { useState } from "react";
import { BookOpenText, Contact, HomeIcon, LampDesk, MenuIcon, Newspaper, ShoppingCart, Users } from "lucide-react";

const MobileNavbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleLinkClick = () => {
        setShowMobileMenu(false);
    };
    return (
        <div className="flex md:hidden items-center space-x-2">
            <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <MenuIcon className="h-5 w-5 text-[#284468]" />
                    </Button>
                </SheetTrigger>
                <SheetContent
                    side="right"
                    className="w-[300px]"
                    style={{ background: 'linear-gradient(135deg, #90BAE9 0%, #284468 100%)', color: '#284468' }}
                >
                    <SheetHeader>
                        <SheetTitle className="text-[1.25rem] text-[#284468]">Menu</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col space-y-4 mt-6 text-[#192e56]">
                        <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                            <Link to="/" onClick={handleLinkClick}>
                                <HomeIcon className="w-4 h-4" />
                                Home
                            </Link>
                        </Button>
                        <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                            <Link to="/about" onClick={handleLinkClick}>
                                <BookOpenText className="w-4 h-4" />
                                About Us
                            </Link>
                        </Button>
                        <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                            <Link to="/product" onClick={handleLinkClick}>
                                <ShoppingCart className="w-4 h-4" />
                                Projects
                            </Link>
                        </Button>
                        <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                            <Link to="/people" onClick={handleLinkClick}>
                                <Users className="w-4 h-4" />
                                Team
                            </Link>
                        </Button>
                        
                        <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                            <Link to="/contact" onClick={handleLinkClick}>
                                <Contact className="w-4 h-4" />
                                Contact Us
                            </Link>
                        </Button>
                        <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                            <Link to="/news" onClick={handleLinkClick}>
                                <Newspaper className="w-4 h-4" />
                                News
                            </Link>
                        </Button>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNavbar
