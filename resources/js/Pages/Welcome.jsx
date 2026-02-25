import { Container, Button, Navbar, Nav } from 'react-bootstrap';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome to Interwar Bucharest" />
            
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
                <h1>Little Paris of the East</h1>
                <p className="lead">Explore interwar Bucharest.</p>
                {/* <Button variant="primary" size="lg">Explore the Map</Button> */}
                {/* <br></br> */}
                <Link href="/Forum" className="nav-link">Go to the Forum</Link>
            </Container>
        </>
    );
}