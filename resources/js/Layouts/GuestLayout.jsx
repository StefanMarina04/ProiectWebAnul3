import { Container, Card, Nav } from 'react-bootstrap';
import { Link, usePage } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    // 1. Extragem datele și aici
    const { translations, locale } = usePage().props;
    const t = (text) => translations[text] || text;

    return (
        <Container className="mt-5 d-flex flex-column align-items-center">
            
            {/* Un mic selector de limbă doar pentru vizitatori */}
            <Nav className="mb-3">
                <Nav.Link as={Link} href="/language/ro" className={locale === 'ro' ? 'fw-bold text-primary' : 'text-secondary'}>🇷🇴 RO</Nav.Link>
                <Nav.Link as={Link} href="/language/en" className={locale === 'en' ? 'fw-bold text-primary' : 'text-secondary'}>🇬🇧 EN</Nav.Link>
            </Nav>

            <div style={{ width: '400px' }}>
                <div className="text-center mb-4">
                    <Link href="/">
                        {/* Traducem titlul */}
                        <h3>{t('Interwar Bucharest')}</h3>
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