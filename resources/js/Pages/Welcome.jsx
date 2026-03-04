import { Container, Navbar, Nav } from 'react-bootstrap';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome({ auth }) {
    // 1. Extragem dicționarul și limba curentă
    const { translations, locale } = usePage().props;
    
    // 2. Definim funcția de traducere (t)
    const t = (text) => translations ? (translations[text] || text) : text;

    return (
        <>
            <Head title={t("Welcome to Interwar Bucharest")} />
            
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    {/* 3. Folosim t() pentru TOATE textele */}
                    <Navbar.Brand href="#home">{t('Bucharest History')}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {auth.user ? (
                                <Link href="/dashboard" className="nav-link">{t('Dashboard')}</Link>
                            ) : (
                                <>
                                    <Link href="/login" className="nav-link">{t('Log in')}</Link>
                                    <Link href="/register" className="nav-link">{t('Register')}</Link>
                                </>
                            )}
                        </Nav>

                        {/* 4. Selectorul de limbă pe pagina principală! */}
                        <Nav className="border-start border-secondary ps-3 ms-3">
                            <Nav.Link as={Link} href="/language/ro" className={locale === 'ro' ? 'fw-bold text-white' : ''}>🇷🇴 RO</Nav.Link>
                            <Nav.Link as={Link} href="/language/en" className={locale === 'en' ? 'fw-bold text-white' : ''}>🇬🇧 EN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="mt-5 text-center">
                {/* 5. Traducem conținutul paginii */}
                <h1 className="display-4" align="center">{t('Little Paris of the East')}</h1>
                <p className="lead" align="center">{t('Explore interwar Bucharest.')}</p>
                <Link href="/forum" className="nav-link">{t('Go to the Forum')}</Link>
            </Container>
        </>
    );
}