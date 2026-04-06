import { useState, useRef } from 'react';
import { Container, Navbar, Nav, Offcanvas, Button, Row, Col, Modal, Carousel, Spinner } from 'react-bootstrap';
import { Head, Link, usePage } from '@inertiajs/react';
import styles from '../../css/welcome.module.css';

export default function Gallery({ auth }) {
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

    const [showMagazine, setShowMagazine] = useState(false);
    const [magazineSrc, setMagazineSrc] = useState("");

    const [magazineTitle, setMagazineTitle] = useState("");

    const [isLoadingMagazine, setIsLoadingMagazine] = useState(true);

    const handleCloseMagazine = () => setShowMagazine(false);
    
    const handleOpenMagazine = (src, title) => {
        setIsLoadingMagazine(true);
        setMagazineSrc(src);
        setMagazineTitle(title); 
        setShowMagazine(true);
    };

    const [showImageModal, setShowImageModal] = useState(false);
    const [lightboxImageSrc, setLightboxImageSrc] = useState("");
    const [lightboxCaption, setLightboxCaption] = useState("");

    const handleCloseImageModal = () => setShowImageModal(false);
    
    const handleOpenImageModal = (src, caption) => {
        setLightboxImageSrc(src);
        setLightboxCaption(caption);
        setShowImageModal(true);
    };

    return (
        <>
            <Container fluid className="pt-0 pe-5 d-flex justify-content-end align-items-end" style={{position: 'relative', zIndex: 999}}>
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

            <Container className="pt-5 pb-4 d-flex justify-content-center">
                <p className={`text-center ${styles.introParagraph}`}>
                    {t('WIP')} 
                </p>
            </Container>
            
            <Modal 
                show={showImageModal} 
                onHide={handleCloseImageModal} 
                size="xl" 
                centered 
                contentClassName={styles.vintageModal}
            >
                <Modal.Header closeButton style={{ borderBottom: '2px solid var(--interwar-ink)' }}>
                    <Modal.Title className={styles.vintageModalTitle}>
                        {lightboxCaption}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={`d-flex justify-content-center align-items-center ${styles.vintageImageModal}`}>
                    {lightboxImageSrc && (
                        <img 
                            src={lightboxImageSrc} 
                            alt={lightboxCaption} 
                            className={styles.vintageLightboxImage} 
                        />
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}