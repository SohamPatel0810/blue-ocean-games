import React from "react";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Book, DraftingCompass, User, Users } from "lucide-react";

const NavBarMenu = () => {
  const navigate = useNavigate();

  const handleScrollToAbout = () => {
    document
      .getElementById("about-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <a
            onClick={handleScrollToAbout}
            className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-[#121215] hover:text-white focus:bg-[#121215] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-white data-[state=open]:bg-[#121215]/50 data-[state=open]:hover:bg-[#121215] data-[state=open]:focus:bg-[#121215] bg-[#08090B] text-gray-500 cursor-pointer "
          >
            About
          </a>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <a
            href="/funding"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-[#121215] hover:text-white focus:bg-[#121215] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-white data-[state=open]:bg-[#121215]/50 data-[state=open]:hover:bg-[#121215] data-[state=open]:focus:bg-[#121215] bg-[#08090B] text-gray-500 cursor-pointer "
          >
            Funding
          </a>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="!bg-[#08090B] !text-gray-500 !hover:bg-[#121215] !hover:text-white !focus:bg-[#121215] !focus:text-white">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!bg-[#121215] !border-none p-4">
            <div className="bg-[#1E1E1E] p-4 rounded-md shadow-md !border-none">
              <ul className="w-[400px] space-y-2">
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="flex items-center gap-2 text-gray-300 cursor-pointer font-bold hover:bg-[#2A2A2A] hover:bg-opacity-60 transition-all p-2 rounded-md"
                      onClick={() => navigate("/blogs")}
                    >
                      <div className="bg-white p-2 rounded-md">
                        <Book color="black" />
                      </div>
                      Blogs
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="flex items-center gap-2 text-gray-300 cursor-pointer font-bold hover:bg-[#2A2A2A] hover:bg-opacity-60 transition-all p-2 rounded-md"
                      onClick={() => navigate("/tools")}
                    >
                      <div className="bg-white p-2 rounded-md">
                        <DraftingCompass color="black" />
                      </div>
                      Tools
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="!bg-[#08090B] !text-gray-500 !hover:bg-[#121215] !hover:text-white !focus:bg-[#121215] !focus:text-white">
            Community
          </NavigationMenuTrigger>
          <NavigationMenuContent className="left-0">
            <div className="bg-[#1E1E1E] p-4 rounded-md shadow-md !border-none">
              <ul className="w-[400px] space-y-2">
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="flex items-center gap-2 text-gray-300 cursor-pointer font-bold hover:bg-[#2A2A2A] hover:bg-opacity-60 transition-all p-2 rounded-md"
                      onClick={() => navigate("/discord")}
                    >
                      <div className="bg-white p-2 rounded-md">
                        <User color="black" />
                      </div>
                      Discord
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBarMenu;
