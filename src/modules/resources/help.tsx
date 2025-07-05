import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const Help = () => {
    const helpbutton = [
        "Getting Started",
        "Key Features",
        "Advanced Features",
        "Math Tools",
        "User Guides & FAQs",
        "Arts with Aesmos"
    ];
    return (
        <>
            <div className="relative h-[55vh] w-full">
                <Image src="/mathcover.jpg" fill alt="Mathcover" className="object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                    <div className="text-center space-y-6 max-w-xl w-full">
                        <h1 className="text-white text-4xl font-bold">How can we help?</h1>
                        <div className="flex items-center gap-3">
                            <div className="relative w-full">
                                <Input
                                    type="search"
                                    placeholder="Search..."
                                    className="bg-gray-200 rounded-none h-12 border border-gray-500 pl-10 shadow-xl focus:bg-white"
                                />
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-900 size-5" />
                            </div>
                            <Button variant="ghost" className="text-white hidden lg:flex h-12 font-light bg-blue-900 rounded-none hover:bg-blue-950 hover:text-white cursor-pointer">
                                Search
                            </Button>
                        </div>
                        <div className="flex items-center justify-center gap-2 flex-wrap">
                            <span className="text-white">Popular:</span>
                            <Link href="#" className="text-white font-light underline decoration-2">
                                Getting started
                            </Link>
                            <Link href="#" className="text-white font-light underline decoration-2">
                                What&apos;s New
                            </Link>
                            <Link href="#" className="text-white font-light underline decoration-2">
                                3D
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-5xl mx-auto px-4">
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 mt-8 ">
                    {helpbutton.map((item) => (
                        <Link key={item} href="#">
                            <Button variant="ghost" className="bg-blue-900 w-full h-15 rounded-none text-white font-bold hover:bg-blue-600 hover:text-white cursor-pointer">
                                {item}
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex flex-col space-y-4 px-6 py-20 sm:px-10 md:px-20 lg:px-40">
                <h2 className="font-medium text-gray-900 text-2xl">
                    Promoted Articles
                </h2>
                <div className="grid grid-cols-3 gap-4">
                    <Link href="#" className="text-blue-500 font-medium">
                        Inference
                    </Link>
                    <Link href="#" className="text-blue-500 font-medium ">
                        Probability Distributions
                    </Link>
                    <Link href="#" className="text-blue-500 font-medium">
                        Regressions
                    </Link>

                    <p className="text-sm text-muted-foreground">
                        Ready to explore your quantitative or categor...
                    </p>
                    <p className="text-sm text-muted-foreground">
                        The Graphing Calculator and Geometry Tool can v...
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Creating a regression in the Aesmos Graphing ...
                    </p>
                </div>
            </div>
        </>
    )
}