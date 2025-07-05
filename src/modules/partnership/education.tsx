"use client";
import { Button } from "@/components/ui/button"
import { Earth, Lock, PersonStanding, Rocket } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { DialogButton } from "./ui/components/educationdialog"

export const Education = () => {
    const [isopen , setIsOpen] = useState(false);
    return (
        <>
            <div className="flex flex-col items-center justify-center mx-auto py-20 max-w-xl px-6 text-center gap-3">
             <DialogButton open={isopen} onOpenChange={setIsOpen}/>
                {/* top section */}
                <h1 className="text-3xl text-gray-800 font-normal">
                    Want to partner with Aesmos Studio PBC?
                </h1>
                <p className="text-sm text-gray-600">
                    Partner with us to embed the power of Aesmos Tools right into your platform, website, or app! Aesmos Tools (Graphing, Scientific, Four Function, Matrix, Geometry) are available for partners with the Aesmos API.
                </p>

                <div className=" rounded flex items-center gap-6">
                    <Link href="#">
                        <Button
                            variant="outline"
                            className="text-blue-700 md:w-[15vw] border border-blue-700 hover:text-blue-800 hover:border-blue-800 hover:bg-gray-100 cursor-pointer"
                        >
                            API Docs
                        </Button>
                    </Link>

                    <Button
                        variant="secondary"
                        onClick={() => setIsOpen(true)}
                        className="bg-blue-700  md:w-[15vw] text-white hover:bg-blue-800 cursor-pointer">
                        Contact Us
                    </Button>
                </div>
            </div>
            {/* middle section */}
            <div className="w-full bg-gray-100 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto px-6">
                    <div className="flex flex-col items-center  gap-3 text-gray-800">
                        <Rocket />
                        <h2 className="text-2xl">
                            Reliability
                        </h2>
                        <p className="text-sm text-gray-600">
                            With greater than 99.99% uptime over the last 3 years, Aesmos Tools provide the reliability your app or website needs. For high-stakes applications, we offer self-hosting for even greater confidence.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-3 text-gray-800">
                        <PersonStanding />
                        <h2 className="text-2xl">
                            Accessibility
                        </h2>
                        <p className="text-sm text-gray-600">
                            Aesmos Studio PBC is committed to building accessible products. Review our WCAG 2.2{" "}
                            <Link href="#" className="text-blue-600 underline">
                                Accessibility Conformance Report
                            </Link>
                            , or learn more about our accessibility features at{" "}
                            <Link href="#" className="text-blue-600 underline">
                                www.Aesmos.com/accessibility.
                            </Link>
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-3 text-gray-800">
                        <Earth />
                        <h2 className="text-2xl">
                            Global Scale
                        </h2>
                        <p className="text-sm">
                            Our tools are used by tens of millions of people around the world (on nearly every conceivable combination of devices and browsers) and are translated into{" "}
                            <Link href="#" className="text-blue-600 underline">
                                18 languages
                            </Link>.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-3 text-gray-800">
                        <Lock />
                        <h2 className=" text-2xl">
                            Privacy
                        </h2>
                        <p className="text-sm ">
                            Our API collects no Personal Identifiable Information (PII) and requires no data passback. When you use self-hosting, we receive no data of any kind from your application.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}