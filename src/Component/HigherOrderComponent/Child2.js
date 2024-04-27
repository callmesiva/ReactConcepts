import React from "react";
import Hoc from "./Hoc";

const Child2 = () => {
  return <h4 className="mt-3 text-center m-auto">Ended</h4>;
};

const Child2WithHoc = Hoc(Child2);

export default Child2WithHoc;
