import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function NavbarComponent() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const isMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 481px) and (max-width: 768px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1024px)",
  });

  const isLargeDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });

  const CollapseNavbarComponent = () => {
    return (
      <>
        {isCollapsed ? null : (
          <ul className="flex flex-col float-right w-[55%] rounded-b-xl p-4 font-semibold tracking-wide gap-y-4 text-green-700">
            <li
              className="link-btn hover:underline hover:underline-offset-2"
              onClick={() => handleReloadPage("/")}
            >
              Home
            </li>
            <li
              className="link-btn hover:underline hover:underline-offset-2"
              onClick={() => handleReloadPage("/about-us")}
            >
              About Us
            </li>
            <li
              className="link-btn hover:underline hover:underline-offset-2"
              onClick={() => handleReloadPage("/contact-us")}
            >
              Contact Us
            </li>
            <li
              className="link-btn hover:underline hover:underline-offset-2"
              onClick={() => handleReloadPage("/terms-and-conditions")}
            >
              Terms and Conditions
            </li>
            <li
              className="link-btn hover:underline hover:underline-offset-2"
              onClick={() => handleReloadPage("/privacy-policy")}
            >
              Privacy Policy
            </li>
          </ul>
        )}
      </>
    );
  };
  const ExpandNavbarComponent = () => {
    return (
      <ul className="flex text-white  tracking-wide font-normal text-[12pt]">
        <li>
          <Link
            onClick={() => handleReloadPage("/")}
            className="link-btn px-4 py-2 hover:underline hover:underline-offset-2"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleReloadPage("/about-us")}
            className="link-btn px-4 py-2 hover:underline hover:underline-offset-2"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleReloadPage("/contact-us")}
            className="link-btn px-4 py-2 hover:underline hover:underline-offset-2"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleReloadPage("/terms-and-conditions")}
            className="link-btn px-4 py-2 hover:underline hover:underline-offset-2"
          >
            Terms and Conditions
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleReloadPage("/policy-privacy")}
            className="link-btn px-4 py-2 hover:underline hover:underline-offset-2"
          >
            Policy Privacy
          </Link>
        </li>
      </ul>
    );
  };

  // Functions to handle navigation to different pages and reload the page
  function handleReloadPage(path) {
    return (window.location.href = path);
  }

  function handleExpandAndCollapseNavbar() {
    return setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="bg-green-600">
      {/* Desktop Navbar */}
      {isDesktop || isLargeDesktop ? (
        <nav className="navbar-container flex justify-around items-center p-4">
          <h1 className="text-2xl font-bold text-white">Name & Logo</h1>
          <ExpandNavbarComponent />
        </nav>
      ) : null}

      {/* Mobile Navbar with collapse button */}
      {isMobile || isTablet ? (
        <>
          <nav className="navbar-container flex justify-between p-4">
            <h1 className="text-lg font-bold text-white">Name & Logo</h1>
            <div className="expand-collapse-navbar-btn">
              {isCollapsed ? (
                <div
                  className="bar-btn"
                  onClick={handleExpandAndCollapseNavbar}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="M5 7h14M5 12h14M5 17h14"
                    />
                  </svg>
                </div>
              ) : (
                <>
                  <div
                    className="close-btn"
                    onClick={handleExpandAndCollapseNavbar}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18 17.94 6M18 18 6.06 6"
                      />
                    </svg>
                  </div>
                </>
              )}
            </div>
          </nav>
          <CollapseNavbarComponent />
        </>
      ) : null}
    </div>
  );
}

export default NavbarComponent;
