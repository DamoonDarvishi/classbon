import Image from "next/image"
import { TopNavigation } from "./top-navigation"

export const Header: React.FC = () => {
  return (
    <header className="border-b dark:border-base-content dark:border-opacity-5">
      <div className="container h-[80px] flex items-center justify-between">
        <Image
          src="/images/Udemy_logo.svg.png"
          width={100}
          height={36}
          alt="udemy"
        />
        <TopNavigation />
        <span className="mr-auto">User Atentication</span>
      </div>
    </header>
  )
}