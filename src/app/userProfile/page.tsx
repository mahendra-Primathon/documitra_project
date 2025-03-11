import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserProfileForm from "../components/UserProfileform";


function page() {
  return (
    <div className="bg-secondary" >
        <Header/>

        {/* Content */}
        <div className=" h-[50vh] mt-12 ">
            <UserProfileForm/>
        </div>

        <Footer/>
      
    </div>
  );
}

export default page;
