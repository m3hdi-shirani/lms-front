import Image from "next/image";
import { Button } from "../ui/button";
import TopNavigation from "./TopNavigation";

const Header = () => {
  return (
    <header className="border-b dark:border-base-content/10 z-50">
      <div className="container flex justify-between items-center h-full">
        <Image src={"/images/logo-d.png"} width={100} height={36} alt="logo" />
        <TopNavigation />
        <span className="mr-auto">
          <Button variant="neutral" className="font-medium" size="normal">
            ورود | ثبت نام
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 font-medium mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>
          </Button>
        </span>
      </div>
    </header>
  );
};

export default Header;
