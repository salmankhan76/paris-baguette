import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Prototype.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import PrototypeImg1 from "../../../assets/images/Paris-BaguetteSFW.jpeg";
import PrototypeImg2 from "../../../assets/images/Paris-BaguetteSFW2.jpeg";
import PrototypeImg3 from "../../../assets/images/Paris-BaguetteSFW3.jpeg";
import PrototypeImg4 from "../../../assets/images/Paris-BaguetteSFW4.jpeg";
import PrototypeImg5 from "../../../assets/images/Paris-BaguetteSFW5.jpeg";
import PrototypeImg6 from "../../../assets/images/parisbaguette.jpeg";

const Prototype = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
        <div className="container mx-auto">
            <div className="prototype-main">
                <div className="prototype-con">
                <h3 className="text-[#081d5c] font-special md:text-[38px] text-[28px] leading-[40px]">
                    Our New Prototype
                </h3>
                <div className="border-2 border-[#f6c844] w-[116px] my-3"></div>
                <div className="font-basker text-[20px] leading-[1.5] my-2">
                    The new design boasts an elevated guest experience through every consumer touchpoint: modern and welcoming café layouts, distinguished brand packaging and an enhanced digital and mobile presence.
                </div>
                <div className="my-8">
                    <button className="p-3 bg-[#f6c844] font-special text-[20px] text-[#081d5c]">
                        Read More On 1851
                    </button>
                </div>
                </div>
                <div className="pt-thumb-slider">
                    <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                    >
                        <SwiperSlide>
                            <img src={PrototypeImg1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={PrototypeImg2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={PrototypeImg3} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={PrototypeImg4} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={PrototypeImg5} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={PrototypeImg6} />
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                    onSwiper={() => setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                    >
                     <SwiperSlide>
                            <img src={PrototypeImg1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={PrototypeImg2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={PrototypeImg3} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={PrototypeImg4} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={PrototypeImg5} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={PrototypeImg6} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </>
  );
};

export default Prototype;
