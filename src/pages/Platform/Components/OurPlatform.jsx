import React from "react";
import omni from "../../../assets/images/png/omni.png";
import engine from "../../../assets/images/png/engine.png";
import verify from "../../../assets/images/png/verify.png";
import accSetting from "../../../assets/images/png/accSetting.png";
import portal from "../../../assets/images/png/portal.png";
import data from "../../../assets/images/png/data.png";

const ourPlatform = [
  {
    title: "Omnichannel Apply",
    content:
      "Deliver tailored white-labeled consumer experiences, designed and optimized for conversions across all channels.",
    icon: omni,
    width: "60px",
  },
  {
    title: "Design Engine",
    content:
      "Host and deploy robust, fast and flexible models that support virtually any type of decisioning logic and analytics.",
    icon: engine,
    width: "100px",
  },
  {
    title: "Fraud and Verification",
    content:
      "Address the risks of digital identity, income, bank account, and employment verification with a suite of API-driven modules, underpinned by flexible and proprietary data sources.",
    icon: verify,
    width: "100px",
  },
  {
    title: "Account Management Platform",
    content:
      "Optimize your existing customer relationships by leveraging integrated and comprehensive account management capabilities.",
    icon: accSetting,
    width: "60px",
  },
  {
    title: "Partner Portal",
    content:
      "Leverage account investigation features, complaints and disputes management, suspicious activity review, and our AI-powered recommendations engine — all in one powerful partner-facing tool.",
    icon: portal,
    width: "150px",
  },
  {
    title: "Data Orchestration Hub",
    content:
      "Navigate a network of curated data sources in one simple-to-use access point. Leverage best-in-class integration partners to orchestrate the best experience for your consumers.",
    icon: data,
    width: "90px",
  },
];

const OurPlatform = () => {
  return (
    <div className="w-[90%] sm:w-4/6 mx-auto">
      <div className="text-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-blue-gradient">
          The power of our Platform
        </h1>
        <p className="text-sm sm:text-lg text-light-dark leading-7 my-5">
          We put the power in our partners hands with our flexible and intuitive
          platform. Each highly- <br /> configurable module orchestrates an
          end-to-end experience for your bank and your customers.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {ourPlatform.map((value) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center rounded-xl bg-white shadow-gray-shadow p-6 h-52 md:h-auto  xl:h-36"
            key={value.title}
          >
            <div className="col-span-1 sm:col-span-1 flex justify-center">
              <div className=" w-16 h-16 flex items-center justify-center rounded-full shadow-gray-shadow	bg-white p-3">
                <img src={value.icon} alt="" />
              </div>
            </div>
            <div className="col-span-4 h-full">
              <div className="text-xl sm:text-2xl font-medium text-gray-gradient py-1">
                {value.title}
              </div>
              <div className="text-xs text-light-dark">{value.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPlatform;
