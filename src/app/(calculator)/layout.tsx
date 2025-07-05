import { Footer } from "../../modules/calculator/ui/components/footer";
import { Navbar } from "../../modules/home/ui/components/navbar";

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
            <Footer/>
        </div>
    )
}

export default Layout
