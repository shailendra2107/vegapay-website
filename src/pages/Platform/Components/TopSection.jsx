import React from "react";
import { MdChevronRight } from "react-icons/md";
import Button from "../../../Components/Button";
import mobile from "../../../assets/images/png/mobile.png";
import { useDispatch } from "react-redux";
import { setOpen } from "../../../store/ValidationSlice";
const TopSection = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-[90%] xs:w-3/4 sm:w-4/5 mx-auto py-4 sm:p-0">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col  justify-center">
          <div className="">
            <div className="text-2xl sm:text-4xl font-bold text-gradient sm:leading-[3.5rem]">
              Launch digital-first credit <br /> programs in less than 7 days
            </div>
            <div className="text-md sm:text-lg text-white  py-3 sm:leading-8">
              Integrate with a pre-built LOS, LMS, payouts and more with <br />{" "}
              VegaPay’s all-in-one credit suite
            </div>
            <Button
              text="request demo"
              classNames="bg-white px-4 py-2 text-theme-color sm:text-lg font-normal mt-4"
              rightIcon={<MdChevronRight fontSize={25} />}
              onHandleClick={() => dispatch(setOpen(true))}
            />
          </div>
        </div>
        <div className="">
          <img src={mobile} alt="mobile" />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
