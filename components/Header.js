import Image from "next/image";
import React from "react";
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);

  const email = session?.user.email;

  const asuCheck = ["@asu.edu"];

  const domain = email?.substring(email?.lastIndexOf("@"));

  return (
    // No className = 'header' required here as CSS part is handled inside the index.tsx file itself
    <div className="shadow-sm border-b bg-theme-maroon sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* <div className="relative w-16 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
          src="/devil_logo.svg"
          alt="ASU Logo"
          layout="fill"
          objectFit="contain"
          />
        </div> */}

        {/* Left Section --> Icons */}
        <div className="flex items-center justify-end space-x-4 pl-5">
          {session && (
            <>
              <img
                onClick={signOut}
                src={session?.user?.image}
                alt="profile pic"
                className="h-10 w-10 rounded-full cursor-pointer border border-gold p-1 mr-2"
              />
            </>
          )}
          {domain == asuCheck && (
            <>
              <button className="text-theme-maroon border border-white p-1 rounded-md bg-white hover:scale-105 transition-all duration-150 ease-out">
                Hello, Student
              </button>
            </>
          )}
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />
          <Bars3Icon className="h-6 md:hidden cursor-pointer text-red-900" />
          {session ? (
            <>
              {domain == asuCheck ? (
                <>
                  <div className="relative navBtn">
                    <PaperAirplaneIcon className="navBtn" />
                    <div className="text-black absolute -top-2 -right-1 text-xs w-5 h-5 bg-gold rounded-full flex items-center justify-center animate-pulse">
                      3
                    </div>
                  </div>
                  <PlusCircleIcon
                    onClick={() => setOpen(true)}
                    className="navBtn"
                  />
                  <UserGroupIcon className="navBtn" />
                  <HeartIcon className="navBtn" />
                </>
              ) : (
                <button className="text-theme-maroon border border-white p-1 rounded-md bg-white hover:scale-105 transition-all duration-150 ease-out">
                  Hello, Guest
                </button>
              )}
            </>
          ) : (
            <button
              onClick={signIn}
              className="text-theme-maroon border border-white p-1 rounded-md bg-white hover:scale-105 transition-all duration-150 ease-out"
            >
              Sign In
            </button>
          )}
        </div>

        {/* Middle Section --> Search Input*/}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-theme-maroon" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-theme-light focus:ring-gray focus:border-gray rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right Section --> Logo */}
        <div
          onClick={() => router.push("/")}
          className="relative lg:inline-grid w-32 cursor-pointer hover:animate-spin transition-all duration-200 ease-out"
        >
          <Image
            src="/social-freebsd-devil-1.svg"
            alt="ASU Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
