import StandardMenuLayout from '@/Layouts/StandardMenuLayout';
import { Head, usePage } from '@inertiajs/react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import styles from '../../css/gallery.module.css';
import mainpage_styles from '../../css/welcome.module.css';

export default function Gallery() {
    const { translations, locale } = usePage().props;
    const t = (text) => translations ? (translations[text] || text) : text;


    const [showImageModal, setShowImageModal] = useState(false);
    const [lightboxImageSrc, setLightboxImageSrc] = useState("");
    const [lightboxCaption, setLightboxCaption] = useState("");
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleCloseImageModal = () => {
        setShowImageModal(false);
        setIsFullscreen(false);
    };

    const handleOpenImageModal = (src, caption) => {
        setLightboxImageSrc(src);
        setLightboxCaption(caption);
        setShowImageModal(true);
    };

    const [zoomProps, setZoomProps] = useState({
        show: false,
        x: 0,
        y: 0,
        bgPosX: '0%',
        bgPosY: '0%',
        bgSize: '0px'
    });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - left;
        const y = e.clientY - top;

        const xPercent = (x / width) * 100;
        const yPercent = (y / height) * 100;

        setZoomProps({
            show: true,
            x: x,
            y: y,
            bgPosX: `${xPercent}%`,
            bgPosY: `${yPercent}%`,
            bgSize: `${width * 2}px ${height * 2}px`
        });
    };

    const [isMagnifierEnabled, setIsMagnifierEnabled] = useState(true);


    const galleryImages = [
        { src: '/images/photos/Calea-victoriei-aglomeratie.jpg', alt: t('Calea Victoriei') },
        { src: '/images/photos/ateneul.webp', alt: t('Romanian Athenaeum') },
        { src: '/images/photos/athenee-palace-old.webp', alt: t('Athénée Palace Hotel') },
        { src: '/images/photos/Bd_Academiei.jpg', alt: t('Bulevardul Academiei (University of Bucharest)') },
        { src: '/images/photos/facultatea-de-arhitectura.jpg', alt: t('Ion Mincu Faculty of Architecture') },
        { src: '/images/photos/fundatiunea_carol_I.webp', alt: t('Carol I University Foundation') },
        { src: '/images/photos/cec.webp', alt: t('CEC Palace') },
        { src: '/images/photos/jockey_club.webp', alt: t('Jockey Club') },
        { src: '/images/photos/lipscani_la_lupoaica.jpg', alt: t('Lipscani street and the Wolf statue') },
    ];

    const colorImages = [
        { src: '/images/photos/culoare1.jpg', alt: t('Tram near an intersection') },
        { src: '/images/photos/culoare2.jpg', alt: t('Palace of the Arts') },
        { src: '/images/photos/culoare3.jpg', alt: t('Near CEC Palace') },
        { src: '/images/photos/culoare4.jpg', alt: t('The Fire Tower') },
        { src: '/images/photos/culoare5.jpg', alt: t('Hotel de France / Hotel Lafayette') },
        { src: '/images/photos/culoare6.jpg', alt: t('The Old National Theatre') },
        { src: '/images/photos/culoare7.jpg', alt: t('Calea Victoriei near the National Theatre') },
        { src: '/images/photos/culoare8.jpg', alt: t('Ion I.C Brătianu Blvd. vis-a-vis Scala Cinema') },
        { src: '/images/photos/culoare9.jpg', alt: t('Calea Victoriei near Capșa Hotel') },
    ];

    return (
        <StandardMenuLayout>
            <Head title={t('Gallery')} />

            <Container className="pt-5 mt-5 text-center">
                <h1 className="display-4" style={{ fontFamily: 'var(--font-title)' }}>
                    {t('The Gallery')}
                </h1>
                <div className="lead mb-0 pt-1" style={{ opacity: '0.8', fontStyle: 'italic' }}>
                    {t('Still looking for more pictures of Interwar Bucharest?')}
                </div>
                <div className="lead mb-1 pt-0" style={{ opacity: '0.8', fontStyle: 'italic' }}>{t('See it here!')}</div>
                <div className="ps-2 pe-2 d-flex" style={{ borderBottom: '1px solid var(--interwar-ink)', marginTop: '1rem' }}></div>
            </Container>

            <Container className="py-5">
                <Row className="g-4">
                    {galleryImages.map((image, index) => (
                        <Col key={index} xs={12} md={6} lg={4}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className={styles.vintageImage}
                                    loading="lazy"
                                    onClick={() => handleOpenImageModal(image.src, image.alt)}
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container className="pt-2 text-center">

                <p className="display-6 justify-content-center text-center">{t('See Little Paris in colour')}</p>
                <div className="ps-2 pe-2 d-flex" style={{ borderBottom: '1px solid var(--interwar-ink)', marginTop: '1rem' }}></div>
            </Container>
            <Container className="py-5">
                <Row className="g-4">
                    {colorImages.map((image, index) => (
                        <Col key={index} xs={12} md={6} lg={4}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className={styles.vintageImage}
                                    loading="lazy"
                                    onClick={() => handleOpenImageModal(image.src, image.alt)}
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Modal
                show={showImageModal}
                onHide={handleCloseImageModal}
                size="xl"
                centered
                contentClassName={mainpage_styles.vintageModal}
            >
                <Modal.Header closeButton style={{ borderBottom: '2px solid var(--interwar-ink)' }}>
                    <Modal.Title className={mainpage_styles.vintageModalTitle}>
                        {lightboxCaption}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={`d-flex justify-content-center align-items-center ${mainpage_styles.vintageImageModal}`}>
                    {lightboxImageSrc && (
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <img
                                src={lightboxImageSrc}
                                alt={lightboxCaption}
                                className={mainpage_styles.vintageLightboxImage}
                            />

                            <Button
                                variant="dark"
                                size="sm"
                                onClick={() => setIsFullscreen(true)}
                                className={mainpage_styles.fullscreenButton}
                                title={t("View Fullscreen")}
                            >
                                ⛶
                            </Button>
                        </div>
                    )}
                </Modal.Body>
            </Modal>

            {isFullscreen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.33)',
                    zIndex: 105000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Button
                        variant="link"
                        onClick={() => setIsFullscreen(false)}
                        className={mainpage_styles.fullscreenCloseButton}
                    >
                        ✕
                    </Button>

                    {isFullscreen && (
                        <div style={{
                            position: 'fixed',
                            top: 0, left: 0, width: '100vw', height: '100vh',
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            zIndex: 105000, display: 'flex', justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Button
                                variant="link"
                                onClick={() => setIsFullscreen(false)}
                                style={{ position: 'absolute', top: '20px', right: '30px', color: 'var(--interwar-paper)', fontSize: '2rem', textDecoration: 'none', zIndex: 105001 }}
                            >
                                ✕
                            </Button>

                            <Button
                                variant="link"
                                className={`${mainpage_styles.vintageMagnifierButton} ${isMagnifierEnabled ? mainpage_styles.magnifierOn : mainpage_styles.magnifierOff}`}
                                onClick={() => setIsMagnifierEnabled(!isMagnifierEnabled)}
                                aria-label={isMagnifierEnabled ? t('Disable Magnifier') : t('Enable Magnifier')}
                                data-tooltip={isMagnifierEnabled ? t('Disable Magnifier') : t('Enable Magnifier')}
                            >
                            </Button>

                            <div
                                style={{ position: 'relative', cursor: 'crosshair', display: 'inline-block' }}
                                onMouseMove={handleMouseMove}
                                onMouseEnter={() => setZoomProps(prev => ({ ...prev, show: true }))}
                                onMouseLeave={() => setZoomProps(prev => ({ ...prev, show: false }))}
                            >
                                <img
                                    src={lightboxImageSrc}
                                    alt={lightboxCaption}
                                    style={{ maxWidth: '95vw', maxHeight: '95vh', objectFit: 'contain', display: 'block' }}
                                />

                                {zoomProps.show && isMagnifierEnabled && (
                                    <div className={mainpage_styles.magnifierGlass}
                                        style={{
                                            left: zoomProps.x - 75,
                                            top: zoomProps.y - 75,
                                            backgroundImage: `url(${lightboxImageSrc})`,
                                            backgroundPosition: `${zoomProps.bgPosX} ${zoomProps.bgPosY}`,
                                            backgroundSize: zoomProps.bgSize,
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}

        </StandardMenuLayout>
    );
}