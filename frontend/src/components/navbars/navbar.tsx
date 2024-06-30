"use client";

import styles from "@/components/navbars/navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const navItems = [
    {
      name: "career",
      href: "/",
      isActive: pathname === "/",
    },
    {
      name: "portfolios",
      href: "/portfolios",
      isActive: pathname.includes("/porfolios"),
    },
    {
      name: "blogs",
      href: "/blogs",
      isActive: pathname.includes("/blogs"),
    },
  ];
  return (
    <ul className={styles.navBar}>
      {navItems.map((item) => {
        return (
          <li
            key={item.name}
            className={`${styles.navItem} ${
              item.isActive ? styles.active : ""
            }`}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
