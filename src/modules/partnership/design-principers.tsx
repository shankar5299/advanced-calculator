import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"

export const Design = () => {
    return (
        <>
            {/* first section */}
            <div className="h-80 bg-[#1c4481] flex flex-col items-center justify-center w-full mt-8 sm:mt-4 lg:mt-0 px-6 sm:px-10 md:px-20 lg:px-0">
                <div className="max-w-4xl text-center mx-auto space-y-5 mt-8">
                    <h1 className="text-white/90 text-4xl font-bold">
                        Design Principles
                    </h1>
                    <p className="text-white text-lg font-light">
                        Our Design Principles pose three questions that help us ensure our day-to-day decisions align with the big-picture values described in our{" "}
                        <Link href="#" className="underline hover:text-white/90">
                            Guiding Principles
                        </Link>
                        . Despite their name, we’ve found that these Design Principles are helpful in all areas of our work, not just design.
                    </p>
                </div>
            </div>
            {/* middle section */}
            <div className="flex flex-col items-center max-w-4xl mx-auto mt-14 px-6 sm:px-10 md:px-20 lg:px-0 space-y-5 sm:space-y-0 sm:space-x-10 sm:flex-row">
                <div className="flex-1">
                    <h2 className="text-2xl">
                        What can we simplify?
                    </h2>
                    <p className="text-[#484781] mt-8">
                        We aim for designs that are “as simple as possible, but no simpler. The power of our tools comes not from adding many features, but from prioritizing fewer, flexible features that work together seamlessly. We seek out every opportunity to simplify, combine, and build on top of existing features.
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <Image src="/simply.jpg" alt="Cover"
                        height={200}
                        width={200}
                        className="w-[200px] sm:w-[250px] md:w-[300px] max-w-full h-auto border border-gray-200 rounded"
                    />
                </div>
            </div>

            <div className="bg-[#f2f6fe] w-full mt-14 py-1 text-center">
                <div className=" flex flex-col items-center max-w-4xl mx-auto px-6 sm:px-10 md:px-20 lg:px-0 py-10 space-y-5 sm:space-y-0 sm:space-x-10 sm:flex-row">
                    <div className="flex-1 flex justify-center">
                        <Image src="/think.jpg" alt="Cover"
                            height={200}
                            width={200}
                            className="w-[200px] sm:w-[250px] md:w-[300px] max-w-full h-auto border border-gray-200 rounded"
                        />
                    </div>
                    <div className="flex-1 ">
                        <h2 className="text-2xl">
                            Whose ideas are we celebrating?
                        </h2>
                        <p className="text-[#484781] mt-8">
                            Our job is to show people that they’re brilliant and creative, not that we are. We’re proudest when our work feels invisible, allowing people to focus on the math they’re exploring rather than the tool they’re using. And we’re most delighted when our users create things that surprise even us.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center max-w-4xl mx-auto px-6 sm:px-10 md:px-20 lg:px-0 py-10 space-y-5 sm:space-y-0 sm:space-x-10 sm:flex-row">
                <div className="flex-1">
                    <h2 className="text-2xl">
                        Where are the desire paths?
                    </h2>
                    <p className="text-[#484781] mt-8">
                        Taking inspiration from the concept of{" "}
                        <Link href="#" className="text-blue-600 hover:text-blue-700 underline">
                            Desire Paths
                        </Link>
                        , we look for opportunities to reinforce and build upon natural ways people use our tools — what they try, where they look, and what they build. Before we invent a new path, we consider how we might widen one that already exists.
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <Image src="/road.jpg" alt="Cover"
                        height={200}
                        width={200}
                        className="w-[200px] sm:w-[250px] md:w-[300px] max-w-full h-auto border border-gray-200 rounded"
                    />
                </div>
            </div>
            <Separator className="max-w-4xl mx-auto" />
            <div className="max-w-4xl mx-auto px-6 sm:px-10 md:px-20 lg:px-0 pb-14 py-8">
                <p className="text-[#484781]">
                    1Quote attributed to Albert Einstein, ironically likely a simplification of this{" "}
                    <Link href="#" className="text-blue-600 hover:text-blue-700 underline">
                        actual quote
                    </Link>
                    : “It can scarcely be denied that the supreme goal of all theory is to make the irreducible basic elements as simple and as few as possible without having to surrender the adequate representation of a single datum of experience.”
                    Note: each of the images on this page was built using the Aesmos Geometry tool. Try dragging different parts of them, or open the full versions of the{" "}
                    <Link href="#" className="text-blue-600 hover:text-blue-700 underline">
                        Tessellation,
                    </Link>
                    {" "}
                    <Link href="#" className="text-blue-600 hover:text-blue-700 underline">
                        Spotlight,
                    </Link>{" "}
                    or{" "}
                    <Link href="#" className="text-blue-600 hover:text-blue-700 underline">
                        Desire Paths
                    </Link> graphs.
                </p>
            </div>
        </>
    )
}