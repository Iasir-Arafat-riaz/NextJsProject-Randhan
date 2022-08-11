import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import navLogo from "../styles/images/logo-1.png";
import { useRouter } from "next/router";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };
  return (
    <div>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <Image onClick={goHome} src={navLogo}></Image>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/recentStories">RecentStories</Link>
            </li>
            <li>
              <Link href="/sustainability">Sustainability</Link>
            </li>
            <li>
              <Link href="/career">Career</Link>
            </li>

            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            {/* <div className="main-header__right__call-icon">
                <span className="icon-phone-ringing">
                <FaYoutubeSquare className="youtube" />
                </span>
              </div> */}
            <li>
              <h6>Have waste pickup?</h6>
              <h6>+ 1- (246) 333-0088</h6>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
