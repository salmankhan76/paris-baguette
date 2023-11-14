import React from 'react'
import HeroBanner from '../components/Home/HeroBanner/HeroBanner';
import GrowingBanner from '../components/Home/GrowingBanner/GrowingBanner';
import Franchisebanner from '../components/Home/NewFranchiseBan/Franchisebanner';
import Carditems from '../components/Home/Cardsitems/Carditems';
import ApplyOwnTop from '../components/Home/ApplyOwnTop/ApplyOwnTop';
import ApplyOwnBtm from '../components/Home/ApllyOwnBtm/ApplyOwnBtm';
import MeetFracnhSlider from '../components/Home/MeetFracnhSlider/MeetFracnhSlider';
import CTA from '../components/Home/CTA/CTA';
import Prototype from '../components/Home/Prototype/Prototype';
import ParisInfoTabs from '../components/Home/ParisInfoTabs/ParisInfoTabs';


const Home = () => {
  return (
    <>
      <HeroBanner />
      <ApplyOwnTop />
      <ParisInfoTabs />
      <Prototype />
      <CTA />
      <MeetFracnhSlider />
      <div className="pb-growing-body"><GrowingBanner/></div>
      <div className="pb-franchise-body"><Franchisebanner/></div>
      <div className="pb-carditem-body"><Carditems/></div>
      <ApplyOwnBtm />
    </>
  )
}

export default Home;
