"use client";
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils"
import { AuthdialogSignin } from "@/modules/auth/ui/components/authdialog-signin";
import { AuthdialogSignup } from "@/modules/auth/ui/components/authdialog-signup";
import { Languages, Printer } from "lucide-react"
import { Poppins } from "next/font/google"
import Link from "next/link"
import { useState } from "react";
import { NavbarItems } from "./navbar-item";


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500"]
})

export const Navbar = () => {
    const [dialogSignupOpen, setDialogSignupOpen] = useState(false);
    const [dialogSigninOpen, setDialogSigninOpen] = useState(false);

    const { data: session } = authClient.useSession();

    const [languagemenuopen, setLanguageMenuOpen] = useState(false);
    const [currentlang, setCurrentLang] = useState("EN");

    const handlanguageChane = (lang: string) => {
        setCurrentLang(currentlang);
        setCurrentLang(lang);
        setLanguageMenuOpen(false);
    }

    return (
        <nav className="h-13 flex justify-between items-center gap-8 bg-[#edf0f1] font-medium fixed top-0 left-0 right-0 z-50 px-4 shadow-sm">
            <Link href="/" className=" flex items-center ">
                <span className={cn("text-gray-400 text-2xl font-semibold", poppins.className)}>Aesmos</span>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
                <NavbarItems /> {/* <-- your Math Tools dropdown */}
            </div>

            <div className="flex gap-4 items-center">
                <AuthdialogSignin open={dialogSigninOpen} onOpenChange={setDialogSigninOpen} />
                <AuthdialogSignup open={dialogSignupOpen} onOpenChange={setDialogSignupOpen} />

                {session?.user?.name ? (
                    <Button onClick={() => authClient.signOut()} variant="secondary" className="rounded border border-gray-300 h-10 bg-transparent hover:bg-gray-300">
                        Sign Out
                    </Button>
                ) : (
                    <>
                        <Button onClick={() => setDialogSigninOpen(true)} variant="secondary" className="rounded border border-gray-300 h-10 bg-transparent hover:bg-gray-300">
                            Log in
                        </Button>
                        <Button onClick={() => setDialogSignupOpen(true)} className="rounded border h-10 bg-blue-600 hover:bg-blue-700">
                            Sign Up
                        </Button>
                    </>
                )}
                <div className="flex items-center gap-4 p-2 cursor-pointer rounded">
                    <div className="relative">
                        <span onClick={() => setLanguageMenuOpen(!languagemenuopen)}>
                            <Languages className="size-4 text-gray-500 hover:text-black cursor-pointer" />
                        </span>

                        {languagemenuopen && (
                            <div className="absolute right-0 mt-2 w-28 bg-white shadow rounded p-2 text-sm">
                                <p onClick={() => handlanguageChane("EN")} className="hover:bg-gray-100 p-1 cursor-pointer">English</p>
                                <p onClick={() => handlanguageChane("HI")} className="hover:bg-gray-100 p-1 cursor-pointer">Hindi</p>
                                <p onClick={() => handlanguageChane("FR")} className="hover:bg-gray-100 p-1 cursor-pointer">French</p>
                            </div>
                        )}
                    </div>
                    <div className="hidden lg:flex">
                        <span onClick={() => window.print()}>
                            <Printer className="size-4 text-gray-500 hover:text-black" />
                        </span>
                    </div>
                </div>
            </div>
        </nav >
    )
}