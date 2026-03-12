import { useState } from 'react';
import { Container, Navbar, Nav, Offcanvas, Button } from 'react-bootstrap';
import { Head, Link, usePage } from '@inertiajs/react';
import styles from '../../css/welcome.module.css'; 

export default function Welcome({ auth }) {
    const { translations, locale } = usePage().props;
    
    const t = (text) => translations ? (translations[text] || text) : text;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Head title={t("Welcome to Interwar Bucharest")} />
            <Container fluid className="pt-2 pe-5 d-flex justify-content-end align-items-end">
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
                        {auth.user ? (
                            <Link href="/dashboard" className="main-menu-link">{t('Dashboard')}</Link>
                        ) : (
                            <>
                                <Link href="/login" className="main-menu-link">{t('Log in')}</Link>
                                <Link href="/register" className="main-menu-link">{t('Register')}</Link>
                            </>
                        )}
                        <Link href="/forum" className="main-menu-link">{t('Go to the Forum')}</Link>
                    </Nav>

                    <div className="mt-auto pt-4 border-top border-secondary">
                        <p className="text-muted mb-2">{t('Select Language')}:</p>
                        <div className="d-flex">
                            <Link 
                                href="/language/ro" 
                                className={`${styles['langButton']} ${styles['langButton-ro']} ${locale === 'ro' ? styles['lang-active'] : ''}`}
                                title="Română"
                            />
                            <div className="mx-2"></div>
                            <Link 
                                href="/language/en" 
                                className={`${styles['langButton']} ${styles['langButton-en']} ${locale === 'en' ? styles['lang-active'] : ''}`}
                                title="English"
                            />
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

            <Container className="mt-5 text-center">
                <h1 className="display-4" align="center">{t('Little Paris of the East')}</h1>
                <p className="lead" align="center">{t('Explore interwar Bucharest.')}</p>
            </Container>
        </>
    );
}