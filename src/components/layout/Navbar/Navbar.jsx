import { Button } from "@/components/ui/button";
import NavbarMenu from "./NavbarMenu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className="w-full flex items-center justify-between bg-[#08090B] text-white px-4 border-b-2 border-gray-900 py-2">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleLogoClick}
      >
        <img src="/assets/logo-1.jpg" className=" w-[40px] object-cover" />
        <span className="text-md font-bold">BLUE OCEAN GAMES</span>
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
