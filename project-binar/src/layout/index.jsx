import { Header } from "./layout.header";
import Benefit from "./layout.benefit";
import WhyUs from "./layout.whyus";
import Carousel from "./layout.carousel";
import SewaMobil from "./layout.sewamobil";
import FAQ from "./layout.faq";
import Footer from "./layout.footer";

const Layout = () => {
    return <>
        <Header />
        <Benefit />
        <WhyUs />
        <Carousel />
        <SewaMobil />
        <FAQ />
        <Footer />

        
    </>
}

export default Layout;