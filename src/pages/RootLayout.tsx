import { useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { signout } from "../api/auth";
import { getTokenDuration } from "../util/sign/auth";

function RootLayout() {
  const token = useLoaderData();
  const expiration = localStorage.getItem("expiration");

  let logoutTimer: any;

  useEffect(() => {
    if (token && expiration) {
      const remainingTime = getTokenDuration();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      logoutTimer = setTimeout(signout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, signout, expiration]);

  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
