import React from "react";
import { MdChevronRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import Button from "../../Components/Button";
import { Logo } from "../../icons";
import { setOpen } from "../../store/ValidationSlice";

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-light-black">
      <div className="w-[90%] mx-auto pt-10 pb-5">
        <div className="">
          <Logo />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="border-b sm:border-b-0 sm:border-r border-[#1F1F1F]  pr-2">
            <div className="text-off-white text-sm font-normal my-2 leading-6">
              VegaPay is the only payments solution in India that allows
              businesses to accept, process and disburse payments with its
              product suite. It gives you access to all payment modes including
              credit card, debit card, netbanking, UPI and popular wallets
              including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money
              and PayZapp.
            </div>
          </div>
          <div className="border-b sm:border-b-0 sm:border-r border-[#1F1F1F]  px-0 pb-2 sm:pb-0 sm:px-10">
            <div className="grid grid-cols-2">
              <div className="">
                <div className="mb-5 ">
                  <div className="leading-5 pb-1 text-sm text-white font-normal">
                    Platform
                  </div>
                  <div className="leading-5 pb-1 text-sm text-off-white font-normal">
                    Overview
                  </div>
                  <div className="leading-5 pb-1 text-sm text-off-white font-normal">
                    LOS
                  </div>
                  <div className="leading-5 pb-1 text-sm text-off-white font-normal">
                    MS{" "}
                  </div>
                  <div className="leading-5 pb-1 text-sm text-off-white font-normal">
                    Payouts
                  </div>
                </div>
                <div className="">
                  <div className="leading-5  text-sm text-white font-normal">
                    Solutions
                  </div>
                  <div className="leading-5  text-sm text-off-white font-normal">
                    Co-brand Credit
                  </div>
                  <div className="leading-5 text-sm text-off-white font-normal">
                    BNPL
                  </div>
                </div>
              </div>
              <div className="">
                <div className="text-sm text-white font-normal pb-2">
                  Developers
                </div>
                <div className="text-sm text-white font-normal pb-2">
                  Company
                </div>
                <div className="text-sm text-white font-normal pb-2">
                  Contact Us
                </div>
                <div className="text-sm text-white font-normal pb-2">
                  Careers
                </div>
                <div className="text-sm text-white font-normal pb-2">
                  About Us
                </div>
                <div className="">
                  <Button
                    text="request demo"
                    classNames="bg-white px-4 py-1 text-theme-color text-sm font-normal mt-4"
                    rightIcon={<MdChevronRight fontSize={25} />}
                    onHandleClick={() => dispatch(setOpen(true))}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-0 sm:pl-10">
            <div className="text-sm text-white font-normal pb-2">Address</div>
            <div className="text-sm text-off-white font-normal leading-6 mb-3">
              REGD. OFFICE ADDRESS <br /> VegaPay Software Private Limited, 1st
              Floor, <br />
              SJR Cyber, 22 Laskar Hosur Road, Adugodi, <br /> Bengaluru,
              560030, Karnataka, India <br /> CIN: U72200KA2013PTC097389
            </div>
            <div className="text-sm text-off-white font-normal leading-6">
              Email - gaurav@vegapay.tech <br /> Contact No - +91 99303 28780
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:justify-start text-white text-sm font-semibold">
          <div className=" cursor-pointer">Privacy Policy </div>
          <div className="mx-3 cursor-pointer">Terms of use </div>
        </div>
        <div className="text-darkest text-sm  grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="hidden sm:block"></div>
          <div className="hidden sm:block"></div>
          <div className="p-0 sm:pl-10 text-center sm:text-left">
            © VegaPay technology private limited{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
