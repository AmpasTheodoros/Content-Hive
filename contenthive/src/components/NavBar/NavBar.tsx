import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="/Logo.png" alt="Logo" />
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <Link href="/" passHref>
              Home
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              Support us
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              Buzz on
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
