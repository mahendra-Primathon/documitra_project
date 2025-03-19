"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileMain from "../components/ProfileMain";
import { auth } from "../constants/firebase";

const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        toast.error("Please login first!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        router.push("/login"); // Redirect to login page
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, [router]);

  // Prevent rendering if user is not yet checked
  if (!user) return null;

  return (
    <div className="bg-secondary">
      <Header />
      <div>
        <ProfileMain />
      </div>
      <Footer />
    </div>
  );
};

export default UserProfilePage;
