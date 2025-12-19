import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "sonner";


const RootLayout: React.FC = () => {
  return (
    <div className="w-full h-full bg-background">
      <div className="w-full h-full flex flex-col px-24">
        <Toaster position="top-right" swipeDirections={["right"]} duration={2000} className="text-accent" />
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
