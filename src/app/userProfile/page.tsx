import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import UserProfileForm from "../components/UserProfileform";
import ProfileMain from "../components/ProfileMain";


function page() {
  return (
    <div className="bg-secondary" >
        <Header/>

        {/* Content */}
        <div className="">
            {/* <UserProfileForm/> */}
            <ProfileMain/>
        </div>

        <Footer/>
      
    </div>
  );
}

export default page;
