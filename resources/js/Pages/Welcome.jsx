import { Container, Button, Navbar, Nav } from 'react-bootstrap';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome({ auth }) {
    const page = usePage();
    const translations = page.props.translations || {};
    return (
        <>
            <Head title={translations["Welcome to Interwar Bucharest"] || "Welcome to Interwar Bucharest"} />
            
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Bucharest History</Navbar.Brand>
                    <Nav className="ms-auto">
                        {auth.user ? (
                            <Link href="/dashboard" className="nav-link">Dashboard</Link>
                        ) : (
                            <>
                                <Link href="/login" className="nav-link">Log in</Link>
                                <Link href="/register" className="nav-link">Register</Link>
                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>

            <Container className="mt-5 text-center">
                <h1 className="display-4" align="center">Little Paris of the East</h1>
                <p className="lead" align="center">Explore interwar Bucharest.</p>
                <Link href="/forum" className="nav-link">Go to the Forum</Link>
            </Container>
        </>
    );
}