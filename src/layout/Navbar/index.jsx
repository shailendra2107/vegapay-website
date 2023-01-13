import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../Components/Button";
import { routes } from "../../router/routes";
import { MdChevronRight } from "react-icons/md";
import logo from "../../assets/images/png/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { getValidationState, setOpen } from "../../store/ValidationSlice";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { open } = useSelector(getValidationState);
  const dispatch = useDispatch();
  return (
    <div className="sticky top-0 bg-white">
      <div className="w-[90%] xs:w-3/4 sm:w-4/5 mx-auto ">
        <div className="grid grid-cols-12 ">
          <div className="col-span-5 py-2 sm:py-0 sm:col-span-3 flex items-center ">
            <img src={logo} alt="logo" />
          </div>
          <div className="hidden sm:block col-span-6">
            <ul className="flex justify-evenly">
              {routes.map((route) => (
                <li
                  className={`${
                    route.activePath === pathname
                      ? "border-b-theme-light-color border-b-4"
                      : "border-b-white border-b-4"
                  } px-2 py-4 text-dark font-normal`}
                >
                  <Link
                    to={route.path}
                    onClick={() => console.log("route >> ", route)}
                  >
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-5 py-2 sm:py-0 sm:col-span-3 flex items-center">
            <Button
              onHandleClick={() => dispatch(setOpen(true))}
              text="request demo"
              classNames="bg-theme-color px-3 py-1.5 rounded-full text-white text-xs sm:text-sm"
              rightIcon={<MdChevronRight fontSize={20} />}
            />
          </div>
          <div className="col-span-2 sm:hidden flex items-center justify-end relative">
            <div
              className=" w-10 h-10 relative focus:outline-none "
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <div className="block w-5 absolute right-1 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    isNavOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    isNavOpen && "opacity-0"
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    isNavOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
