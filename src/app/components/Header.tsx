"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";

import logo from "@/../public/assets/images/Home/Box.png";
import SignUpModal from "./PopUpSignUp";
import LoginModal from "./PopUpLogin";
import UserProfileModal from "./PopUpUserProfile";
import { auth, db } from "../constants/firebase";
import useClickOutside from "../hooks/useClickOutside";
import HeaderNotificationDropdown from "./HeaderNotificationDropdown";
import HeaderUserDropdown from "./HeaderUserDropdown";
import HeaderMobileMenuButton from "./HeaderMobileMenuButton";
import HeaderNavLink from "./HeaderNavLinks";
import { navLinks } from "../constants/headerData";

import "react-toastify/dist/ReactToastify.css";

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

  const handleUpdateUserName = (updatedUserName: string) => {
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
              <HeaderNavLink key={link.title} {...link} />
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <>
                <HeaderNotificationDropdown />

                <HeaderUserDropdown
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
                <HeaderNotificationDropdown />
              </>
            )}
            <HeaderMobileMenuButton
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
