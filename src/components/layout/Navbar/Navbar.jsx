import { Button } from "@/components/ui/button";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-between bg-[#08090B] text-white px-4 border-b-2 border-gray-900">
      <div className="flex items-center gap-2">
        <img
          src="/assets/logo.jpg"
          className="w-[100px] h-[70px] object-cover"
        />
      </div>

      <NavbarMenu />

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">Rising Tide Challenge</span>
        <Button
          size="sm"
          className="bg-white w-20 hover:bg-white text-black rounded-lg"
        >
          Join
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
