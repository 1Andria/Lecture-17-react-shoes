import React, { useState } from "react";
import Sneakers from "../../assets/sneakers.svg";
import CategoryBtn from "../../__Atom/CategoryBtn/CategoryBtn";
import Cart from "../../assets/cart.svg";

function Header({ ProductData }) {
  const [active, setActive] = useState(1);
  return (
    <>
      <div className=" h-[112px] max-w-[1110px] w-full border-b border-b-[#E4E9F2] flex items-center justify-between ">
        <div className="flex gap-[50px] ">
          <img src={Sneakers} alt="Sneakers" />
          <div className=" flex gap-[30px]">
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
          <img src={Cart} alt="Cart" />
          <img
            className="w-[50px] h-[50px]"
            src={ProductData.customer}
            alt="customer"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
