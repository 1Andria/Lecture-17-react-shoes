import React, { useReducer, useState } from "react";
import Data from "../../data.json";
import Header from "../../__Molecule/Header/Header";
import SwiperCont from "../../__Molecule/Swiper/SwiperCont";
import Informational from "../../__Molecule/Informational/Informational";
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
  function Change() {
    setQuantity(state.count);
  }

  return (
    <>
      <div className="w-full h-scree flex  flex-col items-center">
        <div className="max-w-[1110px] w-full">
          <Header ProductData={ProductData} quantity={quantity} />
          <div className="flex w-full">
            <SwiperCont ProductData={ProductData} />
            <Informational
              ProductData={ProductData}
              dispatch={dispatch}
              state={state}
              Change={Change}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Container;
