import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <div
      className=" bg-black relative w-full h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{
        backgroundImage: 'url("/assets/hero-bg.png")',
        paddingBottom: "50px",
      }}
    >
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4">
          Where Indie Dreams
          <br />
          Set Sail
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          Support bold game ideas and join the community shaping the future of
          gaming
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[400px] bg-black border-2 border-white placeholder:text-gray-500 placeholder:italic placeholder-gray-400 focus:ring-blue-500 py-4"
          />
          <Button
            size="sm"
            className="bg-white w-24 hover:bg-white text-black rounded-lg"
          >
            Get Started
          </Button>
        </div>
        <p className="text-sm mt-6 text-gray-400">
          Enter your email to gain early access and stay updated on the latest
          from Blue Ocean Games
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
