"use client";

import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <header className="flex flex-row w-full items-center bg-orange-500">
            <div className="basis-1/4 flex items-center justify-start px-4 my-2">
            <Image
              src="/images/icon.png"
              alt="logo"
              width="64"
              height="64"
              className="w-16 h-16"
              priority
              />
            </div>

            <div className="basis-1/4"/>

            <nav className="basis-1/2 flex flex-row items-center justify-end px-4 gap-4">

            <Link
            href="/"
            className="my-auto p-2 hover:bg-pink rounded text-green hover:text-green-200">
            Home
            </Link>
            <Link href="/Labs" className= "p-2 hover:bg-pink rounded text-green hover:text-green-200">
            Labs
            </Link>
                        <Link href="/Login" className= "p-2 hover:bg-pink rounded text-green hover:text-green-200">
            Login
            </Link>
                        <Link href="Logout" className= "p-2 hover:bg-pink rounded text-green hover:text-green-200">
            Logout
            </Link>
            </nav>
        </header>
    )
}