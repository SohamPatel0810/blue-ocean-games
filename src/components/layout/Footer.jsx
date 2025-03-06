import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";

const FooterSection = () => {
  return (
    <footer className="w-full bg-black text-white border-t-2 border-gray-500">
      <div className="mx-auto max-w-container">
        <Footer className="bg-black text-white px-12 flex flex-col justify-space-between">
          <FooterContent className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 h-[300px]">
            <FooterColumn className="col-span-2 sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/logo.png"
                  className="w-[200px] h-[100px] object-cover"
                />
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Product</h3>
              <a href="/" className="text-sm text-gray-500 cursor-pointer">
                Documentation
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Company</h3>
              <a href="/" className="text-sm text-gray-500 cursor-pointer">
                About
              </a>
              <a href="/" className="text-sm text-gray-500 cursor-pointer">
                Blog
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Contact</h3>
              <a href="/" className="text-sm text-gray-500 cursor-pointer">
                Discord
              </a>
            </FooterColumn>
          </FooterContent>
          <FooterBottom className="w-full">
            <div>© 2025 Blue Ocean Games. All rights reserved</div>
            <div className="flex items-center gap-4">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
};

export default FooterSection;
