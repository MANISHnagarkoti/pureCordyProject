import React from 'react'

const Customer = () => {
    return (
        <div className="  mt-9">

            <div className='bg-[#F5F7FA] py-9'>
                <div className='container grid xl:flex gap-9 md:gap-16'>

                    <div className='xl:w-[30%]'>
                        <img src="/customer/image 9.png" className='w-[70%] xl:w-full h-full object-cover' alt="" />
                    </div>

                    <div className='xl:w-[60%] space-y-6'>
                        <div className='md:text-lg text-gray-500 font-medium'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</div>

                        <div className='space-y-2'>
                            <div className='text-xl md:text-2xl text-colorOne font-semibold'>Tim Smith</div>

                            <div className='md:text-lg text-gray-400'>British Dragon Boat Racing Association</div>
                        </div>

                        <div className='flex gap-9 mt-9 items-center flex-wrap'>
                            <img src="/customer/first.png" className='w-12' alt="" />
                            <img src="/ourclient/LogoTwo.png" className='w-12' alt="" />
                            <img src="/ourclient/LogoThree.png" className='w-12' alt="" />
                            <img src="/ourclient/LogoFour.png" className='w-12' alt="" />
                            <img src="/ourclient/LogoFive.png" className='w-12' alt="" />
                            <img src="/ourclient/LogoSix.png" className='w-12' alt="" />
                            <div className='text-colorOne cursor-pointer font-semibold flex items-center gap-2 text-xl'>
                                <div>Meet all customers </div>
                                <div>
                                    <img src="/customer/Right.svg" className='w-4' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='  mt-16 flex justify-center text-center container'>
                <div className=' md:w-[40%]'>
                    <div className=' text-4xl font-semibold text-colorTwo'>
                        Caring is the new marketing
                    </div>
                    <div className='mt-4 text-gray-500 '>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 gap-y-24 container mt-9'>

                <div className='relative'>
                    <img src="/customer/image 18.png" className='' alt="" />

                    <div className='absolute bottom-[-60px] flex justify-center w-full '>
                        <div className='bg-[#F5F7FA] w-[90%] rounded-lg p-4 shadow-xl'>
                            <div className='text-center md:text-2xl  font-semibold text-gray-500'>Creating Streamlined Safeguarding Processes with OneRen</div>
                            <div className='flex justify-center mt-6'>
                                <div className='text-colorOne cursor-pointer font-semibold flex items-center gap-2 text-xl'>
                                    <div>Readmore</div>
                                    <div>
                                        <img src="/customer/Right.svg" className='w-4' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <img src="/customer/image 19.png" className='' alt="" />

                    <div className='absolute bottom-[-60px] flex justify-center w-full '>
                        <div className='bg-[#F5F7FA] w-[90%] rounded-lg p-4 shadow-xl'>
                            <div className='text-center md:text-2xl  font-semibold text-gray-500'>What are your safeguarding responsibilities and how can you manage them?</div>
                            <div className='flex justify-center mt-6'>
                                <div className='text-colorOne cursor-pointer font-semibold flex items-center gap-2 text-xl'>
                                    <div>Readmore</div>
                                    <div>
                                        <img src="/customer/Right.svg" className='w-4' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='relative'>
                    <img src="/customer/image 20.png" className='' alt="" />

                    <div className='absolute bottom-[-60px] flex justify-center w-full '>
                        <div className='bg-[#F5F7FA] w-[90%] rounded-lg p-4 shadow-xl'>
                            <div className='text-center md:text-2xl  font-semibold text-gray-500'>Revamping the Membership Model with Triathlon Australia</div>
                            <div className='flex justify-center mt-6'>
                                <div className='text-colorOne cursor-pointer font-semibold flex items-center gap-2 text-xl'>
                                    <div>Readmore</div>
                                    <div>
                                        <img src="/customer/Right.svg" className='w-4' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>

        </div>
    )
}

export default Customer