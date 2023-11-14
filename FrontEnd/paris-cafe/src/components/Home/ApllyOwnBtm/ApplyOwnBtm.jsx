import "./ApplyOwnBtm.css";
import { CaretDownOutlined } from "@ant-design/icons";

const ApplyOwnBtm = () => {


  return (
    <>

      <div className='pb-applyown-main w-full'>
        <div className="container mx-auto">
            <div className="pb-ao-con">
                <div className="pb-ao-body">
                    <h3> Apply to Own </h3>
                    <p> Complete this form to start a conversation about owning a Paris Baguette Bakery Cafe. </p>
                </div>
                <div className="apply-own-form-btm mt-5">
                  <form className="w-full max-w-4xl mx-auto">
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
                        <input
                          className="appearance-none block w-full bg-white-500 text-black-700 border-0 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-0"
                          id="grid-last-name"
                          type="text"
                          placeholder="First Name*"
                          required
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-2">
                        <input
                          className="appearance-none block w-full bg-white-500 text-black-700 border-0 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-0"
                          id="grid-last-name"
                          type="text"
                          placeholder="Last Name*"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
                        <input
                          className="appearance-none block w-full bg-white-500 text-black-700 border-0 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-0"
                          id="grid-last-name"
                          type="tel"
                          placeholder="Phone*"
                          required
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-2">
                        <input
                          className="appearance-none block w-full bg-white-500 text-black-700 border-0 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-0"
                          id="grid-last-name"
                          type="email"
                          placeholder="Email*"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
                        <input
                          className="appearance-none block w-full bg-white-500 text-black-700 border-0 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-0"
                          id="grid-last-name"
                          type="text"
                          placeholder="City*"
                          required
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-2">
                        <div className="relative">
                          <select
                            className="appearance-none block w-full bg-white-500 text-black-700 border-0 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-0"
                            id="grid-state"
                          >
                            <option className="opacity-40">New Mexico</option>
                            <option className="opacity-40">Missouri</option>
                            <option className="opacity-40">Texas</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black-700 opacity-40">
                            <CaretDownOutlined />
                          </div>
                        </div>
                      </div>
                    </div>
                    

                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-2 mb-6 md:mb-0">
                        <textarea
                          className="appearance-none block w-full bg-white-500 text-black-700 border-0 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-0"
                          id="grid-last-name"
                          type="text"
                          placeholder="Tell us more about yourself"
                        />
                      </div>
                    </div>

                    <div className="af-btm flex flex-col -mx-1  sm:mb-0 lg:mb-5">
                      <label className="text-[#fff]"> Minimum liquid capital investment is $500,000. Do You Meet This Requirement? </label>
                      <div className="mb-6 md:mb-0 flex items-center gap-4">
                          <div className="flex items-center gap-2">
                              <input id="invest-radio-yes" type="radio" defaultValue="" name="investment"
                                  className="invest-input w-4 h-4 text-[#fff] bg-gray-100 border-[#fff] focus:ring-[#fff] focus:bg-[#fff]"
                                  checked
                              />
                              <label htmlFor="invest-radio-yes" className="font-medium text-white dark:text-gray-300">
                                  Yes
                              </label>
                          </div>
                          <div className="flex items-center gap-2">
                              <input id="invest-radio-no" type="radio" defaultValue="" name="investment"
                                  className="invest-input w-4 h-4 text-[#fff] bg-gray-100 border-[#fff] focus:ring-[#fff] focus:bg-[#fff]"
                              />
                              <label htmlFor="invest-radio-no" className="font-medium text-white dark:text-gray-300">
                                  No
                              </label>
                          </div>
                      </div>
                    </div>

                    <div className="af-btm flex flex-col md:flex-row -mx-1">
                      <label className="text-[#fff]"> Do you have a net worth of at least $1.5 million? </label>
                      <div className="sm:ml-0 lg:ml-4 mb-6 flex items-center gap-4">
                          <div className="flex items-center gap-2">
                              <input id="worth-yes" type="radio" defaultValue="" name="worth" className="w-4 h-4" checked />
                              <label htmlFor="worth-yes" className="font-medium text-[#fff]">
                                  Yes
                              </label>
                          </div>
                          <div className="flex items-center gap-2">
                              <input id="worth-no" type="radio" defaultValue="" name="worth" className="w-4 h-4" />
                              <label htmlFor="worth-no" className="font-medium text-[#fff]">
                                  No
                              </label>
                          </div>
                      </div>
                    </div>

                    <div className="sm:mt-0 lg:mt-2 flex justify-start">
                      <button className="py-2 px-[50px] bg-[#f6c844] font-special text-[20px] text-[#081d5c]">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default ApplyOwnBtm;



