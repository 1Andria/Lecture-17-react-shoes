import React, { useState, useRef, useEffect } from "react";
import Sneakers from "../../assets/sneakers.svg";
import CategoryBtn from "../../__Atom/CategoryBtn/CategoryBtn";
import Cart from "../../assets/cart.svg";
import CartCont from "../CartCont/CartCont";

function Header({ ProductData, quantity, setQuantity, state, BurgerM }) {
  const [active, setActive] = useState(1);
  const [visible, setVisible] = useState(false);
  function Visible() {
    setVisible(!visible);
  }
  const ProductDiv = useRef(null);

  useEffect(() => {
    function outsideClick(event) {
      if (!ProductDiv.current.contains(event.target)) {
        setVisible(false);
      }
    }
    document.addEventListener("mousedown", outsideClick);

    return () => {
      document.removeEventListener("mousedown", outsideClick);
    };
  }, []);
  return (
    <>
      <div className=" pl-[10px] pr-[10px] h-[112px] w-full border-b border-b-[#E4E9F2] flex items-center justify-between ">
        <div className="flex gap-[50px] max-[712px]:gap-[20px] items-center ">
          <div
            className="flex flex-col min-[712px]:hidden cursor-pointer gap-[2px]"
            onClick={BurgerM}
          >
            <div className="w-[16px] h-[3px] bg-[#D8D8D8]"></div>
            <div className="w-[16px] h-[3px] bg-[#D8D8D8]"></div>
            <div className="w-[16px] h-[3px] bg-[#D8D8D8]"></div>
          </div>
          <img src={Sneakers} alt="Sneakers" />
          <div className=" flex gap-[30px] max-[712px]:hidden">
            <CategoryBtn
              categoryName="Collections"
              isActive={active === 1}
              onClick={() => setActive(1)}
            />
            <CategoryBtn
              categoryName="Men"
              isActive={active === 2}
              onClick={() => setActive(2)}
            />
            <CategoryBtn
              categoryName="Women"
              isActive={active === 3}
              onClick={() => setActive(3)}
            />
            <CategoryBtn
              categoryName="About"
              isActive={active === 4}
              onClick={() => setActive(4)}
            />
            <CategoryBtn
              categoryName="Contact"
              isActive={active === 5}
              onClick={() => setActive(5)}
            />
          </div>
        </div>
        <div className="flex gap-[45px] items-center">
          <div className="relative" ref={ProductDiv}>
            <img
              src={Cart}
              alt="Cart"
              onClick={Visible}
              className="cursor-pointer"
            />
            <div className=" absolute top-[-6px] left-[12px] w-[19px] h-[13px] bg-[#FF7E1B] rounded-[6.5px] ">
              <h5 className="text-white text-[10px] flex justify-center items-center">
                {quantity}
              </h5>
            </div>
            {visible && (
              <div className="absolute z-10 max-[1164px]:right-[-100px] right-[-130px] top-[45px]">
                <CartCont
                  ProductData={ProductData}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  state={state}
                  setVisible={setVisible}
                />
              </div>
            )}
          </div>
          <div
            className={`rounded-[50%] border-[2px] ${
              visible ? "border-[#FF7E1B]" : "border-[transparent]"
            } `}
          >
            <img
              className={`w-[50px] h-[50px] `}
              src={ProductData.customer}
              alt="customer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
