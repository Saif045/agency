"use client";
import { closeMenu, openMenu } from "@/animations/menuAnimations";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import UpArrowCircle from "../../public/icons/up-arrow-circle";
import Navigation from "./navigation";

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  useEffect(() => {
    if (menuState === true) {
      openMenu();
    } else if (menuState === false) {
      closeMenu();
    }
  });

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row v-center space-between">
            <div className="logo">
              <Link href="/">AGENCY</Link>
            </div>
            <div className="nav-toggle">
              <div
                onClick={() => setMenuState(true)}
                className="hamburger-menu">
                <span></span>
                <span></span>
              </div>
              <div
                className="hamburger-menu-close"
                onClick={() => setMenuState(false)}>
                <UpArrowCircle />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navigation menuState={menuState} setMenuState={setMenuState} />
    </>
  );
};
export default Header;
