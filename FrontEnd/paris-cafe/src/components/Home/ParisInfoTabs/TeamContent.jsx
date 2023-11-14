import Daren from "../../../assets/images/Darren-1.jpeg";
import Nick from "../../../assets/images/nick-1.jpeg";
import Saeyong from "../../../assets/images/Saeyong-1.jpeg";
import Mike from "../../../assets/images/Mike.jpeg";
import Bill from "../../../assets/images/bill.jpeg";
import Eric from "../../../assets/images/Eric-Lavinder-PB.jpeg";
import eriklavi from "../../../assets/images/erik-1.jpeg";
import Cathy from "../../../assets/images/Cathy-1.jpeg";
import Michelle from "../../../assets/images/Michelle.jpeg";
import Avatar from "../../../assets/images/placeholder-icon.webp";

const TeamContent = ({TeamCon}) => {
  return (
    <>
      <div className="team-con">
        {TeamCon && (
          <div className="w-[100%] md:px-[20px] ">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[#fff] font-special text-[#f6c844] md:text-[38px] text-[28px] leading-[40px]">
                Leadership Team
              </h3>
              <div className="border-2 border-[#f6c844] w-[116px] my-3"></div>
              <p className="font-basker text-center text-[#fff] text-[20px] leading-[1.5] my-2">
                Meet the Paris Baguette Leadership Team
              </p>
            </div>

            <div className="w-[93%] md:w-[80%] pt-10 mx-auto flex flex-col md:flex-row">
                <div className="w-[100%] md:w-[55%] "> 
                    <div className="flex gap-4 mb-10">
                        <div className="tc-media">
                            <img src={Daren} alt="avatar" />
                        </div>
                        <div className="tc-detail"> 
                            <h3 className="text-[#fff] font-special text-[#f6c844] md:text-[25px] text-[22px] leading-[32px]">
                                Darren Tipton
                            </h3>
                            <p className="font-basker text-left text-[#fff] text-[18px] leading-[1.5]">
                                Chief Executive Officer
                            </p>
                            <div class="linkdin-social">
                                <a target="_blank" href="">
                                    <img width="23" height="23" decoding="async" alt="" src="https://ownaparisbaguette.com/wp-content/themes/Divi_Child/images/linkdin-yellow.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4  mb-10">
                        <div className="tc-media">
                            <img src={Nick} alt="avatar" />
                        </div>
                        <div className="tc-detail"> 
                            <h3 className="text-[#fff] font-special text-[#f6c844] md:text-[25px] text-[22px] leading-[32px]">
                                Nick Scaccio
                            </h3>
                            <p className="font-basker text-left text-[#fff] text-[18px] leading-[1.5]">
                                Vice President of Operations
                            </p>
                            <div class="linkdin-social">
                                <a target="_blank" href="">
                                    <img width="23" height="23" decoding="async" alt="" src="https://ownaparisbaguette.com/wp-content/themes/Divi_Child/images/linkdin-yellow.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 mb-10">
                        <div className="tc-media">
                            <img src={Saeyong} alt="avatar" />
                        </div>
                        <div className="tc-detail"> 
                            <h3 className="text-[#fff] font-special text-[#f6c844] md:text-[25px] text-[22px] leading-[32px]">
                                Saeyong Park
                            </h3>
                            <p className="font-basker text-left text-[#fff] text-[18px] leading-[1.5]">
                                Vice President of Accounting
                            </p>
                            <div class="linkdin-social">
                                <a target="_blank" href="">
                                    <img width="23" height="23" decoding="async" alt="" src="https://ownaparisbaguette.com/wp-content/themes/Divi_Child/images/linkdin-yellow.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4  mb-10">
                        <div className="tc-media">
                            <img src={Bill} alt="avatar" />
                        </div>
                        <div className="tc-detail"> 
                            <h3 className="text-[#fff] font-special text-[#f6c844] md:text-[25px] text-[22px] leading-[32px]">
                                William Zuccarello
                            </h3>
                            <p className="font-basker text-left text-[#fff] text-[18px] leading-[1.5]">
                                Vice President of Construction and Design
                            </p>
                            <div class="linkdin-social">
                                <a target="_blank" href="">
                                    <img width="23" height="23" decoding="async" alt="" src="https://ownaparisbaguette.com/wp-content/themes/Divi_Child/images/linkdin-yellow.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4  mb-10">
                        <div className="tc-media">
                            <img src={Mike} alt="avatar" />
                        </div>
                        <div className="tc-detail"> 
                            <h3 className="text-[#fff] font-special text-[#f6c844] md:text-[25px] text-[22px] leading-[32px]">
                                Mike Spinelli
                            </h3>
                            <p className="font-basker text-left text-[#fff] text-[18px] leading-[1.5]">
                                Vice President of Food and Beverage
                            </p>
                            <div class="linkdin-social">
                                <a target="_blank" href="">
                                    <img width="23" height="23" decoding="async" alt="" src="https://ownaparisbaguette.com/wp-content/themes/Divi_Child/images/linkdin-yellow.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-[100%] md:w-[45%] "> 
                    <div className="flex gap-4 mb-10">
                        <div className="tc-media">
                            <img src={Eric} alt="avatar" />
                        </div>
                        <div className="tc-detail"> 
                            <h3 className="text-[#fff] font-special text-[#f6c844] md:text-[25px] text-[22px] leading-[32px]">
                                Eric Lavinder
                            </h3>
                            <p className="font-basker text-left text-[#fff] text-[18px] leading-[1.5]">
                                Chief Development Officer
                            </p>
                            <div class="linkdin-social">
                                <a target="_blank" href="">
                                    <img width="23" height="23" decoding="async" alt="" src="https://ownaparisbaguette.com/wp-content/themes/Divi_Child/images/linkdin-yellow.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4  mb-10">
                        <div className="tc-media">
                            <img src={eriklavi} alt="avatar" />
                        </div>
                        <div className="tc-detail"> 
                            <h3 className="text-[#fff] font-special text-[#f6c844] md:text-[25px] text-[22px] leading-[32px]">
                                Eric Galkin
                            </h3>
                            <p className="font-basker text-left text-[#fff] text-[18px] leading-[1.5]">
                                Vice President of Supply Chain
                            </p>
                            <div class="linkdin-social">
                                <a target="_blank" href="">
                                    <img width="23" height="23" decoding="async" alt="" src="https://ownaparisbaguette.com/wp-content/themes/Divi_Child/images/linkdin-yellow.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 mb-10">
                        <div className="tc-media">
                            <img src={Cathy} alt="avatar" />
                        </div>
                        <div className="tc-detail"> 
                            <h3 className="text-[#fff] font-special text-[#f6c844] md:text-[25px] text-[22px] leading-[32px]">
                                Cathy Chavenet
                            </h3>
                            <p className="font-basker text-left text-[#fff] text-[18px] leading-[1.5]">
                                Senior Vice President of Marketing
                            </p>
                            <div class="linkdin-social">
                                <a target="_blank" href="">
                                    <img width="23" height="23" decoding="async" alt="" src="https://ownaparisbaguette.com/wp-content/themes/Divi_Child/images/linkdin-yellow.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4  mb-10">
                        <div className="tc-media">
                            <img src={Michelle} alt="avatar" />
                        </div>
                        <div className="tc-detail"> 
                            <h3 className="text-[#fff] font-special text-[#f6c844] md:text-[25px] text-[22px] leading-[32px]">
                                Michelle Jagroop
                            </h3>
                            <p className="font-basker text-left text-[#fff] text-[18px] leading-[1.5]">
                                Vice President of Human Resources
                            </p>
                            <div class="linkdin-social">
                                <a target="_blank" href="">
                                    <img width="23" height="23" decoding="async" alt="" src="https://ownaparisbaguette.com/wp-content/themes/Divi_Child/images/linkdin-yellow.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4  mb-10">
                        <div className="tc-media">
                            <img src={Avatar} alt="avatar" />
                        </div>
                        <div className="tc-detail"> 
                            <h3 className="text-[#fff] font-special text-[#f6c844] md:text-[25px] text-[22px] leading-[32px]">
                                Jin Soo Hur
                            </h3>
                            <p className="font-basker text-left text-[#fff] text-[18px] leading-[1.5]">
                                Executive Vice President
                            </p>
                            <div class="linkdin-social">
                                <a target="_blank" href="">
                                    <img width="23" height="23" decoding="async" alt="" src="https://ownaparisbaguette.com/wp-content/themes/Divi_Child/images/linkdin-yellow.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-2 flex justify-center items-center">
              <button className="p-3 bg-[#f6c844] font-special text-[20px] text-[#081d5c]">
                Apply To Own
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TeamContent;
