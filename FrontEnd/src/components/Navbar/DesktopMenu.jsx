import Logo from "../../assets/svgs/Logo.jsx";

const DesktopMenu = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl ">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 top-[110px] flex items-center ">
            <div className="flex flex-shrink-0 items-center">
              <a href="/" className="paris-logo " aria-current="page">
                <Logo />
              </a>
            </div>
          </div>

          <div className="ml-auto max-w-7xl ">
            <div className="relative flex items-center justify-end">
              <div className="flex items-center justify-between gap-[16px]">
                <a href="#" className="topbar-navs" aria-current="page">
                  Download Brochure
                </a>
                <a href="#" className="topbar-navs" aria-current="page">
                  Apply To Own
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl ">
        <div className="relative flex pb-4 items-center justify-between">
          <div className="ml-auto max-w-7xl ">
            <div className="relative flex items-center justify-end">
              <div className="btm-bar flex items-center justify-between gap-[27px]">
                <a href="#" className="btm-bar-navs" aria-current="page">
                  Why Paris baguette
                </a>
                <a href="#" className="btm-bar-navs" aria-current="page">
                  Available Markets
                </a>
                <a href="#" className="btm-bar-navs" aria-current="page">
                  New openings
                </a>
                <a href="#" className="btm-bar-navs" aria-current="page">
                  Our New prototype
                </a>
                <a href="#" className="btm-bar-navs" aria-current="page">
                  Franchisee stories
                </a>
                <a href="#" className="btm-bar-navs" aria-current="page">
                  Research
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopMenu;
