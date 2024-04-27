import React from "react";
import Hoc from "./Hoc";
import Child2WithHoc from "./Child2";

const Child1 = () => {
  return <Child2WithHoc />;
};

const Child1WithHoc = Hoc(Child1);

export default Child1WithHoc;
