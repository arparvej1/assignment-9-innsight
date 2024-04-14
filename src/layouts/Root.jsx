import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { ToastContainer } from "react-toastify";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Root = () => {
  const { loginCheck } = useContext(AuthContext);

  useEffect(() => {
    loginCheck();
  }, []);
  return (
    <>
      <div className="max-w-screen-xl mx-5 xl:px-5 2xl:px-0 xl:mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
};

export default Root;