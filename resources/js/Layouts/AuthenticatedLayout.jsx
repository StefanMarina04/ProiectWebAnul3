import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, usePage } from '@inertiajs/react';
import styles from '../../css/welcome.module.css'; 

export default function AuthenticatedLayout({ children }) {
    const { auth, translations, locale } = usePage().props;
    const t = (text) => translations ? (translations[text] || text) : text;
    const user = auth.user;

    return (
        <>
            <Navbar className="mb-4 shadow-sm" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} href="/dashboard">
                        {t('Paris of the East')}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="auth-navbar-nav" />

                    <Navbar.Collapse id="auth-navbar-nav">
                        <Nav className="me-auto">
                            <Link href="/dashboard" className="nav-link">{t('Dashboard')}</Link>
                            <Link href="/forum" className="nav-link">{t('Forum')}</Link>
                            <Link href="/gallery" className="nav-link">{t('Gallery')}</Link>
                            <Link href="/shop" className="nav-link">{t('Shop')}</Link>
                            {user.role === 'admin' && (
                                <Link href="/admin" className="nav-link text-warning fw-semibold">
                                    {t('Admin')}
                                </Link>
                            )}
                        </Nav>

                        <Nav className="align-items-center">
                        <div className="d-flex justify-content-center">
                            <Link href="/language/ro" className={`${styles.langButton} ${styles['langButton-ro']} ${locale === 'ro' ? styles['lang-active'] : ''}`} />
                            <div className="mx-4"></div>
                            <Link href="/language/en" className={`${styles.langButton} ${styles['langButton-en']} ${locale === 'en' ? styles['lang-active'] : ''}`} />
                        </div>
                            <div className="me-5"></div>
                            <NavDropdown
                                title={<span className="text-white">{user.name}</span>}
                                id="user-dropdown"
                                align="end"
                            >
                                <NavDropdown.Item as={Link} href="/profile">
                                    {t('My Profile')}
                                </NavDropdown.Item>
                                {user.role === 'admin' && (
                                    <>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={Link} href="/admin">
                                            {t('Admin Panel')}
                                        </NavDropdown.Item>
                                    </>
                                )}
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    as={Link}
                                    href="/logout"
                                    method="post"
                                    className="text-danger"
                                >
                                    {t('Log Out')}
                                </NavDropdown.Item>
                            </NavDropdown>
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
