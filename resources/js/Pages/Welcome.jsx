import { Container, Navbar, Nav } from 'react-bootstrap';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome({ auth }) {
    const { translations, locale } = usePage().props;
    
    const t = (text) => translations ? (translations[text] || text) : text;

    return (
        <>
            <Head title={t("Welcome to Interwar Bucharest")} />
            
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    
                        <Nav className="ms-auto" align="right">
                            {auth.user ? (
                                <Link href="/dashboard" className="nav-link">{t('Dashboard')}</Link>
                            ) : (
                                <>
                                    <Link href="/login" className="nav-link">{t('Log in')}</Link>
                                    <br></br>
                                    <Link href="/register" className="nav-link">{t('Register')}</Link>
                                </>
                            )}
                        </Nav>

                        <Nav className="border-start border-secondary ps-3 ms-3" align="right">
                            <Nav.Link as={Link} href="/language/ro" className={locale === 'ro' ? 'fw-bold text-white' : ''}>🇷🇴</Nav.Link>
                            <> </>
                            <Nav.Link as={Link} href="/language/en" className={locale === 'en' ? 'fw-bold text-white' : ''}>🇬🇧</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>

            <Container className="mt-5 text-center">
                <h1 className="display-4" align="center">{t('Little Paris of the East')}</h1>
                <p className="lead" align="center">{t('Explore interwar Bucharest.')}</p>
                <Link href="/forum" className="nav-link">{t('Go to the Forum')}</Link>
            </Container>
        </>
    );
}