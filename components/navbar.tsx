"use client";

import Link from "next/link";

import { navlinks } from "./navlinks";
import DropMenu from "./drop-menu";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b py-5">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl  text-black font-semibold hover:text-[#0984B1]"
        >
          𝓐𝓱𝓶𝓮𝓭 𝓐𝓼𝓱𝓻𝓪𝓯
        </Link>
        <ul className="gap-5 hidden md:flex">
          {navlinks.map((navlink) => (
            <li key={navlink.href}>
              <Link
                href={navlink.href}
                className={clsx(
                  "text-lg text-opacity-70 relative hover:text-[#0984B1] before:content-[''] before:underline before:absolute before:bottom-[-5px] before:left-0 before:w-full before:h-[2px] before:bg-[#0984B1] before:opacity-0 before:transition-opacity before:duration-300 before:ease-in-out hover:before:opacity-100",
                  { "text-[#0984B1]": pathname === navlink.href }
                )}
              >
                {navlink.name}
              </Link>
            </li>
          ))}
        </ul>
        <DropMenu className="block md:hidden" />
      </div>
    </nav>
  );
}
