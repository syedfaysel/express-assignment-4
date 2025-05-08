import Banner from '../banner/Banner';
import Category from '../Category/Category';
import Faq from '../Faq/Faq';
import FeaturedProducts from '../featuredProducts/FeaturedProducts';
import Offer from '../offer/Offer';
import OurBrands from '../ourBrands/OurBrands';
import StationeryTips from '../stationaryTips/StationaryTips';
import Testimonials from '../testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <Category></Category>
            <Offer/>
            <OurBrands/>
            <StationeryTips/>
            <Testimonials></Testimonials>
            <Faq/>
        </div>
    );
};

export default Home;