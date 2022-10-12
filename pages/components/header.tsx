import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Image from "next/image"

import useAnimatedNavToggler from "../util/useAnimatedNavToggler";

import logo from "../images/logo.svg";
import MenuIcon from "feather-icons/dist/icons/menu.svg";
import CloseIcon from "feather-icons/dist/icons/x.svg";

const Head = styled.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = styled.div`flex`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = styled.a`mr-9 hover:underline underline-offset-8`;

export const PrimaryLink = styled(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer = styled.nav`flex flex-1 items-center justify-between`;
export const NavToggle = styled.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = styled.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default function Header({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }:any) {
  /*
   * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
   * This links props should be an array of "NavLinks" components which is exported from this file.
   * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
   * This allows this Header to be multi column.
   * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
   * Left part will be LogoLink, and the right part will be the the NavLinks component you
   * supplied.
   * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
   * You can also choose to directly modify the links here by not passing any links from the parent component and
   * changing the defaultLinks variable below below.
   * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
   */
  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink href="/#">About</NavLink>
      <NavLink href="/#">Blog</NavLink>
      <NavLink href="/#">Pricing</NavLink>
      <NavLink href="/#">Contact Us</NavLink>
      <NavLink href="/#">Login</NavLink>
      <PrimaryLink className={roundedHeaderButton && `rounded-full`} href="/#">Sign Up</PrimaryLink>
    </NavLinks>
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap["lg"];

  const defaultLogoLink = (
    <LogoLink>
			<Image src={logo} alt="logo" />
			Treact
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Head className={className || "header-light"}>
      <DesktopNavLinks className={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer className={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
          {links}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <Image src={CloseIcon} className="w-6 h-6" /> : <Image src={MenuIcon} className="w-6 h-6" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </Head>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: `sm:hidden`,
    desktopNavLinks: `sm:flex`,
    mobileNavLinksContainer: `sm:hidden`
  },
  md: {
    mobileNavLinks: `md:hidden`,
    desktopNavLinks: `md:flex`,
    mobileNavLinksContainer: `md:hidden`
  },
  lg: {
    mobileNavLinks: `lg:hidden`,
    desktopNavLinks: `lg:flex`,
    mobileNavLinksContainer: `lg:hidden`
  },
  xl: {
    mobileNavLinks: `lg:hidden`,
    desktopNavLinks: `lg:flex`,
    mobileNavLinksContainer: `lg:hidden`
  }
};
