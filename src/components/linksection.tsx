import Link from "next/link"

export const LinkSection = () => {

const company = [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Design Principles", href: "/design" },
];

const products = [
    { label: "Four-Function Calculator", href: "/fourfunction" },
    { label: "Matrix Calculator", href: "/matrix" },
    { label: "Scientific Calculator", href: "/Scientific" },
];

const resources = [
    { label: "Help Center", href: "/help" },
    { label: "Aesmos For Work", href: "/for-work" },
    { label: "Education Partnerships", href: "/education" },
];

    return (
           <div className="bg-[#eff2f3] w-full py-10">
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
    )
}