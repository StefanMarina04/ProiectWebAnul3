import { Container, Card } from 'react-bootstrap';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <Container className="mt-5 d-flex justify-content-center">
            <div style={{ width: '400px' }}>
                
                <div className="text-center mb-4">
                    <Link href="/">
                        <h3>Interwar Bucharest</h3>
                    </Link>
                </div>

                <Card className="shadow-sm">
                    <Card.Body>
                        {children}
                    </Card.Body>
                </Card>

            </div>
        </Container>
    );
}