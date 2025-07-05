import { Footer } from "@/components/footer";
import { Navbar } from "../../modules/home/ui/components/navbar";
import { LinkSection } from "@/components/linksection";

interface Props {
    children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <div className="flex-1 bg-white">
            {children}
            </div>
            <LinkSection/>
            <Footer/>
        </div>
    )
}

export default Layout
