import React from "react";
import Header from "./Header/page";
import HomeSlider from "./HomeSlider/page";
import Footer from "./Footer/page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css"
import Testimonials from "./Testimonials/page"
import Faq from "./Faq/page"
import Services from "./services/page"
import SIP from './sip/page'
import SIPGraph from './sipgraph/page'
import TabItem from './tabitem/page'
import TradeOnOur from './tradeonour/page'
function page() {
  return (
    <>
      <Header />
      <HomeSlider />
      <SIPGraph/>
      <TradeOnOur/>
      <SIP />
      <Services />
      <TabItem/>
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}

export default page;
