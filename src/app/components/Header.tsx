"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/assets/images/Home/Box.png";
import SignUpModal from "./popUp/SignUp";
import LoginModal from "./popUp/Login";
import UserProfileModal from "./popUp/userProfile";
import { auth, db } from "../constants/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Navigation links data
const navLinks = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "Photos", path: "/photos" },
  { title: "Blog", path: "/blog" },
  { title: "FAQ's", path: "/faqs" },
  { title: "Contact", path: "/contact" },
];

// Navigation Link Component
const NavLink = ({ title, path }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className="relative px-4 py-2 text-sm transition-colors duration-300"
    >
      <span
        className={`text-gray-600 hover:text-#050505 ${
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

// Auth Buttons Component
const AuthButtons = ({
  user,
  userName,
  onSignUpClick,
  onLoginClick,
  onSignOutClick,
  onProfileClick,
}) => (
  <div className="flex items-center gap-4">
    {user ? (
      <>
        <div className=" flex flex-col lg:flex-row ">
          <button
            onClick={onProfileClick}
            className="text-gray-600 mx-2 py-3 text-sm left-0 "
          >
            {userName}
          </button>
          <button
            onClick={onSignOutClick}
            className="bg-primary text-white px-12 py-2 my-2 left-0 rounded-full text-sm hover:bg-blue-400 transition-colors duration-300 font-bold"
          >
            Sign Out
          </button>
        </div>
      </>
    ) : (
      <>
        <div className=" flex flex-col lg:flex-row">
          <button
            onClick={onLoginClick}
            className="text-gray-600 hover:text-primary  px-4 py-2 text-sm"
          >
            Login
          </button>
          <button
            onClick={onSignUpClick}
            className="bg-primary text-white px-12 py-2 rounded-full text-sm hover:bg-primary transition-colors duration-300 font-bold"
          >
            Signup
          </button>
        </div>
      </>
    )}
  </div>
);

// Mobile Menu Button Component
// Mobile Menu Button Component
const MobileMenuButton = ({ isOpen, setIsOpen }) => (
  <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? (
      // Cross (X) icon when menu is open
      <div className="relative w-6 h-6">
        <div className="absolute w-6 h-0.5 bg-gray-600 transform rotate-45"></div>
        <div className="absolute w-6 h-0.5 bg-gray-600 transform -rotate-45"></div>
      </div>
    ) : (
      // Hamburger icon when menu is closed
      <>
        <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-600"></div>
      </>
    )}
  </button>
);

// Main Header Component
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isUserProfileModalOpen, setIsUserProfileModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");

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

        // Check if the welcome message was already shown
        const hasSeenWelcomeMessage = localStorage.getItem(
          "hasSeenWelcomeToast"
        );

        if (!hasSeenWelcomeMessage) {
          toast.success(`Welcome to DocuMitra, ${displayName}!`, {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });

          // Set flag in localStorage to prevent showing it again
          localStorage.setItem("hasSeenWelcomeToast", "true");
        }
        useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
              const userDoc = await getDoc(doc(db, "users", currentUser.uid));
              if (userDoc.exists()) {
                const userData = userDoc.data();
                const displayName =
                  userData.fname && userData.lname
                    ? `${userData.fname} ${userData.lname}`
                    : userData.name || currentUser.email;
                setUserName(displayName);
                toast.success(`Welcome to DocuMitras, ${displayName}!`, {
                  position: "bottom-right", // Change position here
                  autoClose: 2500, // Time before toast disappears (in ms)
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored", // Optional: Use light or dark mode
                });
              } else {
                toast.success(`Welcome to DocuMitra, ${currentUser.email}!`, {
                  position: "bottom-right", // Change position here
                  autoClose: 2500, // Time before toast disappears (in ms)
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored", // Optional: Use light or dark mode
                });
              }
            } else {
              setUserName("");
            }
          });

          return () => unsubscribe();
        }, []);
      } else {
        setUserName("");
        localStorage.removeItem("hasSeenWelcomeToast"); // Reset flag on logout
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success(`${userName} successfully signed out from this device.`, {
        position: "bottom-right", // Change position here
        autoClose: 2500, // Time before toast disappears (in ms)
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", // Optional: Use light or dark mode
      });
      setUser(null);
      setUserName("");
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("Sign out failed. Please try again.", {
        position: "bottom-right", // Change position here
        autoClose: 2500, // Time before toast disappears (in ms)
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored", // Optional: Use light or dark mode
      });
    }
  };

  const handleUpdateUserName = (updatedUserName) => {
    setUserName(updatedUserName);
  };

  return (
    <header className="bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
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

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:block">
            <AuthButtons
              user={user}
              userName={userName}
              onSignUpClick={() => setIsSignUpModalOpen(true)}
              onLoginClick={() => setIsLoginModalOpen(true)}
              onSignOutClick={handleSignOut}
              onProfileClick={() => setIsUserProfileModalOpen(true)}
            />
          </div>

          {/* Mobile Menu Button */}
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            setIsOpen={setIsMobileMenuOpen}
          />
        </div>
      </div>
      {/* Mobile Menu */}
      {/* // Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Mobile Menu Content */}
          <div className="fixed top-0 right-0 w-64 bg-white shadow-lg h-full p-4">
            {/* Close Button (Cross Icon) */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-1 text-gray-600 hover:text-primary"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Links */}
            <div className="mt-12 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.path}
                  className="block px-2 py-1.5 text-sm font-medium text-gray-600 hover:text-primary"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="mt-6">
              <AuthButtons
                user={user}
                userName={userName}
                onSignUpClick={() => setIsSignUpModalOpen(true)}
                onLoginClick={() => setIsLoginModalOpen(true)}
                onSignOutClick={handleSignOut}
                onProfileClick={() => setIsUserProfileModalOpen(true)}
              />
            </div>
          </div>
        </div>
      )}
      {/* Sign Up Modal */}
      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
      />
      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSignUpClick={() => {
          setIsLoginModalOpen(false);
          setIsSignUpModalOpen(true);
        }}
      />
      {/* User Profile Modal */}
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
