import Header from "./Header/Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { Container } from "react-bootstrap";

const Layout = () => {
    return (
        <>
            <Header />
            <main className="my-4">
                <Container>
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </>
    );
}
export default Layout;