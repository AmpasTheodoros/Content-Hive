import React from "react";
import Link from "next/link";
import Image from "next/image";
import BuzzButton from "components/BuzzButton";

const Navbar = (props: {
  handleOpen: (e: React.MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <nav className="fixed top-0 left-0 w-screen h-20 justify-between flex flex-row items-center bg-white z-10">
      <div className="flex items-center content-center ml-10">
        <Image src="/Logo.png" width={267} height={57} alt="Logo" />
      </div>
      <div className="mr-10">
        <ul className="flex items-center list-none m-0 p-0">
          <li className="navlink">
            <Link href="/" passHref>
              HOME
            </Link>
          </li>
          <li className="navlink">
            <Link href="/" passHref>
              SUPPORT US
            </Link>
          </li>
          <li className="navlink">
            <BuzzButton
              handleOpen={props.handleOpen}
              color={"black-orange"}
              hcolor={"orange-#475153"}
              size={"120-40-16"}
              pad={0}
            />
          </li>
          <li>
            <Image
              className="mt-4 hover:cursor-pointer"
              src="/user.png"
              width={30}
              height={42}
              alt="Logo"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
