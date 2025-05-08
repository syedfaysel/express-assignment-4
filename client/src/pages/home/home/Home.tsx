import Banner from '../banner/Banner';
import Category from '../Category/Category';
import FeaturedProducts from '../featuredProducts/FeaturedProducts';
import Testimonials from '../testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <Category></Category>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;