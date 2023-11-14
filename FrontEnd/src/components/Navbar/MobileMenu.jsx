import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const HandleMobileMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="mobile-nav mx-auto max-w-7xl ">
        <div className="relative px-4 flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 z-10 left-4 top-[38px] flex items-center ">
            <div className="flex items-center">
              <a href="/" className="paris-logo " aria-current="page">
                <img src={logo} alt="logo" />
              </a>
            </div>
          </div>

          <div class="w-full flex justify-end">
            <div className="toggle-btn cursor-pointer" onClick={HandleMobileMenu}>
                { !isOpen ?  <MenuOutlined /> : <CloseOutlined />  }
            </div>
          </div>
         </div>
        </div>

        {isOpen && (
        <>
            <div className={isOpen ? `mobile-menu active fixed w-full px-2 z-20` : `mobile-menu backward fixed w-full px-2 z-20`}>
            <div className="mobile-menu-bg p-[5%] bg-[#fbf8f1]">
                <div className="flex flex-col items-left justify-between gap-[10px]">
                    <a href="#" className="btm-bar-navs py-[10px]" aria-current="page">
                        Why Paris baguette
                    </a>
                    <a href="#" className="btm-bar-navs py-[10px]" aria-current="page">
                        Available Markets
                    </a>
                    <a href="#" className="btm-bar-navs py-[10px]" aria-current="page">
                        New openings
                    </a>
                    <a href="#" className="btm-bar-navs py-[10px]" aria-current="page">
                        Our New prototype
                    </a>
                    <a href="#" className="btm-bar-navs py-[10px]" aria-current="page">
                        Franchisee stories
                    </a>
                    <a href="#" className="btm-bar-navs py-[10px]" aria-current="page">
                        Research
                    </a>
                </div>
                <div className="mt-2 flex flex-col items-left justify-between gap-[10px]">
                    <a href="#" className="topbar-navs" aria-current="page">
                    Download Brochure
                    </a>
                    <a href="#" className="topbar-navs" aria-current="page">
                    Apply To Own
                    </a>
                </div>
            </div>
            </div>
        </>
        )}
    </>
  );
};

export default MobileMenu;
