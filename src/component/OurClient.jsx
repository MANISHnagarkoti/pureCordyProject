import React from 'react'
import { Button } from './button/Button'

const OurClient = () => {
    return (
        <div className='container text-center mt-9'>

            <div className='text-colorTwo text-4xl font-semibold'> Our Client </div>
            <div className='mt-2 text-colorTwo/90'>We have been working with some Fortune 500+ clients</div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 lg:grid-cols-7 justify-items-center mt-9'>
                <img src="/ourclient/LogoOne.png" className='w-10' alt="" />
                <img src="/ourclient/LogoTwo.png" className='w-10' alt="" />
                <img src="/ourclient/LogoThree.png" className='w-10' alt="" />
                <img src="/ourclient/LogoFour.png" className='w-10' alt="" />
                <img src="/ourclient/LogoFive.png" className='w-10' alt="" />
                <img src="/ourclient/LogoSix.png" className='w-10' alt="" />
                <img src="/ourclient/LogoThree.png" className='w-10' alt="" />
            </div>

            <div className='text-colorTwo text-4xl font-semibold mt-16 flex justify-center '>
                <div className='md:w-[40%]'>
                    Manage your entire community in a single system
                </div>
            </div>
            <div className='mt-4 text-colorTwo/90'>Who is Nextcent suitable for?</div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 mt-16 '>

                <div className='flex flex-col items-center p-6 custom-shadow'>

                    <img src="/ourclient/cartLogoOne.png" className='w-16' alt="" />
                    <div className='text-colorTwo text-3xl font-bold mt-4'> Membership Organisations </div>
                    <div className='mt-4 text-colorTwo/90'>Our membership management software provides full automation of membership renewals and payments</div>

                </div>

                <div className='flex flex-col items-center p-6 custom-shadow'>

                    <img src="/ourclient/cartLogoTwo.png" className='w-16' alt="" />
                    <div className='text-colorTwo text-3xl font-bold mt-4'> National Associations</div>
                    <div className='mt-4 text-colorTwo/90'>Our membership management software provides full automation of membership renewals and payments</div>

                </div>


                <div className='flex flex-col items-center p-6 custom-shadow'>

                    <img src="/ourclient/cartLogoThree.png" className='w-16' alt="" />
                    <div className='text-colorTwo text-3xl font-bold mt-4'> Clubs And Groups </div>
                    <div className='mt-4 text-colorTwo/90'>Our membership management software provides full automation of membership renewals and payments</div>

                </div>


            </div>

            <div className='grid md:flex mt-24 items-center gap-9'>

                <div className='lg:w-[40%]'>
                    <img src="/ourclient/rafiki.png" className='w-full h-full object-cover' alt="" />
                </div>

                <div className='lg:w-[60%] text-left space-y-6'>
                    <div className='text-colorTwo text-4xl font-semibold'>The unseen of spending three years at Pixelgrade</div>
                    <div className='mt-4 text-colorTwo/90'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</div>
                    <Button text={"Learn More"} icon={false} />
                </div>



            </div>

        </div>
    )
}

export default OurClient