import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="p-4 text-sm bg-[#333333] text-white">
            <div className="flex flex-col md:flex-row items-center gap-2 justify-between w-full max-w-5xl mx-auto">

                {/* contact information */}
                <div className="hidden lg:flex items-center gap-2">
                    <span className="font-semibold">Contact Us</span>
                    <Link href="#" >feedback@Aesmos.com</Link>
                </div>

                {/* term and privacy */}
                <div className="flex items-center gap-2">
                    <span className="font-semibold">Legal</span>
                    <Link href="#" >Terms of service</Link>
                    <span className="text-gray-300">|</span>
                    <Link href="#" >Privacy Policy</Link>
                </div>

                {/* copyright */}
                <div className="flex items-center">
                    Copyright © 2025 Aesmos Studio, PBC
                </div>
            </div>
        </footer>
    )
}