'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link";

export const NavbarItems = () => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">Math Tools</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-2 w-48">
              <NavigationMenuLink asChild>
                <Link
                  href="/fourfunction"
                  className="w-full rounded-md px-3 py-2 text-lg hover:underline hover:bg-gray-100"
                >
                  Math calculator
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  href="/matrix"
                  className="block w-full rounded-md px-3 py-2 text-sm hover:underline hover:bg-gray-100"
                >
                  Matrix calculator
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  href="/scientific"
                  className="block w-full rounded-md px-3 py-2 text-sm hover:underline hover:bg-gray-100"
                >
                  Scientific calculator
                </Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-2 w-48">
              <NavigationMenuLink asChild>
                <Link href="/about" className="block w-full rounded-md px-3 py-2 text-sm hover:underline hover:bg-gray-100">
                  About Us
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/careers" className="block w-full rounded-md px-3 py-2 text-sm hover:underline hover:bg-gray-100">
                  Careers
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/help" className="block w-full rounded-md px-3 py-2 text-sm hover:underline hover:bg-gray-100">
                  Help center
                </Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">Partnerships</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-2 w-48">
              <NavigationMenuLink asChild>
                <Link href="/for-work" className="block w-full rounded-md px-3 py-2 text-sm hover:underline hover:bg-gray-100">
                  Aesmos For Work
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/education" className="block w-full rounded-md px-3 py-2 text-sm hover:underline hover:bg-gray-100">
                  Education PartnerShip
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/design" className="block w-full rounded-md px-3 py-2 text-sm hover:underline hover:bg-gray-100">
                  Design Principles
                </Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}