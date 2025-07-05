import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="hidden lg:flex items-center justify-center gap-2 p-4 text-sm text-gray-600 relative z-20">
            <div className="flex items-center gap-2">
                <Link href="#" className="hover:underline" >
                    Terms of Service
                </Link>
                <div className="h-4 w-px bg-gray-300"></div>

                <Link href="#" className="hover:underline">
                    Privacy Policy
                </Link>
                <div className="h-4 w-px bg-gray-300"></div>

                <Link href="help" className="hover:underline">
                    Help
                </Link>
            </div>
        </footer>
    )
}