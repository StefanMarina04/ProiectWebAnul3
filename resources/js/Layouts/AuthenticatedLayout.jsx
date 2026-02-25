import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from '@inertiajs/react';

export default function AuthenticatedLayout({ children }) {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="mb-4 shadow-sm">
                <Container>
                    <Navbar.Brand>Bucharest History</Navbar.Brand>
                    
                    <Nav className="me-auto">
                        <Link href="/dashboard" className="nav-link">Dashboard</Link>
                        <Link href="/forum" className="nav-link">Forum</Link>
                    </Nav>

                    <Nav>
                        <Link href="/logout" method="post" as="button" className="nav-link btn btn-link" style={{ textDecoration: 'none' }}>
                            Log Out
                        </Link>
                    </Nav>
                </Container>
            </Navbar>

            <Container>
                {children}
            </Container>
        </>
    );
}