import { useState } from 'react';
import { Offcanvas, Nav, Button, Container } from 'react-bootstrap';
import { Link, usePage } from '@inertiajs/react';
import styles from '../../css/welcome.module.css'; 

export default function VintageLayout({ children }) {
    const { auth, translations, locale } = usePage().props;
    const t = (text) => translations ? (translations[text] || text) : text;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container fluid className="pt-3 pe-5 d-flex justify-content-end align-items-start" style={{ position: 'absolute', top: 0, right: 0, zIndex: 1000 }}>
                <Button className={styles.menuButton} variant="link" onClick={handleShow} 
                    style={{border: 'none', padding: 0}}
                    data-tooltip={t('Open Menu')}
                    aria-label={t('Open Menu')}
                ></Button>
            </Container>

            <Offcanvas show={show} onHide={handleClose} placement="end" style={{ backgroundColor: 'var(--interwar-paper)', borderRight: '2px solid var(--interwar-ink)' }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{ fontFamily: 'var(--font-title)', fontWeight: 'bold' }}>
                        {t('Menu')}
                    </Offcanvas.Title>
                </Offcanvas.Header>
                
                <Offcanvas.Body className="d-flex flex-column">
                    <Nav className="flex-column mb-auto">
                        {auth?.user ? (
                            <Link href="/dashboard" className="main-menu-link">{t('Dashboard')}</Link>
                        ) : (
                            <>
                                <Link href="/login" className="main-menu-link">{t('Log in')}</Link>
                                <Link href="/register" className="main-menu-link">{t('Register')}</Link>
                            </>
                        )}
                        <Link href="/forum" className="main-menu-link">{t('Go to the Forum')}</Link>
                        <Link href="/gallery" className="main-menu-link">{t('Go to the Gallery')}</Link>
                        <Link href="/#home" className="main-menu-link">{t('Go to the home page')}</Link>
                    </Nav>

                    <div className="mt-auto pt-4 border-top border-secondary">
                        <p className="text-muted mb-2">{t('Select Language')}:</p>
                        <div className="d-flex">
                            <Link href="/language/ro" className={`${styles.langButton} ${styles['langButton-ro']} ${locale === 'ro' ? styles['lang-active'] : ''}`} />
                            <div className="mx-2"></div>
                            <Link href="/language/en" className={`${styles.langButton} ${styles['langButton-en']} ${locale === 'en' ? styles['lang-active'] : ''}`} />
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

            <main>
                {children}
            </main>
        </>
    );
}