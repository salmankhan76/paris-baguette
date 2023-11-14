import Franch1 from "../../../assets/images/frenchee1.jpeg";
import Franch2 from "../../../assets/images/franchee2.png";
import Franch3 from "../../../assets/images/franchee3.png";
import Franch4 from "../../../assets/images/franchee4.png";
import Franch5 from "../../../assets/images/franchee5.png";
import Franch6 from "../../../assets/images/franchee6.jpeg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {  Navigation, HashNavigation } from "swiper/modules";

import "./MeetFranchSlider.css";

const MeetFracnhSlider = () => {
  return (
    <>
      <div className="w-full relative">
        <div className="meet-franh-slider max-w-8xl mx-auto">
          <Swiper
            spaceBetween={30}
            hashNavigation={{
              watchState: true,
            }}
            navigation={true}
            modules={[ Navigation, HashNavigation]}
            className="mySwiper"
          >
            <SwiperSlide data-hash="slide1">
              <div className="pb-meet-slide">
                <div className="pb-ms-media">
                  <img src={Franch1} />
                </div>
                <div className="pb-ms-body">
                  <div className="pb-ms-content">
                    <h3> Meet Our Franchisee – Joon Jung + Yeonseok Song </h3>
                    <div className="border-2 border-[#f6c844] w-[116px] my-3"></div>
                    <p className="font-basker text-[16px] my-2">
                        “The Ithaca community needs a Paris Baguette, We look forward to providing a new and exciting place for them to gather and enjoy our great pastry and cake offerings.”
                    </p>
                    <div class="linkdin-social">
                        <a target="_blank" href="">
                            <img width="23" height="23" decoding="async" alt="" src="https://ownaparisbaguette.com/wp-content/themes/Divi_Child/images/linkdin-yellow.png" />
                        </a>
                        <p> Joon Jung + Yeonseok Song, New York Franchisee </p>
                    </div>
                    <div className="my-8 text-left">
                      <button className="p-3 bg-[#f6c844] font-special text-[20px] text-[#081d5c]">
                        Read more on 1851
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide data-hash="slide2">
              <div className="pb-meet-slide">
                <div className="pb-ms-media">
                  <img src={Franch2} />
                </div>
                <div className="pb-ms-body">
                  <div className="pb-ms-content">
                    <h3> Meet Our Franchisee –  Ai Lin </h3>
                    <div className="border-2 border-[#f6c844] w-[116px] my-3"></div>
                    <p className="font-basker text-[16px] my-2">
                        “When looking for the right franchise opportunity, Paris Baguette was the ideal fit because of its amazing product line, store design, and proven response from communities throughout the United States."
                    </p>
                    <div class="linkdin-social">
                        <a target="_blank" href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF5xExmaNMqlQAAAYuxIw_45VAgcfkZXDRJZBEm0nApFU_sBtpAtWHOtBWaafeI_iOBjr9I7KdZzn95qNgJWS09d9CN1xFXXd7UzyGvdHLou4CQL7qa6HrxHSpFZPUubHeHiGY=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fai-lin-41438b194%2F">
                            <img width="23" height="23" decoding="async" alt="" src="https://ownaparisbaguette.com/wp-content/themes/Divi_Child/images/linkdin-yellow.png" />
                        </a>
                        <p> Ai Lin, Ohio Franchisee </p>
                    </div>
                    <div className="my-8 text-left">
                      <button className="p-3 bg-[#f6c844] font-special text-[20px] text-[#081d5c]">
                        Read more on 1851
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide data-hash="slide2">
              <div className="pb-meet-slide">
                <div className="pb-ms-media">
                  <img src={Franch3} />
                </div>
                <div className="pb-ms-body">
                  <div className="pb-ms-content">
                    <h3> Meet Our Franchisee – Meghna Negandhi </h3>
                    <div className="border-2 border-[#f6c844] w-[116px] my-3"></div>
                    <p className="font-basker text-[16px] my-2">
                    “I love cooking and serving people and being able to share my love for food with them. I love being a part of the food and dining industry. I knew that turning to franchising was going to allow me to share my love for food with others while giving me the blueprint to running my own business.”
                    </p>
                    <div class="linkdin-social">
                        <a target="_blank" href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF5xExmaNMqlQAAAYuxIw_45VAgcfkZXDRJZBEm0nApFU_sBtpAtWHOtBWaafeI_iOBjr9I7KdZzn95qNgJWS09d9CN1xFXXd7UzyGvdHLou4CQL7qa6HrxHSpFZPUubHeHiGY=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fai-lin-41438b194%2F">
                            <img width="23" height="23" decoding="async" alt="" src="https://ownaparisbaguette.com/wp-content/themes/Divi_Child/images/linkdin-yellow.png" />
                        </a>
                        <p> Meghna Negandhi, New York Franchisee </p>
                    </div>
                    <div className="my-8 text-left">
                      <button className="p-3 bg-[#f6c844] font-special text-[20px] text-[#081d5c]">
                        Read more on 1851
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide data-hash="slide2 ">
              <div className="pb-meet-slide">
                <div className="pb-ms-media">
                  <img src={Franch4} />
                </div>
                <div className="pb-ms-body">
                  <div className="pb-ms-content">
                    <h3> Meet Our Franchisee – Wei Zhu</h3>
                    <div className="border-2 border-[#f6c844] w-[116px] my-3"></div>
                    <p className="font-basker text-[16px] my-2">
                    “I love cooking and serving people and being able to share my love for food with them. I love being a part of the food and dining industry. I knew that turning to franchising was going to allow me to share my love for food with others while giving me the blueprint to running my own business.”
                    </p>
                    <div class="linkdin-social">
                        <a target="_blank" href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF5xExmaNMqlQAAAYuxIw_45VAgcfkZXDRJZBEm0nApFU_sBtpAtWHOtBWaafeI_iOBjr9I7KdZzn95qNgJWS09d9CN1xFXXd7UzyGvdHLou4CQL7qa6HrxHSpFZPUubHeHiGY=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fai-lin-41438b194%2F">
                            <img width="23" height="23" decoding="async" alt="" src="https://ownaparisbaguette.com/wp-content/themes/Divi_Child/images/linkdin-yellow.png" />
                        </a>
                        <p> Meghna Negandhi, New York Franchisee </p>
                    </div>
                    <div className="my-8 text-left">
                      <button className="p-3 bg-[#f6c844] font-special text-[20px] text-[#081d5c]">
                        Read more on 1851
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide data-hash="slide2 ">
              <div className="pb-meet-slide">
                <div className="pb-ms-media">
                  <img src={Franch5} />
                </div>
                <div className="pb-ms-body">
                  <div className="pb-ms-content">
                    <h3> Meet Our Franchisee – Wei Zhu</h3>
                    <div className="border-2 border-[#f6c844] w-[116px] my-3"></div>
                    <p className="font-basker text-[16px] my-2">
                    "The number one reason I chose Paris Baguette was the quality of their product. They have a consistent product nationwide. Every time I have traveled out of state and stopped by the café, I love the atmosphere and the food."
                    </p>
                    <div class="linkdin-social">
                        <a target="_blank" href="https://www.linkedin.com/in/wei-zhu-330a2743/">
                            <img width="23" height="23" decoding="async" alt="" src="https://ownaparisbaguette.com/wp-content/themes/Divi_Child/images/linkdin-yellow.png" />
                        </a>
                        <p> Wei Zhu, South Carolina Franchisee </p>
                    </div>
                    <div className="my-8 text-left">
                      <button className="p-3 bg-[#f6c844] font-special text-[20px] text-[#081d5c]">
                        Read more on 1851
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide data-hash="slide2">
              <div className="pb-meet-slide">
                <div className="pb-ms-media">
                  <img src={Franch6} />
                </div>
                <div className="pb-ms-body">
                  <div className="pb-ms-content">
                    <h3> Meet Our Franchisee – Helen Kim </h3>
                    <div className="border-2 border-[#f6c844] w-[116px] my-3"></div>
                    <p className="font-basker text-[16px] my-2">
                    "I really believe in Paris Baguette’s brand. Whenever I come back home to California, my first stop is Paris Baguette because of the quality of the products sold there. I haven’t found that same quality in any other bakery. Every time I visit a Paris Baguette location, there’s a lot of traffic, which allows me to feel comfortable with a brand that I don’t see failing."
                    </p>
                    <div class="linkdin-social">
                        <a target="_blank" href="https://www.linkedin.com/in/wei-zhu-330a2743/">
                            <img width="23" height="23" decoding="async" alt="" src="https://ownaparisbaguette.com/wp-content/themes/Divi_Child/images/linkdin-yellow.png" />
                        </a>
                        <p>Helen Kim, Nevada</p>
                    </div>
                    <div className="my-8 text-left">
                      <button className="p-3 bg-[#f6c844] font-special text-[20px] text-[#081d5c]">
                        Read more on 1851
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MeetFracnhSlider;
