import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";


const RootLayout: React.FC = () => {
  return (
    <div className="w-full h-full bg-background">
      <div className="w-full h-full flex flex-col px-24">
        <Header />

        <main className="w-full h-full ">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
