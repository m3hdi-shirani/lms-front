import Image from "next/image";
import { Button } from "../ui/button";
import TopNavigation from "./TopNavigation";

const Header = () => {
  return (
    <header className="border-b dark:border-base-content/5">
      <div className="container flex justify-between items-center h-full">
        <Image src={"/images/logo-d.png"} width={100} height={36} alt="logo" />
        <TopNavigation />
        <span className="mr-auto">
          <Button variant="primary" isOutline>
            ورود | ثبت نام
          </Button>
        </span>
      </div>
    </header>
  );
};

export default Header;
