import Footer from "@/pages/Shared/Footer/Footer";
import Header from "@/pages/Shared/Header/Header";
import LeftSideNav from "@/pages/Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "@/pages/Shared/RightSideNav/RightSideNav";
import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="container mx-auto">
      <div className="">
        <Header />
      </div>
      <div className="flex">
        <div className="w-1/4">
            <LeftSideNav/>
        </div>
        <div className="w-2/4">
          <Outlet></Outlet>
        </div>
        <div className="w-1/4">
            <RightSideNav/>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
