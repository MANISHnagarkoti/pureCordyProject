import React, { useState } from "react";
import { Button } from "./button/Button";

const Navbar = () => {

    const [nav, setNav] = useState(false)

    return (
        <div className="bg-white relative">
            <div className=" flex items-center justify-between container py-6">
                <img src="logo/logo.svg" className="w-12" alt="" />

                <div className="hidden lg:flex gap-8 text-gray-700 items-center font-medium text-lg">
                    <a href="">Home</a>

                    <a href="">Features</a>

                    <a href="">Community</a>

                    <a href="">Blog</a>

                    <a href="">Pricing</a>

                    <Button text={"Register Now"} icon={true} />
                </div>

                <div className="block lg:hidden cursor-pointer" onClick={() => setNav(!nav)}>
                    <div className="text-2xl">
                        <ion-icon name="reorder-two-outline"></ion-icon>
                    </div>
                </div>
            </div>


            <div className={nav ? " translate-x-0 opacity-100 transition-all duration-500 fixed top-0 block lg:hidden z-[99]" : " translate-x-[-100vw] opacity-0 transition-all duration-500 fixed top-0 z-[99]"}>
                <div className="fixed bg-gray-200 w-[300px] text-colorOne gap-8 top-0 h-screen items-center flex flex-col justify-center text-4xl">

<div className="absolute top-4 right-4" onClick={()=> setNav(false)}><ion-icon name="close-outline"></ion-icon></div>

                    <a href="">Home</a>

                    <a href="">Features</a>

                    <a href="">Community</a>

                    <a href="">Blog</a>

                    <a href="">Pricing</a>

                    <Button text={"Register Now"} icon={true} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
