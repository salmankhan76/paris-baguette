import { useState } from "react";
import "./ParisInfotabs.css";
import ProductsContent from "./ProductsContent";
import TeamContent from "./TeamContent";
import WhyParisContent from "./WhyParisContent";
import InvestContent from "./InvestCOntent";

const ParisInfoTabs = () => {
  const [ProductCon, setProductCon] = useState(true);
  const [TeamCon, setTeamCon] = useState(false);
  const [WhyParisCon, setWhyParisCon] = useState(false);
  const [InvestCon, setInvestCon] = useState(false);

  const HandleProductCon = () => {
    setProductCon(true);
    setTeamCon(false);
    setWhyParisCon(false);
    setInvestCon(false);
  }
  const HandleTeamCon= () => {
    setProductCon(false);
    setTeamCon(true);
    setWhyParisCon(false);
    setInvestCon(false);
  }
  const HandleWhyParisCon = () => {
    setProductCon(false);
    setTeamCon(false);
    setWhyParisCon(true);
    setInvestCon(false);
  }
  const HandleInvestCon = () => {
    setProductCon(false);
    setTeamCon(false);
    setWhyParisCon(false);
    setInvestCon(true);
  }
  return (
    <>
      <div className="paris-info-tabs-main">
        <div className="paris-info-tabs">
          <div className="container mx-auto">
            <div className="pit-wrap">
              <ul>
                <li>
                  <span className={`${ProductCon ? "active" : ""}`} onClick={HandleProductCon}> Our Product Offering </span>
                </li>
                <li>
                  <span className={`${TeamCon ? "active" : ""}`} onClick={HandleTeamCon}> Leadership Team </span>
                </li>
                <li>
                  <span className={`${WhyParisCon ? "active" : ""}`} onClick={HandleWhyParisCon}> Why Paris Baguette </span>
                </li>
                <li>
                  <span className={`${InvestCon ? "active" : ""}`} onClick={HandleInvestCon}> Investment </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="paris-info-con-main py-[70px]">
          <div className="container mx-auto">
                <ProductsContent ProductCon={ProductCon} />
                <TeamContent TeamCon={TeamCon} />
                <WhyParisContent WhyParisCon={WhyParisCon} />
                <InvestContent InvestCon={InvestCon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ParisInfoTabs;
