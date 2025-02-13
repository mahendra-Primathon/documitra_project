"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/assets/images/Home/Box.png";
import SignUpModal from "./SignUp";
import LoginModal from "./Login";
import UserProfileModal from "./userProfile";
import { auth, db } from "../constants/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

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
    <Link href={path} className="relative px-4 py-2 text-sm transition-colors duration-300">
      <span className={`text-gray-600 hover:text-#050505 ${isActive ? "text-#050505 font-semibold" : ""}`}>
        {title}
      </span>
      {isActive && (
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-3/4 h-0.5 bg-primary"></span>
      )}
    </Link>
  );
};

// Auth Buttons Component
const AuthButtons = ({ user, userName, onSignUpClick, onLoginClick, onSignOutClick, onProfileClick }) => (
  <div className="flex items-center gap-4">
    {user ? (
      <>
        <button
          onClick={onProfileClick}
          className="text-gray-600 px-4 py-2 text-sm"
        >
          {userName}
        </button>
        <button
          onClick={onSignOutClick}
          className="bg-primary text-white px-12 py-2 rounded-full text-sm hover:bg-blue-400 transition-colors duration-300 font-bold"
        >
          Sign Out
        </button>
      </>
    ) : (
      <>
        <button
          onClick={onLoginClick}
          className="text-gray-600 hover:text-blue-600 px-4 py-2 text-sm"
        >
          Login
        </button>
        <button
          onClick={onSignUpClick}
          className="bg-primary text-white px-12 py-2 rounded-full text-sm hover:bg-blue-400 transition-colors duration-300 font-bold"
        >
          Signup
        </button>
      </>
    )}
  </div>
);

// Mobile Menu Button Component
const MobileMenuButton = ({ isOpen, setIsOpen }) => (
  <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
    <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
    <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
    <div className="w-6 h-0.5 bg-gray-600"></div>
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
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserName(
            userData.fname && userData.lname
              ? `${userData.fname} ${userData.lname}`
              : userData.name || currentUser.email
          );
        } else {
          setUserName(currentUser.email);
        }
      } else {
        setUserName("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setUserName("");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleUpdateUserName = (updatedUserName: string) => {
    setUserName(updatedUserName);
  };

  return (
    <header className="bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center ">
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
          <MobileMenuButton isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.title} href={link.path} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">
                {link.title}
              </Link>
            ))}
            <div className="mt-4 px-3">
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
      <SignUpModal isOpen={isSignUpModalOpen} onClose={() => setIsSignUpModalOpen(false)} />
      
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
        onUpdateUserName={handleUpdateUserName} // Pass the callback function
      />
    </header>
  );
};

export default Header;