import React from "react";
import { Contact } from "../../../icons";
import flow from "../../../assets/images/png/flow.png";

const ContactUs = () => {
  return (
    <div className="w-[90%] xs:w-3/4 sm:w-4/5 mx-auto ">
      <div className="p-12 bg-inner-contact-linear rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-6 items-center relative">
        <div className="flex items-center">
          <div className="mx-3">
            <Contact />
          </div>

          <div className=" text-dark font-semibold text-xl z-50">
            Contact Us
          </div>
        </div>
        <div className="text-dark-gradient text-xl sm:text-3xl font-medium">
          Launch next gen credit <br /> programs in less than 7 days
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
