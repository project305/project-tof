import React from "react";
import { useRouter } from "next/router";
import NavigationBar from "../nav-bar";

const Header = () => {
  const router = useRouter();
  return <NavigationBar/>;
};

export default Header;
