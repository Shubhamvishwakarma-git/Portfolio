"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

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

const Mobilenav = () => {
  const pathname = usePathname();
  return (
    <Sheet className="flex gap-8">
      <SheetTrigger className=" flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent-hover" />
      </SheetTrigger>
      <SheetContent className=" flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className=" text-4xl font-semibold">
              Shubham<span className="text-accent-hover"> .</span>
            </h1>
          </Link>
        </div>

        {/* nav  */}
        <nav className="flex flex-col gap-8 justify-center items-center">
          {links.map((link, index) => {
            return (
              <Link
                href={link.href}
                key={index}
                className={`text-xl capitalize hover:text-accent-hover transition-all ${
                  link.href === pathname &&
                  "text-accent-hover border-b-2 border-accent-hover"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default Mobilenav;
