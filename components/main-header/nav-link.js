"use client";

import React from "react";

// next.js
import Link from "next/link";
import { usePathname } from "next/navigation";

// css module
import classes from "./nav-link.module.css";

function NavLink({ href, children }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={
        pathname.startsWith(href) ? `${classes.active} ${classes.link}` : ""
      }
    >
      {children}
    </Link>
  );
}

export default NavLink;
