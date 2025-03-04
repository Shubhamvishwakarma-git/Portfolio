"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "services",
    href: "/services",
  },
  {
    name: "resume",
    href: "/resume",
  },
  {
    name: "work",
    href: "/work",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

const Navbar = () => {
    const pathname = usePathname();
  return <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link href={link.href} key={index} className={`${link.href === pathname && "text-accent-hover border-b-2 border-accent-hover"  } capitalize font-medium hover:text-accent-hover transition-all`}>
            {link.name}
          </Link>
        );
      })}
    </nav>;
};

export default Navbar;
