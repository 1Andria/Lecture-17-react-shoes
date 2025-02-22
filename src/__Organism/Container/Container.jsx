import React, { useReducer, useState } from "react";
import Data from "../../data.json";
import Header from "../../__Molecule/Header/Header";
import SwiperCont from "../../__Molecule/Swiper/SwiperCont";
import Informational from "../../__Molecule/Informational/Informational";
import MainSwiper from "../../__Molecule/MainSwiper/MainSwiper";
import BurgerMenu from "../../__Molecule/BurgerMenu/BurgerMenu";
import CenterSwip from "../../__Molecule/CenterSwip/CenterSwip";
const initialValue = {
  count: 0,
};

function Reducer(state, action) {
  switch (action.type) {
    case "+":
      return { count: state.count + 1 };
    case "-":
      return { count: state.count - 1 };
    default:
      alert("Something Wrong!");
  }
}

function Container() {
  const ProductData = Data.find((item) => item.id === 1);
  const [state, dispatch] = useReducer(Reducer, initialValue);
  const [quantity, setQuantity] = useState(0);
  const [burger, setBurger] = useState(false);
  const [toggler, setToggler] = useState(false);

  function Change() {
    setQuantity(state.count);
  }

  function BurgerM() {
    setBurger(!burger);
  }

  return (
    <>
      <div className="w-full h-screen flex  flex-col items-center">
        <div className="max-w-[1110px] w-full">
          <Header
            ProductData={ProductData}
            quantity={quantity}
            setQuantity={setQuantity}
            state={state}
            BurgerM={BurgerM}
          />
          <div className="flex w-full items-center justify-around h-full max-[915px]:flex-col max-[474px]:justify-start">
            <SwiperCont
              ProductData={ProductData}
              onClick={() => setToggler(!toggler)}
            />
            <MainSwiper
              ProductData={ProductData}
              onClick={() => setToggler(!toggler)}
            />
            <Informational
              ProductData={ProductData}
              dispatch={dispatch}
              state={state}
              Change={Change}
            />
          </div>
        </div>
        {burger && <BurgerMenu BurgerM={BurgerM} />}
        <CenterSwip toggler={toggler} />
      </div>
    </>
  );
}

export default Container;
