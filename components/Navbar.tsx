"use client"

import { BsFillEnvelopeFill, BsGlobeAmericas } from "react-icons/bs"

import Link from "next/link"
import Button from "./common/Button"
import SearchInput from "./SearchInput"
import UserNavigation from "./UserNavigation"

import { useSession } from "next-auth/react"

const Navbar = () => {
    const { status } = useSession();
    
    return (
      <nav className='flex gap-2 justify-between items-center px-4 py-6 border-b w-full h-16'>
        <div className="flex gap-4 md">
          <Link href="/" className="font-bold flex items-center gap-1">
            <BsGlobeAmericas />
            <h1 className="hidden md:block">Pen<span className="orange_gradient">Pal</span></h1>
          </Link>
          <SearchInput />
        </div>
        <div className="flex justify-end gap-4 items-center flex-1">
            { status === "authenticated" ? (
              <>
                <Link href={"/letters/inbox"}>
                  <BsFillEnvelopeFill />
                </Link>
                <UserNavigation />
              </>
            ) : (
              <div className="flex gap-2 items-center">
                <Link href={"/login"}>Log In</Link>
                <Link href={"/register"}>
                  <Button className="black_btn">Join</Button>
                </Link>
              </div>
            )}
        </div>
      </nav>
    )
    }

export default Navbar