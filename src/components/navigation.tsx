"use client";
import { closeMenu } from "@/animations/menuAnimations";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Navigation = ({
  menuState,
  setMenuState,
}: {
  menuState: Boolean;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuState
      ) {
        closeMenu();
        setMenuState(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuState) {
        closeMenu();
        setMenuState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [menuState, closeMenu]);
  const onNavclose = () => {
    closeMenu();
    setMenuState(false);
  };

  return (
    <nav ref={menuRef}>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <Link onClick={onNavclose} href="/case-studies">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link onClick={onNavclose} href="/approach">
                  Approach
                </Link>
              </li>
              <li>
                <Link onClick={onNavclose} href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link onClick={onNavclose} href="/about-us">
                  About us
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <Link onClick={onNavclose} href="/contact">
                    Get in hrefuch with us
                  </Link>
                </li>
                <li>
                  <Link onClick={onNavclose} href="/audit">
                    Get a free audit
                  </Link>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarter</li>
                <li>Route du Jura 49</li>
                <li>1700 Fribourg</li>
                <li>Switzerland</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+41 (0) 79 510 28 70</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacy & Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
