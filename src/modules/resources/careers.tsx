import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const Careers = () => {
    return (
        <>
            {/*  image banner */}
            <div className="relative h-[60vh] w-full">
                <Image src="/cover.png" alt="Cover" className="object-cover" fill priority />

                {/* card overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                    <div className="bg-white rounded-xl shadow-xl space-y-5 p-8 text-center max-w-xl">
                        <h1 className="text-3xl font-semibold text-gray-900">
                            Join Our Team
                        </h1>
                        <p className="text-sm text-gray-600">
                            At Aesmos, we like hard problems, which is why we&apos; ve picked one of the toughest problems in education: making challenging math engaging and accessible to everyone, everywhere. We work in the intersection of thoughtful curriculum design and cutting-edge technology, and we&apos; re hiring!
                        </p>

                        <div className="flex items-center gap-4 my-4">
                            <div className="flex-grow h-px bg-gray-300" />
                            <Link href="#">
                                <Button
                                    className="hover:bg-gray-100 rounded-none border cursor-pointer hover:border-gray-500"
                                    variant="outline"
                                >
                                    View Open Position
                                </Button>
                            </Link>
                            <div className="flex-grow h-px bg-gray-300" />
                        </div>
                    </div>
                </div>

                {/* other information */}
            </div>
            <div className="flex flex-col space-y-4 px-6 py-20 sm:px-10 md:px-20 lg:px-40 bg-[#ffffff]">
                <h2 className="text-3xl font-semibold text-gray-900">Our Story</h2>
                <p >
                    Aesmos Studio is a Public Benefit Corporation with a goal of helping everyone learn math, love math, and grow with math. We believe that everyone has an inner mathematician and that some people haven’t been given the opportunity, encouragement, or tools to discover theirs. Learn more about our{" "}
                    <Link href="#" className="text-blue-600 underline">
                        guiding principles
                    </Link>.
                </p>
                <p>
                    Our free suite of math tools, including our Graphing Calculator, is used annually by over 75 million people around the world. Those tools help people represent their ideas mathematically, connect different representations dynamically, make conjectures, and then develop entirely new ideas. They also result in some{" "}
                    <Link href="#" className="text-blue-600 underline">pretty spectacular art</Link>.
                </p>
                <p>
                    We partner with the world&apos;s most popular curricula and learning software, and with{" "}
                    <Link href="#" className="text-blue-600 underline">
                        the majority of U.S. state-level assessments and digital college entrance exams
                    </Link>.
                </p>
                <p>
                    Want to learn more?{" "}
                    <Link href="/fourfunction" className="text-blue-600 underline">
                        Play with the calculator
                    </Link>, visit the{" "}
                    <Link href="/help" className="text-blue-600 underline">
                        Help Center
                    </Link>, connect with us on{" "}
                    <Link href="#" className="text-blue-600 underline">
                        TikTok
                    </Link>, or find a{" "}
                    <Link href="#" className="text-blue-600 underline">
                        career with Aesmos Studio
                    </Link>
                    !
                </p>
                <div className="flex flex-col space-y-4 mt-8">
                    <h2 className="text-3xl font-semibold text-gray-900">Our Values</h2>
                    <p>
                        We want to live in a world where opportunity doesn’t depend on the circumstances of your birth. In particular, we want everyone everywhere to have equal access to the power and beauty of math. We understand that, presently, some populations of students are more likely than others to encounter this beauty and power. We need your help to change that.
                    </p>
                    <p>
                        Just as people need math, math needs people. The world is full of problems for which math is a part of the solution. Many of these solutions will require new ideas, and even new mathematics. The more diverse the people who identify and work on these problems, the more likely we&apos;ll be able to find solutions. At the macro level, this means supporting diverse students and teachers in learning powerful mathematics. At the micro level, it means we need a diverse set of colleagues building the tools to support those students and teachers.
                    </p>
                    <p>
                        Come build a better world with us, a world of mathematical power and joy for all. Learn more about our{" "}
                        <Link href="#" className="text-blue-600 underline">
                            guiding principles
                        </Link>
                        .
                    </p>
                    <p>
                        Aesmos is an equal opportunity employer. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status. Furthermore, we believe that diversity leads to stronger teams, better products, and more successful companies. Come join us as we tackle the hard problems we love and build an enduring company in the process.
                    </p>
                </div>
                <div className="flex flex-col mt-8 space-y-4">
                    <h2 className="text-3xl font-semibold text-gray-900">
                        The Perks
                    </h2>
                    <p>
                        We believe that great work requires a great workplace, thoughtful colleagues, a balanced life, and minimal distractions. Here is what it means to work at Aesmos.
                    </p>

                    <h3 className="text-gray-700 font-bold">
                        Great benefits.
                        <p className="text-black font-light">
                            Full medical, vision, and dental insurance. Unlimited vacation days whenever you need them.
                        </p>
                    </h3>
                    <h3 className="text-gray-700 font-bold">
                        Productive environment.
                        <p className="text-black font-light">
                            No mandatory meetings, bureaucracy, or artificial barriers. Full transparency and participation in company goals and direction.
                        </p>
                    </h3>
                    <h3 className="text-gray-700 font-bold">
                        Competitive compensation.
                        <p className="text-black font-light">
                            We offer substantial equity, competitive salary, and retirement matching to every full-time employee. We want everyone to feel both financially secure and deeply invested in the future of the company.                        </p>
                    </h3>
                    <h3 className="text-gray-700 font-bold">
                        Work-life balance.
                        <p className="text-black font-light">
                            We value results over hours and sustainable, long-term success over short-term wins.
                        </p>
                    </h3>
                </div>

                <div className="flex items-center gap-4 my-4">
                    <div className="flex-grow h-px bg-gray-300" />
                    <Link href="#">
                        <Button
                            className="hover:bg-gray-100 rounded-none border cursor-pointer hover:border-gray-500"
                            variant="outline"
                        >
                            View Open Position
                        </Button>
                    </Link>
                    <div className="flex-grow h-px bg-gray-300" />
                </div>
            </div>
        </>
    )
}