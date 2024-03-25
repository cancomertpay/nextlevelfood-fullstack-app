"use client";

import React from "react";
// next-link
import Link from "next/link";
// next-image
import Image from "next/image";
// assets
import logoImg from "@/assets/logo.png";
// css module
import styles from "./main-header.module.css";
import MainHeaderBackround from "./main-header-background";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

function MainHeader() {
  const pathname = usePathname();
  return (
    <>
      {/* headers background svg */}
      <MainHeaderBackround />

      {/* header elemnt group */}
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image
            src={logoImg.src}
            alt="A plate with food on it"
            width="1024"
            height="1024"
            priority
          />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Browse Media</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
