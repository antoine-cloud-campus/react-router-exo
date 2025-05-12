import Header from "./Header/Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
export default Layout;