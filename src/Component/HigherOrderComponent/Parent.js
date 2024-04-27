import React from "react";
import Hoc from "./Hoc";
import Child1WithHoc from "../HigherOrderComponent/Child1";

const parent = () => {
  return <Child1WithHoc />;
};

const parentWithHoc = Hoc(parent, true);

export default parentWithHoc;
