import Image from "next/image";
import { TopNavigation } from "./top-navigation";

export const Header: React.FC = () => {
  return (
    <header
      dir="rtl"
      className="border-b dark:border-base-content dark:border-opacity-5"
    >
      <div className="container h-[80px] flex items-center justify-between">
        <TopNavigation />
        <span className="mr-auto">
          <Image
            src="/images/logo-en-light.svg"
            width={180}
            height={40}
            alt="udemy"
          />
        </span>
      </div>
    </header>
  );
};
