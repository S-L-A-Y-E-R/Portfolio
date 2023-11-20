"use client";

import { LuMenu } from "react-icons/lu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navlinks } from "./navlinks";
import Link from "next/link";

export default function DropMenu({ className }: { className?: string }) {
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <LuMenu className="w-8 h-8" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {navlinks.map((navlink) => (
            <DropdownMenuItem key={navlink.href}>
              <Link href={navlink.href}>{navlink.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
