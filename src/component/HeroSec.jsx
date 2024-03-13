import React from "react";
import { Button } from "./button/Button";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const HeroSec = () => {
    return (
        <div className="bg-[#F5F7FA]">




            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
    
                <SwiperSlide> <div className="container grid lg:flex items-center gap-16 py-16">
                    <div className="lg:w-[65%] space-y-6">
                        <div className="text-5xl md:text-7xl font-semibold text-colorTwo">
                            Lessons and insights{" "}
                            <span className="text-colorOne"> from 8 years </span>{" "}
                        </div>

                        <div className="text-gray-500 text-lg">
                            Where to grow your business as a photographer: site or social media?
                        </div>

                        <Button text={"Register"} icon={false} />
                    </div>

                    <div className="lg:w-[35%] justify-center flex lg:block ">
                        <img
                            src="herosec/herosec.png"
                            className=" object-cover w-[70%] lg:w-full h-full"
                            alt=""
                        />
                    </div>
                </div></SwiperSlide>

                <SwiperSlide> <div className="container grid lg:flex items-center gap-16 py-16">
                    <div className="lg:w-[65%] space-y-6">
                        <div className="text-5xl md:text-7xl font-bold text-colorTwo">
                            Lessons and insights{" "}
                            <span className="text-colorOne"> from 8 years </span>{" "}
                        </div>

                        <div className="text-gray-500 text-lg">
                            Where to grow your business as a photographer: site or social media?
                        </div>

                        <Button text={"Register"} icon={false} />
                    </div>

                    <div className="lg:w-[35%] justify-center flex lg:block ">
                        <img
                            src="herosec/herosec.png"
                            className=" object-cover w-[70%] lg:w-full h-full"
                            alt=""
                        />
                    </div>
                </div></SwiperSlide>

                <SwiperSlide> <div className="container grid lg:flex items-center gap-16 py-16">
                    <div className="lg:w-[65%] space-y-6">
                        <div className="text-5xl md:text-7xl font-bold text-colorTwo">
                            Lessons and insights{" "}
                            <span className="text-colorOne"> from 8 years </span>{" "}
                        </div>

                        <div className="text-gray-500 text-lg">
                            Where to grow your business as a photographer: site or social media?
                        </div>

                        <Button text={"Register"} icon={false} />
                    </div>

                    <div className="lg:w-[35%] justify-center flex lg:block ">
                        <img
                            src="herosec/herosec.png"
                            className=" object-cover w-[70%] lg:w-full h-full"
                            alt=""
                        />
                    </div>
                </div></SwiperSlide>

            </Swiper>











        </div>
    );
};

export default HeroSec;
