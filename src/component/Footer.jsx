import React from 'react'
import { Button } from './button/Button'

const Footer = () => {
    return (
        <div className=''>

            <div className='space-y-8 flex flex-col items-center bg-[#F5F7FA] mt-[200px] py-9 px-4'>
                <div className='text-colroTwo text-4xl md:text-6xl font-semibold  md:w-[60%] text-center'>Lorem ipsum dolor sit amet consectetuer</div>
                <Button text={"Get a Demo"} icon={true} />
            </div>

            <div className='bg-footerbg text-white/90 '>

                <div className='container gap-9 grid lg:flex py-16'>

                    <div className='lg:w-[40%]'>
                        <div>
                            <div>
                                Copyright © 2020 Landify UI Kit.
                            </div>
                            <div>
                                All rights reserved
                            </div>
                        </div>
                        <div className='flex gap-4 items-start mt-8'>

                            <div className=' rounded-full  bg-gray-700 w-9 h-9 flex justify-center items-center'>
                                <img src="/footer/in.png" className='w-4' alt="" />
                            </div>

                            <div className=' rounded-full  bg-gray-700 w-9 h-9 flex justify-center items-center'>
                                <img src="/footer/Path.png" className='w-4' alt="" />
                            </div>

                            <div className=' rounded-full  bg-gray-700 w-9 h-9 flex justify-center items-center'>
                                <img src="/footer/twi.png" className='w-4' alt="" />
                            </div>

                            <div className=' rounded-full  bg-gray-700 w-9 h-9 flex justify-center items-center'>
                                <img src="/footer/you.png" className='w-4 ' alt="" />
                            </div>

                        </div>


                    </div>

                    <div className='lg:w-[60%] gap-9 grid md:grid-cols-2 xl:grid-cols-4'>

                        <div>
                            <div className='text-2xl font-semibold'>Company</div>
                            <ul className='mt-4 space-y-2'>
                                <li>About us</li>
                                <li>Blog</li>
                                <li>Contact us</li>
                                <li>Pricing</li>
                                <li>Testimonials</li>
                            </ul>
                        </div>

                        <div>
                            <div className='text-2xl font-semibold'>Support</div>
                            <ul className='mt-4 space-y-2'>
                                <li>Help center</li>
                                <li>Terms of services</li>
                                <li>Legal</li>
                                <li>Privacy policy</li>
                                <li>Status</li>
                            </ul>
                        </div>

                        <div className='col-span-2 w-[80%]'>
                            <div className='text-2xl font-semibold'>Stay up to date</div>

                            <div className=' rounded-lg flex gap-2 items-center bg-gray-600 px-4 w-full mt-9'>
                                <input type="text" name="" placeholder='Your email address' className=' bg-transparent flex-grow py-2' id="" />
                                <img src="/footer/send.png" className='w-4' alt="" />
                            </div>
                        </div>


                    </div>

                </div>

            </div>


        </div>
    )
}

export default Footer