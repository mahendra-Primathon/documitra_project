"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";

import logo from "../../../public/assets/images/Home/Box.png";
import SignUpModal from "./popUp/SignUp";
import LoginModal from "./popUp/Login";
import UserProfileModal from "./popUp/userProfile";
import { auth, db } from "../constants/firebase";
import useClickOutside from "../hooks/useClickOutside";

import "react-toastify/dist/ReactToastify.css";
import path from "path";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "Photos", path: "/photos" },
  { title: "Blog", path: "/blog" },
  { title: "FAQ's", path: "/faqs" },
  { title: "Contact", path: "/contact" },
];

const NavLink = ({ title, path }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className="relative px-4 py-2 text-sm transition-colors duration-300"
    >
      <span
        className={`text-gray-600 hover:text-primary ${
          isActive ? "text-#050505 font-semibold" : ""
        }`}
      >
        {title}
      </span>
      {isActive && (
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-3/4 h-0.5 bg-primary"></span>
      )}
    </Link>
  );
};

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
          2
        </span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
          {/* <div className="text-sm font-medium text-gray-600">Notifications</div> */}
          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Sample Notification 1</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Sample Notification 2</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const UserDropdown = ({ onProfileClick, onSignOutClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-0 w-48 bg-white shadow-xl rounded-lg p-2">
          <button
            onClick={onProfileClick}
            className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-primary  "
          >
            User Profile
          </button>
          <button
            onClick={onSignOutClick}
            className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-primary "
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

const MobileMenuButton = ({ isOpen, setIsOpen }) => (
  <button
    className="lg:hidden p-2"
    onClick={() => setIsOpen(!isOpen)}
    aria-label="Toggle mobile menu"
    aria-expanded={isOpen}
  >
    {isOpen ? (
      <div className="relative w-6 h-6">
        <div className="absolute w-6 h-0.5 bg-gray-600 transform rotate-45"></div>
        <div className="absolute w-6 h-0.5 bg-gray-600 transform -rotate-45"></div>
      </div>
    ) : (
      <>
        <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-600"></div>
      </>
    )}
  </button>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isUserProfileModalOpen, setIsUserProfileModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const mobileMenuRef = useRef(null);

  // Close mobile menu when clicking outside
  useClickOutside(mobileMenuRef, () => setIsMobileMenuOpen(false));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        let displayName = currentUser.email;

        if (userDoc.exists()) {
          const userData = userDoc.data();
          displayName =
            userData.fname && userData.lname
              ? `${userData.fname} ${userData.lname}`
              : userData.name || currentUser.email;
        }

        setUserName(displayName);
      } else {
        setUserName("");
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const hasSeenWelcomeMessage = localStorage.getItem("hasSeenWelcomeToast");
      if (!hasSeenWelcomeMessage) {
        toast.success(`Welcome to DocuMitra, ${userName}!`, {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        localStorage.setItem("hasSeenWelcomeToast", "true");
      }
    }
  }, [user, userName]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success(`${userName} successfully signed out from this device.`, {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      setUser(null);
      setUserName("");
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("Sign out failed. Please try again.", {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  const handleUpdateUserName = (updatedUserName) => {
    setUserName(updatedUserName);
  };

  if (isLoading) {
    return null; // or a loading spinner
  }

  return (
    <header className="bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="DocuMitra Logo" className="mr-2" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            {navLinks.map((link) => (
              <NavLink key={link.title} {...link} />
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <>
                <NotificationDropdown />

                <UserDropdown
                  onProfileClick={() => setIsUserProfileModalOpen(true)}
                  onSignOutClick={handleSignOut}
                />
                <div className="">{userName}</div>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="text-gray-600 hover:text-primary px-4 py-2 text-sm"
                >
                  Login
                </button>
                <button
                  onClick={() => setIsSignUpModalOpen(true)}
                  className="bg-primary text-white px-12 py-2 rounded-full text-sm hover:bg-primary transition-colors duration-300 font-bold"
                >
                  Signup
                </button>
              </>
            )}
          </div>

          {/* Mobile Icons */}
          <div className="lg:hidden flex items-center gap-4">
            {user && (
              <>
                <NotificationDropdown />
                {/* <UserDropdown
                  onProfileClick={() => setIsUserProfileModalOpen(true)}
                  onSignOutClick={handleSignOut}
                /> */}
              </>
            )}
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              setIsOpen={setIsMobileMenuOpen}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 mt-4">
          <div
            className={`fixed top-0 right-0 w-64 bg-white shadow-lg h-full p-4 ${
              pathname === "/" ? "mt-14" : "mt-0"
            }`}
            ref={mobileMenuRef} // Add a ref to the mobile menu container
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-1 text-gray-600 hover:text-primary"
              aria-label="Close mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="mt-12 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.path}
                  className="block px-2 py-1.5 text-lg font-medium text-gray-600 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <div className="bottom-0 fixed w-full my-8 ">
              {user ? (
                <>
                  <button
                    onClick={() => {
                      setIsUserProfileModalOpen(true);
                      setIsMobileMenuOpen(false); // Close menu on button click
                    }}
                    className="block w-full text-left px-4 py-2 text-md text-gray-600 hover:bg-gray-100"
                  >
                    User Profile
                  </button>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMobileMenuOpen(false); // Close menu on button click
                    }}
                    className="block w-full text-left px-4 py-2 text-md text-white rounded-full bg-primary hover:bg-gray-100"
                  >
                    Logout
                  </button>
                  <div className="mt-6"></div>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setIsLoginModalOpen(true);
                      setIsMobileMenuOpen(false); // Close menu on button click
                    }}
                    className="block w-full text-left px-4 py-2 text-md text-black  hover:bg-gray-100"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setIsSignUpModalOpen(true);
                      setIsMobileMenuOpen(false); // Close menu on button click
                    }}
                    className="block w-full text-left px-4 py-2 text-md text-white rounded-full bg-primary hover:bg-gray-100"
                  >
                    Signup
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSignUpClick={() => {
          setIsLoginModalOpen(false);
          setIsSignUpModalOpen(true);
        }}
      />
      <UserProfileModal
        isOpen={isUserProfileModalOpen}
        onClose={() => setIsUserProfileModalOpen(false)}
        onUpdateUserName={handleUpdateUserName}
      />
      <ToastContainer />
    </header>
  );
};

export default Header;
