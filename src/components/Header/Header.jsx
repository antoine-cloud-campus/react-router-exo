import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router';
import "./header.css";
import { useMatch } from 'react-router';

const Header = () => {

    const match = useMatch('/category/:query')

    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    {match ? (<h2>Catégorie : {match.params.query}</h2>) : <h2>Welcome Home !</h2>}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/">Accueil</Nav.Link>
                            <Nav.Link as={NavLink} to="/category/vetements">Vêtements</Nav.Link>
                            <Nav.Link as={NavLink} to="/category/chaussures">Chaussures</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )
}

export default Header
