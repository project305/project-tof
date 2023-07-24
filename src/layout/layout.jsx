import React, { Suspense } from "react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const Layout = ({ children }) => {
  const pathname = usePathname();
  //   const [showHeaderFooter, setShowHeaderFooter] = useState(true);
  //   useEffect(() => {
  //     if (pathname.includes("cms-admin")) {
  //       setShowHeaderFooter(false);
  //     }
  //   }, [pathname]);

  //   console.log("Appp pathname", pathname);
  return (
    <>
      {!pathname.includes("cms-admin") && <Header />}
      <main>{children}</main>
      {!pathname.includes("cms-admin") && <Footer />}
    </>
  );
};

export default Layout;
