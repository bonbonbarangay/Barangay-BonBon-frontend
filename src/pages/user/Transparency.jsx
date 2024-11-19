import React from "react";
import RightBar from "../../components/user/RightBar";
import logo from "../../assets/logo.png";
const Transparency = () => {
  return (
    <div className="w-full h-auto bg-[#DEE5F8] ">
      <div className="flex px-5">
        <div className="w-[70%]">
          <div className="w-full py-5">
            <div>
              <h1 className="text-center text-xl font-bold">TRANSPARENCY</h1>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
              <div className="bg-[#F0F0F0] w-[90%] overflow-y-auto h-[100vh] py-5 px-10 mt-5 border-2 border-[#000] ">
                <div>
                  <div className="flex items-center justify-center flex-col">
                    <img src={logo} className="w-[150px]" />
                  </div>
                  <div className="w-[80%] mt-5">
                    <input
                      type="text"
                      placeholder="Barangay Council"
                      className="w-full py-3 px-3 border border-[#000] placeholder-[#000]"
                    />
                  </div>

                  <div className="w-[80%] mt-5">
                    <input
                      type="text"
                      placeholder="Sanguniang Kabataan (SK)"
                      className="w-full py-3 px-3 border border-[#000] placeholder-[#000]"
                    />
                  </div>

                  <div className="w-[80%] mt-5">
                    <input
                      type="text"
                      placeholder="Bids and Projects"
                      className="w-full py-3 px-3 border border-[#000] placeholder-[#000]"
                    />
                  </div>

                  <div className="w-[80%] mt-5">
                    <input
                      type="text"
                      placeholder="Budget and Financial Accountability Reports"
                      className="w-full py-3 px-3 border border-[#000] placeholder-[#000]"
                    />
                  </div>

                  <div className="w-[80%] mt-5">
                    <input
                      type="text"
                      placeholder="Status of Implementation, Evaluation or Assessment Reports"
                      className="w-full py-3 px-3 border border-[#000] placeholder-[#000]"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-10">
                    <h1 className="text-center text-xl font-bold">
                      BARANGAY COUNCIL
                    </h1>
                  </div>
                  <div className="grid grid-cols-3 place-items-center	 gap-3 mt-10">
                    <div className="mt-5">
                      <div className="w-[100px]">
                        <img
                          src="https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg"
                          className="w-full h-[80px] "
                        />
                      </div>
                      <div className="mt-3">
                        <h1 className="">Fullname:</h1>
                        <h1 className="">Position:</h1>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="w-[100px]">
                        <img
                          src="https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg"
                          className="w-full h-[80px] "
                        />
                      </div>
                      <div className="mt-3">
                        <h1 className="">Fullname:</h1>
                        <h1 className="">Position:</h1>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="w-[100px]">
                        <img
                          src="https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg"
                          className="w-full h-[80px] "
                        />
                      </div>
                      <div className="mt-3">
                        <h1 className="">Fullname:</h1>
                        <h1 className="">Position:</h1>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="w-[100px]">
                        <img
                          src="https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg"
                          className="w-full h-[80px] "
                        />
                      </div>
                      <div className="mt-3">
                        <h1 className="">Fullname:</h1>
                        <h1 className="">Position:</h1>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="w-[100px]">
                        <img
                          src="https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg"
                          className="w-full h-[80px] "
                        />
                      </div>
                      <div className="mt-3">
                        <h1 className="">Fullname:</h1>
                        <h1 className="">Position:</h1>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="w-[100px]">
                        <img
                          src="https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg"
                          className="w-full h-[80px] "
                        />
                      </div>
                      <div className="mt-3">
                        <h1 className="">Fullname:</h1>
                        <h1 className="">Position:</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] border-2 border-[#000]  ">
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Transparency;
