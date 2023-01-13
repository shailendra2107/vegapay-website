import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "../../../Components/Button";
import work from "../../../assets/images/png/why-us.png";

const VegaPayWork = () => {
  return (
    <div className="w-[90%] xs:w-3/4 sm:w-4/5 mx-auto py-4 sm:p-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 py-5">
        <div className="">
          <img src={work} alt="mobile" width={"100%"} />
        </div>
        <div className="flex flex-col  justify-center px-10">
          <div className="">
            <div className="text-2xl sm:text-3xl font-bold text-purple-gradient sm:leading-[3.5rem]">
              How VegaPay works?
            </div>
            <div className="text-md sm:text-lg text-light-dark   py-3 sm:leading-8">
              VegaPay provides you with a comprehensive credit suite featuring a
              wide breadth of modules and no-code configuration to design,
              deploy, and direct your credit programs.
            </div>
            <Button
              text="Learn More"
              classNames="bg-dark-purple px-4 py-2 text-white sm:text-lg font-normal w-auto mt-4"
              rightIcon={<IoIosArrowRoundForward fontSize={25} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VegaPayWork;
