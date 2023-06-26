import BlackLogo from "@/svg/logo/blackLogo";
import Link from "next/link";

const Header = (): JSX.Element => {
  return (
    <header className="py-5 px-80 fixed top-0 border-b w-full">
      <Link href="/">
        <BlackLogo />
      </Link>
    </header>
  );
};

export default Header;
