import { useEffect, useState } from 'react';
import { getProducts } from '../services/api';

import '../App.css';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import BrandIntro from '../components/BrandIntro/BrandIntro';
import BrandWorlds from '../components/BrandWorlds/BrandWorlds';
import FeaturedCollection from '../components/FeaturedCollection/FeaturedCollection';
import BespokeCTA from '../components/BespokeCTA/BespokeCTA';
import Footer from '../components/Footer/Footer';

function Home() {
    return(
        <div>
            <Navbar />
            <Hero />
            <BrandIntro />
            <BrandWorlds />
            <FeaturedCollection />
            <BespokeCTA />
            <Footer />
        </div>
    );
}

export default Home;