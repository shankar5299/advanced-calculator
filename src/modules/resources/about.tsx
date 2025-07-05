import Link from "next/link"

export const About = () => {
    return (
        <div className="flex flex-col gap-5 px-6 py-20 sm:px-10 md:px-20 lg:px-40 bg-[#ffffff]">
            <h1 className="text-3xl font-medium">About Aesmos Studio</h1>
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

            <div className="flex flex-col gap-5 mt-8">
                <h2 className="text-3xl font-medium">About Aesmos Classroom</h2>
                <p >
                    Aesmos Classroom is now part of Amplify Education!{" "}
                    <Link href="#" className="text-blue-600 underline">
                        Learn more
                    </Link>.
                </p>
                <p>
                    Aesmos Classroom invites, celebrates, and develops student brilliance through{" "}
                    <Link href="#" className="text-blue-600 underline">
                        free digital classroom activities
                    </Link>
                    , thoughtfully designed by teachers for teachers. Those activities are guided by our{" "}
                    <Link href="#" className="text-blue-600 underline">
                        pedagogical philosophy
                    </Link> and help students to explore concepts deeply, collaborate with their peers on problem-solving, and apply knowledge creatively as mathematicians.
                    </p>
                <p>
                    In 2020, we turned those experiences into{" "}
                    <Link href="#" className="text-blue-600 underline">
                        a core middle school math program
                    </Link>
                    , combining a problem-based curriculum from Illustrative Mathematics, scalable support models from Amplify, and Aesmos Classroom&apos;s intuitive technology and humanizing pedagogy.
                </p>
                <p>
                    Want to learn more? Preview{" "}
                    <Link href="#" className="text-blue-600 underline">
                        Aesmos Math 6-A1
                    </Link>
                    , join the Aesmos Educators{" "}
                    <Link href="#" className="text-blue-600 underline">
                        Facebook Community
                    </Link>
                    , or find a{" "}
                    <Link href="#" className="text-blue-600 underline">
                        career with Aesmos Classroom
                    </Link> at Amplify!
                </p>
            </div>
        </div>
    )
}