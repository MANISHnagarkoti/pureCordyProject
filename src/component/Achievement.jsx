import React from "react";
import { Button } from "./button/Button";

const Achievement = () => {
  return (
    <div>
      <div className=" mt-24  bg-[#F5F7FA] ">
        <div className="container py-9 lg:py-16 gap-24 grid lg:flex justify-between">
          <div className="lg:w-[40%]">
            <div className="text-4xl md:text-5xl font-semibold text-colorTwo">
              Helping a local{" "}
              <div className="text-colorOne"> business reinvent itself </div>
            </div>
         
            <div className="mt-4 text-colorTwo/9 text-lg">
              We reached here with our hard work and dedication
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-16 ">
            <div className="flex items-center gap-4">
              <div>
                <img
                  src="/Achievement/logoOne.png"
                  className="w-8 md:w-12"
                  alt=""
                />
              </div>
              <div>
                <div className="text-xl md:text-3xl font-bold text-colorTwo ">
                  2,245,341
                </div>
                <div className=" text-colorTwo/90">Member</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div>
                <img
                  src="/Achievement/logoTwo.png"
                  className="w-8 md:w-12"
                  alt=""
                />
              </div>
              <div>
                <div className="text-xl md:text-3xl font-bold text-colorTwo">
                  46,328
                </div>
                <div className=" text-colorTwo/90">Clubs</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div>
                <img
                  src="/Achievement/logoThree.png"
                  className="w-8 md:w-12"
                  alt=""
                />
              </div>
              <div>
                <div className="text-xl md:text-3xl font-bold text-colorTwo">
                  828,867
                </div>
                <div className=" text-colorTwo/90">Event Bookings</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div>
                <img
                  src="/Achievement/logoFour.png"
                  className="w-8 md:w-12"
                  alt=""
                />
              </div>
              <div>
                <div className="text-xl md:text-3xl font-bold text-colorTwo">
                  1,926,436
                </div>
                <div className=" text-colorTwo/90">Payments</div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='grid md:flex mt-24 items-center gap-9 container'>

        <div className='lg:w-[40%]'>
          <img src="/Achievement/pana.png" className='w-full h-full object-cover' alt="" />
        </div>

        <div className='lg:w-[60%] text-left space-y-6'>
          <div className='text-colorTwo text-4xl font-semibold'>How to design your site footer like we did</div>
          <div className='mt-4 text-colorTwo/90'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</div>
          <Button text={"Learn More"} icon={false} />
        </div>

      </div>


    </div>
  );
};

export default Achievement;
