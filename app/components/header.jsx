import { Purple_Purse } from "next/font/google";
import Link from "next/link";
import React from 'react';
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
    const { userId } = auth();

    return (
        <>
            <nav className="bg-purple-700 py-4 px-6 flex items-center justify-between mb-5">
                <div className="flex items-center">
                    <Link href="/">
                        <div className="text-lg uppercase font-bold text-yellow-500">
                            Umbral
                        </div>
                    </Link>
                </div>
                <div className="text-white flex items-center">
                    { !userId && (
                        <>
                            <Link href="sign-in" className="text-yellow-500 hover:text-white mr-4">
                                Sign In
                            </Link>
                            <Link href="sign-up" className="text-yellow-500 hover:text-white mr-4">
                                Sign Up
                            </Link>
                        </>
                    )}
                    { userId && (
                        <Link href="profile" className="text-yellow-500 hover:text-white mr-4">
                            Profile
                        </Link>
                    )}
                    <div className="ml-auto">
                        <UserButton afterSignOutUrl='/'/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;