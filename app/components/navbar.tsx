"use client";
import "../globals.css";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export default function Navbar() {
  return (
    <NavigationMenu.Root className = "bg-navy">
  <NavigationMenu.List className="poppins text-white text-xl flex flex-row mx-12 py-6 gap-16 justify-center">
    <NavigationMenu.Item>
      <NavigationMenu.Link href="../pages/dashboard">
        Home
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link href="../pages/learn">
        Learn
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link href="../pages/create">
        Create
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link href="../pages/chat">
        Seek Expert Advice
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu.Root>
  );
}
