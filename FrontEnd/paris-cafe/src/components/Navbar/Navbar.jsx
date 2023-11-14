import "./Navbar.css";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";


const Navbar = () => {

  return (
    <>
      <div className="bg-[#fbf8f1]">
        <nav className="container mx-auto">
          <div className="nav-desktop">
            <DesktopMenu />
          </div>
          <div className="nav-mobile">
            <MobileMenu />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
