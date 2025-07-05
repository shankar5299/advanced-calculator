"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator";
import { LockIcon, MessageCircle, Phone, Redo, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react"

export const ForWork = () => {
    const [input, setInput] = useState("");


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInput("");
    }
    return (
        <>
            <div className="relative bg-black flex flex-col md:flex-row items-center justify-between w-full px-6 py-16 sm:px-8 md:px-16 lg:px-32">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center font-medium shadow-xl bg-blue-700 h-20 w-[120px] rounded-md">
                    <span className="flex items-center text-white text-center mt-14 text-sm">
                        Coming soon!
                    </span>
                </div>
                <div className="flex flex-col max-w-xl gap-2 mt-16">
                    <h1 className="text-white text-3xl text-center sm:text-4xl md:text-left font-semibold">
                        Aesmos for Work
                    </h1>
                    <p className=" text-white sm:text-lg md:text-left text-center font-light">
                        We&apos;re building the calculator you&apos;ll never outgrow. Sign up to stay in the loop and get the first look at what we&apos;re putting together.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row mx-auto md:mx-0 gap-2 mt-2 max-w-sm">
                        <Input
                            type="email"
                            placeholder="Enter your email..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="border border-white text-white rounded"
                        />
                        <Button variant="secondary" type="submit" disabled={input.trim() === ""} className="bg-white text-black rounded">
                            Join the list
                        </Button>
                    </form>
                </div>
                <Image src="/fourfunc1.png" alt="Cover" height={200} width={200} className="object-cover rounded-lg mt-16" />
            </div>

            {/* features section */}
            <div className="flex items-center flex-col md:flex-row gap-6 mt-4 w-full px-6 sm:px-8 md:px-16 lg:px-32">
                <div className="flex flex-col items-center justify-center text-center gap-4">
                    <Users className="size-6 text-gray-500" />
                    <span>
                        Unlock collaboration within a team
                    </span>
                </div>

                <Separator orientation="vertical" className="hidden lg:flex size-6 py-20 border border-gray-300" />
                <div className="flex flex-col items-center justify-center text-center gap-4">
                    <LockIcon className="size-6 text-gray-500" />
                    <span>
                        Manage permissions for users and graphs
                    </span>
                </div>

                <Separator orientation="vertical" className="hidden lg:flex size-6 py-20 border border-gray-300" />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <MessageCircle className="text-gray-500 size-6" />
                    <span>
                        Get early access to new tools and features
                    </span>
                </div>
            </div>

            {/* features section2 */}
            <div className="bg-gray-100 mt-5 flex flex-col items-center justify-center space-y-4 w-full py-8 px-6 sm:px-8 md:px-16 lg:px-32">
                <div className="flex items-center justify-center gap-3">
                    <Redo className="hidden lg:flex size-8 text-gray-600" />
                    <Separator orientation="vertical" className=" hidden lg:flex py-6 border border-gray-300" />
                    <span>
                        &quot;Aesmos makes it effortless for me to create and share intuitive math demos, helping artists grasp concepts deeply and unlocking new creativity for my team.&quot;— Graphics Director
                    </span>
                </div>
                <div>
                    <div className="flex items-center justify-center gap-3">
                        <Phone className="size-8 text-gray-600 hidden lg:flex" />
                        <Separator orientation="vertical" className="hidden lg:flex py-6 border border-gray-300" />
                        <span>
                            &quot;I find myself reaching for Aesmos first versus Mathematica or Wolfram Alpha these days - there&apos;s a lot of functionality lurking under the surface and the interface is great.&quot;— Chief Technology Officer
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}