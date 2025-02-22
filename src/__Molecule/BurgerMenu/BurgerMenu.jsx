import React from "react";
import X from "../../assets/x.svg";

function BurgerMenu({ BurgerM }) {
  return (
    <>
      <div className=" w-full flex h-screen fixed top-0 left-0  bg-[rgba(0,0,0,0.5)] min-[712px]:hidden">
        <div className="h-full w-[370px] bg-white pt-[25px] pl-[25px] flex flex-col gap-[50px]">
          <button className="cursor-pointer">
            <img src={X} alt="x" onClick={BurgerM} />
          </button>
          <div className="flex flex-col gap-[20px] ">
            <h3
              onClick={BurgerM}
              className="text-[18px] cursor-pointer text-[#1D2026]"
            >
              Collections
            </h3>
            <h3
              onClick={BurgerM}
              className="text-[18px] cursor-pointer text-[#1D2026]"
            >
              Men
            </h3>
            <h3
              onClick={BurgerM}
              className="text-[18px] cursor-pointer text-[#1D2026]"
            >
              Women
            </h3>
            <h3
              onClick={BurgerM}
              className="text-[18px] cursor-pointer text-[#1D2026]"
            >
              About
            </h3>
            <h3
              onClick={BurgerM}
              className="text-[18px] cursor-pointer text-[#1D2026]"
            >
              Contact
            </h3>
          </div>
        </div>
        <div className="w-full h-full" onClick={BurgerM}></div>
      </div>
    </>
  );
}

export default BurgerMenu;
