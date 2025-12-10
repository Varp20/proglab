"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import LoginModal from "./UI/modals/login.modal";
import RegistrationModal from "./UI/modals/registration.modal";
import { signOutFunc } from "@/actions/sign-out";

export const Logo = () => {
  return (
    <Image src= "/images/logotree.png" alt="Tree" width={48} height={48}
    className = "rounded-full border-2 mr-3 border-green-600" />
  );
};

export default function Header () {
      const handleSignOut = async () => {
        try {
        await signOutFunc();
      } catch (error) {
        console.error("error",)
      }
      }

    const navItems= [
        {href: "/", label:"Recipes"},
        {href: "/ingredients", label:"Ingredients"},
        {href: "/about", label:"About us"}
    ]

    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)
    const [isLoginOpen, setIsLoginOpen] = useState(false)
      return (
    <Navbar className= "bg-yellow-300 border-blue-500 border-b-2">
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-black">WiseTree</p>
      </NavbarBrand>

<NavbarContent className="hidden sm:flex gap-4" justify="center">
    
    {navItems.map((item) => (
        <NavbarItem key={item.href}>
            <Link color="foreground" href={item.href}>
                {item.label}
            </Link>
        </NavbarItem>
    ))}
</NavbarContent>
<NavbarContent justify="end">
<NavbarItem className="hidden lg:flex">
  <Button as={Link} onPress={() => setIsLoginOpen(true)} className="bg-red-800 hover:bg-red-500 hover:text-green-200">
    LogIn
  </Button>
</NavbarItem>
<NavbarItem>
  <Button as={Link} onPress={() => setIsRegistrationOpen(true)} className="bg-red-800 hover:bg-red-500 hover:text-green-200">
    Sign Up
  </Button>
</NavbarItem>

<NavbarItem>
  <Button 
    as={Link}
    href="#"
    variant="flat"
    onPress={handleSignOut}
    className="bg-red-800 hover:bg-red-500 hover:text-green-200"
  >
    Exit
  </Button>
</NavbarItem>

</NavbarContent>

    <RegistrationModal isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} />
    <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        
    </Navbar>

  );
}

