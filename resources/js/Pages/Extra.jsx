import StandardMenuLayout from '@/Layouts/StandardMenuLayout';
import { useState, useRef } from 'react';
import { Container, Navbar, Nav, Offcanvas, Button, Row, Col, Modal, Carousel, Spinner } from 'react-bootstrap';
import { Head, Link, usePage } from '@inertiajs/react';
import styles from '../../css/welcome.module.css';
import extra_styles from '../../css/extra.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Extra() {
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


    const mapPhotos = [
        { src: '/images/maps_guides/Harta1921.jpg', alt: t('Noul plan al orașului București 1921'), year: 1921 },
        { src: '/images/maps_guides/Harta1926.jpg', alt: t('Noul plan al orașului București pe anul 1926'), year: 1926 },
        { src: '/images/maps_guides/Harta1931.jpg', alt: t('Municipiul București și împrejurimile 1931'), year: 1931 },
        { src: '/images/maps_guides/Harta1931_STB.png', alt: t('Planul Municipiului București cu liniile de tramvai (STB) 1931'), year: 1931 },
        { src: '/images/maps_guides/Harta1935-1940.jpg', alt: t('Planul Municipiului București 1935'), year: 1935 },
        { src: '/images/maps_guides/Harta1939.jpg', alt: t('Planul Municipiului București 1939'), year: 1939 },
    ];


    return (
        <>
            <Head title={t('Extra content')}></Head>
            <StandardMenuLayout>
            </StandardMenuLayout>

            <Container className="text-center mt-4 pt-4">
                <br></br>
                <h1 className={`mt-3 ${extra_styles.ExtraTitle}`}>{t('Find out even more about')}</h1>
                <h1 className={`mt-0 ${extra_styles.ExtraTitle}`}>{t('Interwar Bucharest')}</h1>
                <div className="ps-5 pe-5" style={{ borderBottom: '1.5px solid var(--interwar-ink)', marginTop: '0.1rem', maxWidth: '50%', marginLeft: '25%', marginBottom: '1rem' }}></div>
            </Container>

            <Container className="mt-4 pt-4">
                <Row className="mt-4 justify-content-center">
                    <Col lg={6} className={`pe-2 ${styles.columnDivider}`}>

                        <div className={`${extra_styles.ColumnTitle} mb-0`}>{t("See Bucharest's Interwar layout through maps")}</div>
                        <div className={`${extra_styles.ColumnSubtitle} mb-3`}>{t("Winding streets, small markets, public and cultural buildings, transit routes and parks, all marked on paper")}</div>

                        <Container className="py-3">
                            <Row className="g-3">
                                {mapPhotos.map((image, index) => (
                                    <Col key={index} xs={6} md={6} lg={6}>
                                        <div className={`${extra_styles.MapYearLabel} mb-1`}>{image.year}</div>
                                        <div className={styles.imageContainer}>
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className={`img-fluid rounded ${extra_styles.vintageImageSmall}`}
                                                loading="lazy"
                                                onClick={() => handleOpenImageModal(image.src, image.alt)}
                                            />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>

                    </Col>
                    <Col lg={6} className="ps-2 pe-0">

                        <div className={`${extra_styles.ColumnTitle} mb-1`}>{t("Little Paris' public transport")}</div>
                        <div className={`${extra_styles.ColumnSubtitle} mb-1`}>{t("From horse-drawn trams to buses and electric trams")}</div>
                        <div className={`${extra_styles.RowBorder} mb-3`}></div>
                        <div className={`${extra_styles.TransportMainText} mb-1`}>{t("TransportMainText1")}</div>
                        <div className={`${extra_styles.TransportMainText} mb-1`}>{t("TransportMainText2")}</div>
                        <div className={`${extra_styles.TransportMainText} mb-1`}>{t("TransportMainText3")}</div>
                        <div className={`${extra_styles.TransportMainText} mb-1`}>{t("TransportMainText4")}</div>

                        <Carousel fade className={`${styles.vintageCarousel}`} interval={3000}>

                            <Carousel.Item>
                                <img
                                    className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                    src="/images/photos/langa_banca_nationala.webp"
                                    alt="missing_photo"
                                    onClick={() => handleOpenImageModal("/images/photos/langa_banca_nationala.webp", t('Tram next to the National Bank'))}
                                />
                                <Carousel.Caption className={styles.carouselCaption}>
                                    <h5>{t('Tram next to the National Bank')}</h5>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                    src="/images/photos/tramvai-cai-1926.webp"
                                    alt="missing_photo"
                                    onClick={() => handleOpenImageModal("/images/photos/tramvai-cai-1926.webp", t('One of the few remaining horse-drawn trams from 1926'))}
                                />
                                <Carousel.Caption className={styles.carouselCaption}>
                                    <h5>{t('Horse-drawn tram')}</h5>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                    src="/images/photos/gara-de-nord-noua.jpg"
                                    alt="missing_photo"
                                    onClick={() => handleOpenImageModal("/images/photos/gara-de-nord-noua.jpg", t('North Railway Station'))}
                                />
                                <Carousel.Caption className={styles.carouselCaption}>
                                    <h5>{t('North Railway Station')}</h5>
                                    <div>{t('As it is today')}</div>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                    src="/images/photos/vechiul-palat-regal.jpg"
                                    alt="missing_photo"
                                    onClick={() => handleOpenImageModal("/images/photos/vechiul-palat-regal.jpg", t('The Old Royal Palace'))}
                                />
                                <Carousel.Caption className={styles.carouselCaption}>
                                    <h5>{t('The Old Royal Palace')}</h5>
                                    <div>{t('Before the reconstruction')}</div>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                    src="/images/photos/palatul-regal.png"
                                    alt="missing_photo"
                                    onClick={() => handleOpenImageModal("/images/photos/palatul-regal.png", t('The Royal Palace'))}
                                />
                                <Carousel.Caption className={styles.carouselCaption}>
                                    <h5>{t('The Royal Palace')}</h5>
                                    <div>{t('As it is today')}</div>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                    src="/images/photos/arcul-de-triumf.webp"
                                    alt="missing_photo"
                                    onClick={() => handleOpenImageModal("/images/photos/arcul-de-triumf.webp", t('The Arch of Triumph'))}
                                />
                                <Carousel.Caption className={styles.carouselCaption}>
                                    <h5>{t('The Arch of Triumph')}</h5>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                    src="/images/photos/ministerul-de-externe-2.webp"
                                    alt="missing_photo"
                                    onClick={() => handleOpenImageModal("/images/photos/ministerul-de-externe-2.webp", t('The Palace of the Ministry of Foreign Affairs'))}
                                />
                                <Carousel.Caption className={styles.carouselCaption}>
                                    <h5>{t('The Palace of the Ministry of Foreign Affairs')}</h5>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                    src="/images/photos/palatul-artelor.jpg"
                                    alt="missing_photo"
                                    onClick={() => handleOpenImageModal("/images/photos/palatul-artelor.jpg", t('The Palace of the Arts'))}
                                />
                                <Carousel.Caption className={styles.carouselCaption}>
                                    <h5>{t('The Palace of the Arts')}</h5>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>

                    </Col>
                </Row>
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
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <img
                                src={lightboxImageSrc}
                                alt={lightboxCaption}
                                className={styles.vintageLightboxImage}
                            />

                            <Button
                                variant="dark"
                                size="sm"
                                onClick={() => setIsFullscreen(true)}
                                className={styles.fullscreenButton}
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
                        className={styles.fullscreenCloseButton}
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
                                className={`${styles.vintageMagnifierButton} ${isMagnifierEnabled ? styles.magnifierOn : styles.magnifierOff}`}
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
                                    <div className={styles.magnifierGlass}
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


        </>
    );
} 