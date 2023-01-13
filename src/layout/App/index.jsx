import { Checkbox, Modal } from "@mui/material";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Logo } from "../../icons";
import { getValidationState, setOpen } from "../../store/ValidationSlice";
import Footer from "../Footer";
import Navbar from "../Navbar";

const App = ({ children }) => {
  const { open } = useSelector(getValidationState);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col relative">
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </div>
      <Modal
        keepMounted
        open={open}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClose={() => dispatch(setOpen(false))}
      >
        <div
          className=" w-4/5 grid grid-cols-1 sm:grid-cols-3"
          style={{ borderRadius: "10px" }}
        >
          <div className="bg-modal-logo-gradient rounded-tl-lg rounded-tr-lg sm:rounded-tr-none sm:rounded-bl-lg flex items-center justify-center">
            <Logo />
          </div>
          <div className="col-span-2  rounded-br-lg rounded-bl-lg sm:rounded-bl-none sm:rounded-tr-lg bg-white p-5">
            <div className="flex justify-end  px-0 sm:px-5 ">
              <MdClose
                className="cursor-pointer"
                fontSize={25}
                onClick={() => dispatch(setOpen(false))}
              />
            </div>
            <div className="p-0 sm:px-5  sm:py-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="col-span-2">
                <Input
                  lable="Full Name"
                  name="fullName"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="col-span-2">
                <Input
                  lable="Enter your Organizational Email"
                  name="fullName"
                  placeholder="Enter your email"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Input
                  lable="Phone Number"
                  name="fullName"
                  placeholder="Enter your number"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Input
                  lable="Designation"
                  name="fullName"
                  placeholder="Enter your designation"
                />
              </div>
              <div className="col-span-2 py-2">
                <div className="flex items-start">
                  <Checkbox
                    style={{ padding: "0px" }}
                    sx={{
                      color: "lightgray",
                      "&.Mui-checked": {
                        color: "#4D027C",
                      },
                    }}
                  />
                  <div className="text-dark-opacity text-sm">
                    I hereby authorize and provide consent to VegaPay to contact
                    me via. Email, SMS or a Phone Call.
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <Button
                  text="submit"
                  classNames="bg-[#4D027C] text-white w-full flex justify-center py-3 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default App;
