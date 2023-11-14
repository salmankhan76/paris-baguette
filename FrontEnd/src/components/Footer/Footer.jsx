import FtrLogo from "../../assets/images/ftr-logo.png";
import {
  FacebookFilled,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="container mx-auto py-16 sm:px-6 lg:px-8">
          <div className="max-w-[90%] lg:px-0 lg:max-w-[94%] mx-auto">
            <div className="pb-ftr-top flex flex-col lg:flex-row">
              <div className="pb-ftr-col1 flex items-center lg:justify-start justify-center lg:">
                <a href="/" className="paris-ftr-logo " aria-current="page">
                  <img src={FtrLogo} alt="logo" />
                </a>
              </div>
              <div className="pb-ftr-col flex lg:justify-between lg:flex-row flex-col justify-center">
                <div className="ftr-menu col-1 flex flex-col ">
                  <h2> Home </h2>
                  <ul className="flex flex-col items-center lg:items-start">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      >
                        WHY PARIS BAGUETTE
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      >
                        AVAILABLE MARKETS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      >
                        NEW OPENINGS
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ftr-menu col-2 flex flex-col items-center lg:items-start">
                  <ul className="flex flex-col">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      >
                        Our New PRototype
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      >
                        Franchisee stories
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="sm:mt-4 lg:mt-8 border-t-2 border-white-500 pt-5 px-5">
              <div className="sm:flex sm:justify-between">
                <div className="ftr-menu-icons">
                  <ul className="flex justify-center gap-[20px]">
                    <li>
                      <a href="#" className="text-white text-2xl transition">
                        <FacebookFilled />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white text-2xl transition">
                        <TwitterOutlined />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white text-2xl transition">
                        <InstagramOutlined />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ftr-menu">
                  <ul className="flex justify-center gap-[40px]">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      >
                        PRIVACY POLICY
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                      >
                        TERMS OF USE
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="sm:mt-6 lg:mt-8 px-5">
              <div className="ftr-btm">
                <h4> © 2023 PARIS BAGUETTE BAKERY CAFE </h4>
                <p>
                  {" "}
                  This website and the information contained on this website is
                  for information purposes only. This is not an offer to sell,
                  or the solicitation of an offer to buy, a franchise. This
                  franchise is offered only by our delivery of a franchise
                  disclosure document to you in compliance with the Federal
                  Trade Commission’s rule on franchising and various state and
                  provincial/territorial franchise sales laws. Franchise
                  offerings cannot be made by us, or on our behalf, in any state
                  unless we are registered, exempt or otherwise qualified to
                  offer franchises in that state. The communications on this
                  website are not directed towards residents of any state where
                  we are not currently authorized to sell franchises and we will
                  not sell franchises in those states or to residents of those
                  states until we are authorized. The following states regulate
                  the offer and sale of franchises: CA, HI, IN, IL, MD, MI, MN,
                  NY, ND, RI, SD, VA, WA and WI. If you reside in one of these
                  states, you may have certain rights under applicable franchise
                  laws.
                </p>
                <p>
                  FOR THE STATE OF NEW YORK: This advertisement is not an
                  offering. An offering can be made only by a prospectus filed
                  first with the Department of Law of the State of New York.
                  Such filing does not constitute approval by the Department of
                  Law. FOR THE STATE OF MINNESOTA: Minn. Reg # 9691; Paris
                  Baguette Family, Inc., 137 West Commercial Avenue, Moonachie,
                  New Jersey 07074
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
