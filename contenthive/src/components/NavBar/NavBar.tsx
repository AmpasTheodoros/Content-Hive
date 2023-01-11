import React from "react";
import Link from "next/link";
import classes from "./Navbar.module.css";
import Image from "next/image";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <Image src="/Logo.png" width={267} height={57} alt="Logo" />
      </div>
      <div className={classes.menu}>
        <ul>
          <li>
            <Link href="/" passHref>
              HOME
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              SUPPORT US
            </Link>
          </li>
          <li>
            <Button
              variant="contained"
              href="/"
              sx={{
                color: "black",
                backgroundColor: "#F49A23",
                borderRadius: 30,
                paddingLeft: 3,
                paddingRight: 3,
                "&:hover": {
                  backgroundColor: "#475153",
                  color: "white",
                },
              }}
            >
              BUZZ ON
            </Button>
          </li>
          <li>
            <Image
              className={classes.user}
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
