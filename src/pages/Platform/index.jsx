import React from "react";
import { MdChevronRight } from "react-icons/md";

import Button from "../../Components/Button";
import ContactUs from "./Components/ContactUs";
import CreditSuite from "./Components/CreditSuite";
import OurPlatform from "./Components/OurPlatform";
import TopSection from "./Components/TopSection";
import VegaPayWork from "./Components/VegaPayWork";

const Platform = () => {
  return (
    <div className="">
      {/* ////// top section \\\\\\\\ */}
      <div className="bg-image">
        <TopSection />
      </div>
      {/* ////// top section \\\\\\\\ */}

      {/* ////// our platform section \\\\\\\\ */}
      <div className="bg-white py-6 sm:py-12">
        <OurPlatform />
      </div>
      {/* ////// our platform section \\\\\\\\ */}

      {/* ////// All in one credit suite section \\\\\\\\ */}
      <div className="bg-light-purple py-12">
        <CreditSuite />
      </div>
      {/* ////// All in one credit suite section \\\\\\\\ */}

      {/* ////// carousel section \\\\\\\\ */}
      <div className="bg-gradient-to-r from-from-dark-purple to-to-dark-purple h-96"></div>
      {/* ////// carousel section \\\\\\\\ */}

      {/* ////// vagePay work section \\\\\\\\ */}
      <div className="bg-white">
        <VegaPayWork />
      </div>
      {/* ////// vagePay work section \\\\\\\\ */}

      {/* ////// contact us section \\\\\\\\ */}
      <div className="bg-contact-linear py-12">
        <ContactUs />
      </div>
      {/* ////// contact us section \\\\\\\\ */}
    </div>
  );
};

export default Platform;
