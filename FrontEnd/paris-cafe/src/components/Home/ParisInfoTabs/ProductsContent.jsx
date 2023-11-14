import Product1 from "../../../assets/images/Rectangle-405.png";
import Product2 from "../../../assets/images/Rectangle-406.png";
import Product3 from "../../../assets/images/Rectangle-407.png";
import Product4 from "../../../assets/images/Rectangle-409.png";
import Product5 from "../../../assets/images/Rectangle-410.png";
import Product6 from "../../../assets/images/Rectangle-411.png";
import Product7 from "../../../assets/images/Rectangle-412.png";
import Product8 from "../../../assets/images/Rectangle-413.png";
import Product9 from "../../../assets/images/Rectangle-414.png";
import Product10 from "../../../assets/images/Rectangle-415.png";

const ProductsContent = ({ProductCon}) => {
  return (
    <>
        <div className="product-con">
              {ProductCon && (
                <div className="w-[100%] md:px-[20px] px-[15px]">
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="text-[#fff] font-special text-[#f6c844] md:text-[38px] text-[28px] leading-[40px]">
                      Our Products Offering
                    </h3>
                    <div className="border-2 border-[#f6c844] w-[116px] my-3"></div>
                    <p className="font-basker text-center text-[#fff] text-[20px] leading-[1.5] my-2">
                      Paris Baguette’s primary mission, executed every day by
                      its expert staff of bakers, cakers and baristas, is to
                      share moments of joy with customers and help customers
                      share moments of joy with their friends and family by
                      providing world-class cakes, pastries, coffees, breads and
                      other French-inspired bakery café fare.
                    </p>
                  </div>
                  <div className="w-[100%] md:w-[80%] py-10 mx-auto flex flex-wrap gap-4">
                    <div className="pro-item w-[21%] md:w-[18%] cursor-pointer"> <img src={Product1} alt="product" /> </div>
                    <div className="pro-item w-[21%] md:w-[18%] cursor-pointer"> <img src={Product2} alt="product" /> </div>
                    <div className="pro-item w-[21%] md:w-[18%] cursor-pointer"> <img src={Product3} alt="product" /> </div>
                    <div className="pro-item w-[21%] md:w-[18%] cursor-pointer"> <img src={Product4} alt="product" /> </div>
                    <div className="pro-item w-[21%] md:w-[18%] cursor-pointer"> <img src={Product5} alt="product" /> </div>
                    <div className="pro-item w-[21%] md:w-[18%] cursor-pointer"> <img src={Product6} alt="product" /> </div>
                    <div className="pro-item w-[21%] md:w-[18%] cursor-pointer"> <img src={Product7} alt="product" /> </div>
                    <div className="pro-item w-[21%] md:w-[18%] cursor-pointer"> <img src={Product8} alt="product" /> </div>
                    <div className="pro-item w-[21%] md:w-[18%] cursor-pointer"> <img src={Product9} alt="product" /> </div>
                    <div className="pro-item w-[21%] md:w-[18%] cursor-pointer"> <img src={Product10} alt="product" /> </div>
                  </div>
                  <div className="mt-2 flex justify-center items-center">
                    <button className="p-3 bg-[#f6c844] font-special text-[20px] text-[#081d5c]">
                        Apply To Own
                    </button>
                  </div>
                </div>
              )}
            </div>
    </>
  )
}

export default ProductsContent