import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-secondary ">
      <Header />
      <div className="flex-grow flex justify-center items-center my-40 mx-2 ">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
