import React from 'react'
import Navbar from '../../component/Navbar'
import HeroSec from '../../component/HeroSec'
import OurClient from '../../component/OurClient'
import Achievement from '../../component/Achievement'
import Customer from '../../component/Customer'
import Footer from '../../component/Footer'

const Home = () => {
    return (
        <div>

            <Navbar />
            <HeroSec />
            <OurClient />
            <Achievement/>
            <Customer/>
            <Footer/>

        </div>
    )
}

export default Home