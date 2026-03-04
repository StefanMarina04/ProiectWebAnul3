import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, usePage } from '@inertiajs/react';

export default function AuthenticatedLayout({ children }) {
    const { translations, locale } = usePage().props;
    const t = (text) => translations[text] || text;
    return (
        <>
<Navbar bg="dark" variant="dark" className="mb-4 shadow-sm" expand="lg">
                <Container>
                    {/* 3. Învelim textul în funcția t() */}
                    <Navbar.Brand>{t('Bucharest History')}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link href="/dashboard" className="nav-link">{t('Dashboard')}</Link>
                            <Link href="/forum" className="nav-link">{t('Forum')}</Link>
                        </Nav>

                        <Nav>
                            <Link href="/logout" method="post" as="button" className="nav-link btn btn-link" style={{ textDecoration: 'none' }}>
                                {t('Log Out')}
                            </Link>
                        </Nav>

                        {/* 4. AICI SUNT BUTOANELE DE SCHIMBARE A LIMBII */}
                        <Nav className="ms-auto border-start border-secondary ps-3">
                            <Nav.Link as={Link} href="/language/ro" className={locale === 'ro' ? 'fw-bold text-white' : ''}>
                                🇷🇴 RO
                            </Nav.Link>
                            <Nav.Link as={Link} href="/language/en" className={locale === 'en' ? 'fw-bold text-white' : ''}>
                                🇬🇧 EN
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            

            <Container>
                {children}
            </Container>
        </>
    );
}