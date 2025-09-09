import React, { useEffect } from "react";
import OwnerNavbar from "../../components/owner/OwnerNavbar";
import SideBar from "../../components/owner/SideBar";
import { Outlet } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const LayOut = () => {
  const { isOwner, navigate } = useAppContext();

  useEffect(() => {
    if (!isOwner) {
      navigate("/");
    }
  }, [isOwner]);
  return (
    <div className="flex flex-col">
      <OwnerNavbar />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default LayOut;
