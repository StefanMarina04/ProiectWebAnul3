import { useState, useRef } from 'react';
import { Container, Navbar, Nav, Offcanvas, Button, Row, Col } from 'react-bootstrap';
import { Head, Link, usePage } from '@inertiajs/react';
import styles from '../../css/welcome.module.css';

export default function Welcome({ auth }) {
    const { translations, locale } = usePage().props;
    
    const t = (text) => translations ? (translations[text] || text) : text;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const videoRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(true);

    const toggleVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    }

    return (
        <>
            <Head title={t("Welcome to Interwar Bucharest")} />
            <Container fluid className="pt-0 pe-5 d-flex justify-content-end align-items-end" style={{position: 'relative', zIndex: 999}}>
                <Button className={`${styles.vintageCameraButton} ${isPlaying ? styles.playingMainVideo : styles.pausedMainVideo} me-2`} variant="link" onClick={toggleVideo} 
                    aria-label={isPlaying ? t('Pause') : t('Resume')}
                    data-tooltip={isPlaying ? t('Pause') : t('Resume')}
                >
                </Button>
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

            <div className={styles.mainSection}>
                
                <video ref={videoRef} autoPlay loop muted playsInline className={styles.mainVideo}>
                    <source src="/videos/bucuresti_interbelic.webm" type="video/webm" />
                </video>

                <div className={styles.mainOverlay}></div>

                <Container className={`text-center position-relative ${styles.mainTextContainer}`}>
                    <h1 className="display-4">{t('Paris of the East')}</h1>
                    <p className="lead border-bottom border-dark pb-2 mb-5" style={{ display: 'inline-block', borderBottomWidth: '2px !important' }}>
                        {t('Explore Interwar Bucharest')}
                    </p>
                </Container>

                <div className={styles.fadeBottom}></div>
            </div>
            <Container className="pt-5 text-center">
                <p>WIP</p>
            </Container>
            <Container className="mt-5">
                <Row className="align-items-center"> 
                    
                    <Col lg={6} className={`text-lg-start text-center pe-lg-4 ${styles.columnDivider}`}>
                        <p className={styles.seePhotos}>{t('See Little Paris through the lens')}</p>
                    </Col>

                    <Col lg={6} className="text-lg-end text-center ps-lg-4 mt-4 mt-lg-0">
                        <p className={styles.takePage}>{t('Take a page out of Interwar Bucharest')}</p>
                    </Col>

                </Row>
            </Container>
        </>
    );
}