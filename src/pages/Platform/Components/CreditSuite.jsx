import React from "react";
import { Contract, Hassless, Vendor } from "../../../icons";

const data = [
  {
    text: "One vendor",
    icon: Vendor,
    width: "20px",
  },
  {
    text: "One contract",
    icon: Contract,
    width: "20px",
  },
  {
    text: "Zero hassles",
    icon: Hassless,
    width: "20px",
  },
];

const CreditSuite = () => {
  return (
    <div className="w-[90%] xs:w-3/4 sm:w-4/5 mx-auto ">
      <div className="p-12 bg-gradient-to-r from-from-purple to-to-purple shadow-purple rounded-lg grid grid-cols-1 sm:grid-cols-5 gap-6 items-center">
        <div className="col-span-1 sm:col-span-2 text-2xl sm:text-3xl font-bold text-white-gradient">
          All-in-one credit suite
        </div>
        {data.map((value) => (
          <div className="col-span-1 bg-white rounded-md p-2">
            <div className="flex items-center p-3">
              <div className="p-2 shadow-gray-shadow rounded-full mx-3">
                {<value.icon />}
              </div>
              <div className="text-gray-gradient text-sm font-medium">
                {value.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditSuite;
