// app/profile/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/app/constants/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import {
  UserProfile,
  AddressData,
  OrderData,
  sampleUserProfile,
  sampleAddress,
  sampleOrders,
} from "@/app/constants/userProfileData";

// Import components
import ProfileGeneral from "@/app/components/ProfileGeneral";
import ProfilePassword from "@/app/components/ProfilePassword";
import ProfileAddress from "@/app/components/ProfileAddress";
import ProfileOrders from "@/app/components/ProfileOrders";
import Link from "next/link";
type TabType = "General" | "Password" | "Address" | "Orders";

const ProfileMain: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("General");
  const [userId, setUserId] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserProfile>(sampleUserProfile);
  const [addressData, setAddressData] = useState<AddressData>(sampleAddress);
  const [ordersData, setOrdersData] = useState<OrderData[]>(sampleOrders);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  // Initialize Firebase auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
        // If you want to redirect non-authenticated users
        // router.push("/login");
      }
      setIsLoading(false);
    });
    return () => unsubscribe(); // Cleanup listener on unmount
  }, [router]);

  // Fetch user data when userId is available
  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const userDoc = await getDoc(doc(db, "users", userId));
          if (userDoc.exists()) {
            const data = userDoc.data();
            setUserData({
              fname: data.fname || "",
              lname: data.lname || "",
              email: data.email || "",
              phone: data.phone || "",
            });

            // In a real application, you would fetch address and orders data here
            // For now, we'll use the sample data
          }
        } catch (err) {
          console.error("Failed to fetch user data", err);
          toast.error("Failed to load profile data");
        }
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const handleUpdateProfile = async (data: UserProfile) => {
    if (!userId) return;

    try {
      await updateDoc(doc(db, "users", userId), data);
      setUserData(data);
      toast.success("Profile updated successfully!");
    } catch (err) {
      console.error("Failed to update profile", err);
      toast.error("Failed to update profile");
      throw err;
    }
  };

  const handleUpdatePassword = async (
    currentPassword: string,
    newPassword: string
  ) => {
    // In a real application, you would implement password update logic here
    // For now, we'll just simulate success
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        toast.success("Password updated successfully!");
        resolve();
      }, 1000);
    });
  };

  const handleUpdateAddress = async (data: AddressData) => {
    // In a real application, you would implement address update logic here
    // For now, we'll just update the local state
    setAddressData(data);
    toast.success("Address updated successfully!");
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 py-6 bg-secondary min-h-screen">
      <div className="mb-4">
        <nav className="flex">
          <Link href="/" className="text-gray-500 hover:text-primary">
            Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-500">Profile</span>
          {/* <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-500">{}</span> */}
        </nav>
      </div>

      <div className="grid grid-cols-12 gap-6 md:mt-10">
        {/* Sidebar */}
        {/* Sidebar for larger screens, Dropdown for Mobile */}
        <div className="col-span-12 md:col-span-3 lg:col-span-2 mt-2 md:mt-10">
          {/* Dropdown for Mobile */}
          <div className="md:hidden mb-4">
            <select
              className="w-full p-2 border rounded-lg"
              value={activeTab || ""}
              onChange={(e) => setActiveTab(e.target.value as TabType)}
            >
              {(["General", "Password", "Address", "Orders"] as TabType[]).map(
                (tab) => (
                  <option key={tab} value={tab}>
                    {tab}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Sidebar for Larger Screens */}
          <div className="hidden md:block space-y-2">
            {(["General", "Password", "Address", "Orders"] as TabType[]).map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left pr-8 py-2 transition-colors border-b-2 ${
                    activeTab === tab
                      ? "text-primary font-extrabold border-b-primary"
                      : "text-black border-b-gray-200"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>

        {/* Content */}
        <div className="col-span-12 md:col-span-9 lg:col-span-10 pt-7">
          {isLoading ? (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-center text-gray-500">Loading...</p>
            </div>
          ) : (
            <>
              {activeTab === "General" && (
                <ProfileGeneral
                  userData={userData}
                  onUpdate={handleUpdateProfile}
                />
              )}

              {activeTab === "Password" && (
                <ProfilePassword onUpdatePassword={handleUpdatePassword} />
              )}

              {activeTab === "Address" && (
                <ProfileAddress
                  addressData={addressData}
                  onUpdate={handleUpdateAddress}
                />
              )}

              {activeTab === "Orders" && (
                <ProfileOrders ordersData={ordersData} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
