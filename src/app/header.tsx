import BlackLogo from "@/svg/logo/blackLogo";
import Link from "next/link";

const Header = (): JSX.Element => {
  return (
    <header className="flex items-center h-16 px-5 xl:px-80 lg:px-48 fixed top-0 border-b w-full bg-white">
      <Link href="/">
        <BlackLogo />
      </Link>
    </header>
  );
};

export default Header;
