import { navBarData } from "@/demo-data/nav-bar-data";
import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import companyLogo from "../assets/images/tales_of_finance_logo.png";
import Image from "next/image";
import GlobalSearch from "./global-search";

const NavigationBar = () => {
  const [show, setShow] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const offCanvasShowControler = () => {
    if (isMobile) {
      setShow(!show);
    }
  };
  const getActiveNavItem = (navItem = "Home") => {
    console.log("inside func", navItem, isMobile);
    setActiveNavItem(navItem);
    if (isMobile) {
      setShow(false);
    }
  };
  const expand = "lg";
  // const order = isMobile ? "order-first" : "order-last";
  const order = "order-last";
  console.log("show", isMobile);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <Image src={companyLogo} height={50} alt="navbar-logo"/>
          </Navbar.Brand>
          <Navbar.Toggle onClick={offCanvasShowControler} />
          <Navbar.Offcanvas
            placement="end"
            show={show}
            scroll={true}
            backdrop={true}
            onHide={offCanvasShowControler}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Image src={companyLogo} height={50} alt="offcanvas-logo"/>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="d-flex justify-content-end flex-grow-1 pe-3 gap-2">
                {navBarData.map((_nav_item) => (
                  <Button
                    variant={`${
                      activeNavItem == _nav_item
                        ? "primary"
                        : "outline-secondary"
                    } border-0`}
                    className={
                      activeNavItem == _nav_item ? "shadow" : "bg-opacity-10"
                    }
                    key={_nav_item}
                    onClick={() => getActiveNavItem(_nav_item)}
                  >
                    {_nav_item}
                  </Button>
                ))}
                <div
                  className={`d-flex justify-content-center align-items-center ${order}`}
                >
                  <GlobalSearch />
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
