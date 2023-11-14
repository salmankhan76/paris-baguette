import { useEffect, useState } from "react";
import Franchise from "../../../assets/images/investment-icon-01-1.png"
import Liquidity from "../../../assets/images/investment-icon-03-1.png"
import Initial from "../../../assets/images/investment-icon-05-1.png"
import axios from "axios";

const InvestContent = ({InvestCon}) => {
    const [MuchCost, setMuchCost] = useState(true);
    const [MuchMake, setMuchMake] = useState(false);
    const [Data, setData] = useState({});

    const HandleMuchCost = () => {
        setMuchCost(true);
        setMuchMake(false);
      }
      const HandleMuchMake = () => {
        setMuchCost(false);
        setMuchMake(true);
      }

      const fetchData = async () => {

        try {
          await axios
            .get('http://localhost:1337/api/investments/', {
            })
            .then((res) => {
              console.log("res", res?.data?.data[0].attributes);
              setData(res?.data?.data[0].attributes);
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      useEffect(() => {
        fetchData()
      }, [])
  return (
    <>
        <div className="Investment-con">
        {InvestCon && (
          <div className="w-[100%] md:px-[20px] ">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[#fff] font-special text-[#f6c844] md:text-[38px] text-[28px] leading-[40px]">
                Investment
              </h3>
              <div className="border-2 border-[#f6c844] w-[116px] my-3"></div>
            </div>

            <div className="w-[93%] md:w-[80%] pt-10 mx-auto flex flex-col">
                <div className="pit-invest-wrap">
                    <ul>
                        <li>
                            <span className={`${MuchCost ? "active" : ""}`} onClick={HandleMuchCost}> How Much Does It Cost? </span>
                        </li>
                        <li>
                            <span className={`${MuchMake ? "active" : ""}`} onClick={HandleMuchMake}> How Much can I make?  </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-[93%] md:w-[80%] pt-10 mx-auto flex flex-col">
            {MuchCost && 
                <>
                    <div className="flex justify-around flex-col md:flex-row gap-[20px]">
                        <div className="flex flex-col items-center">
                            <div className="pit-invest-mc">
                                <img src={Franchise} alt="" />
                            </div>
                            <h3 className="mt-4 text-[#f6c844] font-special text-center text-[#fff] md:text-[24px] text-[22px] leading-[36px]">
                                 {Data?.franchise_fee}
                            </h3>
                            <p className="font-basker text-center text-[#fff] text-[20px] leading-[1.5]">
                                Franchise Fee
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="pit-invest-mc">
                                <img src={Initial} alt="" />
                            </div>
                            <h3 className="mt-4 text-[#f6c844] font-special text-center text-[#fff] md:text-[24px] text-[22px] leading-[36px]">
                                {Data?.initial_investment}
                            </h3>
                            <p className="font-basker text-center text-[#fff] text-[20px] leading-[1.5]">
                                Initial Investment<br /> Including Franchise Fee
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="pit-invest-mc">
                                <img src={Liquidity} alt="" />
                            </div>
                            <h3 className="mt-4 text-[#f6c844] font-special text-center text-[#fff] md:text-[24px] text-[22px] leading-[36px]">
                                {Data?.liquidity_requirement}
                            </h3>
                            <p className="font-basker text-center text-[#fff] text-[20px] leading-[1.5]">
                            Liquidity Requirement
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 flex justify-center items-center">
                        <button className="p-3 bg-[#f6c844] font-special text-[16px] text-[#081d5c]">
                            Apply To Own
                        </button>
                    </div>
                </>
            }

            {MuchMake &&
                <>
                    <h3 className="text-[#fff] font-special text-center text-[#fff] md:text-[30px] text-[24px] leading-[36px]">
                        Investment
                    </h3>
                    <h3 className="mt-6 mb-4 text-[#f6c844] font-special text-center text-[#fff] md:text-[38px] text-[28px] leading-[36px]">
                        {Data?.how_much_make}
                    </h3>
                    <div className="md:w-[100] w-[80%] mx-auto">
                        <p className="font-basker text-center text-[#fff] text-[20px] leading-[1.5] my-2">
                            According to Item 19 of the Paris Baguette Franchise Disclosure Document with 46% of cafés exceeding that amount. Compared to the average unit volume of 2021, $2,244,757, this is a 18.44% increase.
                        </p>
                    </div>
                </>
            }
               
               
            </div>
            
          </div>
        )}
      </div>
    </>
  )
}

export default InvestContent;