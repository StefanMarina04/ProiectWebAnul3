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

    const handleCloseImageModal = () => setShowImageModal(false);
    
    const handleOpenImageModal = (src, caption) => {
        setLightboxImageSrc(src);
        setLightboxCaption(caption);
        setShowImageModal(true);
    };


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
                    <Col xs={12} md={6} lg={6} style={{ paddingRight: '2rem'}}>

                        <Carousel fade className={`${styles.vintageCarousel}`} interval={3000}>

                            <Carousel.Item>
                                <img
                                    className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                    src="/images/photos/langa-ateneu.jpg"
                                    alt="missing_photo"
                                    onClick={() => handleOpenImageModal("/images/photos/langa-ateneu.jpg", t('Romanian Athenaeum'))}
                                />
                                <Carousel.Caption className={styles.carouselCaption}>
                                    <h5>{t('Next to the Athenaeum')}</h5>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                    src="/images/photos/gara-de-nord-frontal.webp"
                                    alt="missing_photo"
                                    onClick={() => handleOpenImageModal("/images/photos/gara-de-nord-frontal.webp", t('North Railway Station'))}
                                />
                                <Carousel.Caption className={styles.carouselCaption}>
                                    <h5>{t('North Railway Station')}</h5>
                                    <div>{t('Before the remodeling')}</div>
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
                    <Col xs={12} md={6} lg={6} style={{ marginLeft: '0', paddingLeft: '2rem' }}>

                        <Carousel fade className={`${styles.vintageCarousel}`} interval={3000}>

                            <Carousel.Item>
                                <img
                                    className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                    src="/images/photos/langa-ateneu.jpg"
                                    alt="missing_photo"
                                    onClick={() => handleOpenImageModal("/images/photos/langa-ateneu.jpg", t('Romanian Athenaeum'))}
                                />
                                <Carousel.Caption className={styles.carouselCaption}>
                                    <h5>{t('Next to the Athenaeum')}</h5>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                    src="/images/photos/gara-de-nord-frontal.webp"
                                    alt="missing_photo"
                                    onClick={() => handleOpenImageModal("/images/photos/gara-de-nord-frontal.webp", t('North Railway Station'))}
                                />
                                <Carousel.Caption className={styles.carouselCaption}>
                                    <h5>{t('North Railway Station')}</h5>
                                    <div>{t('Before the remodeling')}</div>
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