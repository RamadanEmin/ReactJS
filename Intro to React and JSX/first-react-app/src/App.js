import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Services from './components/Services.js';
import AboutUs from './components/AboutUs.js';
import OurServices from './components/OurServices.js';
import Search from './components/Search.js';
import PricingPlan from './components/PricingPlan.js';
import BannerInfo from './components/BannerInfo.js';
import LatestNews from './components/LatestNews.js';

function App() {
    return (
        <div>
            <div className="back-to-top"></div>

            <Header />

            <Services />

            <AboutUs />

            <OurServices />

            <Search />

            <PricingPlan />

            <BannerInfo />

            <LatestNews />

            <Footer />
        </div>
    );
}

export default App;