import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const company = [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Design Principles", href: "/design" },
];

const products = [
    { label: "Four-Function Calculator", href: "/fourfunction" },
    { label: "Matrix Calculator", href: "/matrix" },
    { label: "Scientific Calculator", href: "/scientific" },
];

const resources = [
    { label: "Help Center", href: "/help" },
    { label: "Aesmos For Work", href: "/for-work" },
    { label: "Education Partnerships", href: "/education" },
];

export const HomePage = () => {
    return (
        <div className="bg-[#1d488a] flex flex-col">
            <div className="flex flex-col md:flex-row items-center justify-between px-12 py-16 md:px-24">

                {/* left side */}
                <div className="flex flex-col space-y-6 md:w-1/2">
                    <h1 className="text-white font-bold text-5xl leading-tight">
                        Beautiful free math.
                    </h1>
                    <p className="text-white text-lg">
                        At Aesmos Studio, we want to help everyone learn math, love math, and grow with math.
                    </p>
                    <Link href="/fourfunction" >
                        <Button variant="secondary" className="cursor-pointer rounded-none px-6  py-3 text-lg hover:bg-gray-100">
                            Open Math Calculator
                        </Button>
                    </Link>
                </div>

                {/* right side */}
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
                    <Image src="/fourfunc1.png" height={200} width={400} alt="Math Calcultor" className="object-contain" />
                </div>
            </div>

            {/* explore math tool section */}
            <div className="bg-white py-20">
                <div className="mx-auto w-full max-w-7xl flex flex-col items-center justify-center space-y-8">
                    <h2 className="text-3xl text-center font-bold text-accent-foreground">
                        Explore all of our math tools!
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl px-6">
                        <Link href="/fourfunction" className="flex flex-col items-center space-y-3 group">
                            <Image src="/fourfunc.jpg" alt="Fourfunction" height={120} width={120} className="rounded-lg shadow-md group-hover:scale-105 transition-transform" />
                            Four-Function
                        </Link>
                        <Link href="/matrix" className="flex flex-col items-center space-y-3 group">
                            <Image src="/matrix.jpg" alt="Matrix" height={120} width={120} className="rounded-lg shadow-md group-hover:scale-105 transition-transform" />
                            Matrix
                        </Link>
                        <Link href="/scientific" className="flex flex-col items-center space-y-3 group">
                            <Image src="/scientific.jpg" alt="Scientific" height={120} width={120} className="rounded-lg shadow-md group-hover:scale-105 transition-transform" />
                            Scientific
                        </Link>
                    </div>
                </div>


                {/* classroom section */}
                <div className="bg-[#f9fbff] py-5 mt-8 p-4">
                    <div className="flex flex-col items-center justify-center space-y-8 mx-auto max-w-7xl">
                        <div className="flex flex-col md:w-1/2 space-y-6 mt-4">
                            <h2 className="text-3xl text-center ">
                                Looking for Aesmos Classroom?
                            </h2>
                            <p className="text-center text-primary">
                                Desmos Classroom, which is now a part of Amplify, is a learning and teaching platform with hundreds of free, interactive K–12 lessons!
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full  max-w-5xl px-6 ">
                            <div className="flex flex-col md:flex-row items-center p-6 border rounded-lg shadow bg-white">
                                <Image src="/teacher.jpg" alt="Men" height={140} width={140} className="object-contain" />
                                <div className="flex flex-col space-y-1 text-center lg:text-left">
                                    <h3 className="text-xl font-semibold text-gray-800">Teachers</h3>
                                    <p className="text-gray-600">
                                        Find interactive and creative lessons for your class, or build your own.
                                    </p>
                                    <Link href="/" className="underline text-blue-600">
                                        Teacher home
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center p-6 border rounded-lg shadow bg-white">
                                <Image src="/student.jpg" alt="Men" height={140} width={140} className="object-contain" />
                                <div className="flex flex-col space-y-1 text-center md:text-left">
                                    <h3 className="text-xl font-semibold text-gray-800 ">Students</h3>
                                    <p className="text-gray-600">
                                        Enter a classcode to join your classmates!
                                    </p>
                                    <Link href="/" className=" underline text-blue-600">
                                        Student home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* link section */}

                {/* Full-width background */}
                <div className="w-full mt-6">
                    {/* Centered content */}
                    <div className="max-w-5xl mx-auto flex flex-row items-start gap-24 px-6">
                        {/* Brand block */}
                        <div className="hidden lg:flex flex-col mt-10">
                            <h2 className="text-gray-500 text-3xl">Aesmos</h2>
                            <span className="text-gray-500 px-7">studio PBC</span>
                        </div>

                        {/* Navigation links block */}
                        <div className="grid grid-cols-3 gap-2 md:gap-16">
                            {/* Company */}
                            <div className="flex flex-col space-y-2">
                                <h3 className="uppercase font-semibold text-gray-500">Company</h3>
                                {company.map((item) => (
                                    <Link key={item.href} href={item.href} className="text-blue-600 hover:underline">
                                        {item.label}
                                    </Link>
                                ))}
                            </div>

                            {/* Products */}
                            <div className="flex flex-col space-y-2">
                                <h3 className="uppercase font-semibold text-gray-500">Products</h3>
                                {products.map((item) => (
                                    <Link key={item.href} href={item.href} className="text-blue-600 hover:underline">
                                        {item.label}
                                    </Link>
                                ))}
                            </div>

                            {/* Resources */}
                            <div className="flex flex-col space-y-2">
                                <h3 className="uppercase font-semibold text-gray-500">Resources</h3>
                                {resources.map((item) => (
                                    <Link key={item.href} href={item.href} className="text-blue-600 hover:underline">
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
} 