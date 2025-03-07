import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section
      id="about-section"
      className="bg-black text-white px-4 md:px-8 flex flex-col items-center justify-center py-20"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className=" flex items-center justify-center gap-2 text-5xl md:text-6xl font-bold leading-tight mb-12 text-center md:text-left text-white">
          Blue{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Ocean
          </span>{" "}
          Games
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="border-2 border-white rounded-lg">
            <img
              src="/assets/img-3.jpg"
              alt="Business accounts"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          <Card className="bg-transparent border-none shadow-none mt-12">
            <CardContent className="p-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-500 leading-tight mb-6 text-center md:text-left">
                We're crafting the project
              </h1>

              {/* Paragraph Text */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
                Computers used to be magical. But much of that magic has been
                lost over time, replaced by subpar tools and practices that slow
                teams down and hold back great work. Frustrated with the status
                quo, we decided to build something better. Something that teams
                would actually enjoy using. We named it Linear to signify
                progress.
                <br />
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
