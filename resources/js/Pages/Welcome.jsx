import { useState, useRef } from 'react';
import { Container, Navbar, Nav, Offcanvas, Button, Row, Col, Modal, Carousel, Spinner } from 'react-bootstrap';
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
            <Container className="pt-5 pb-3 d-flex justify-content-center">
                <p className={`text-center ${styles.introParagraph}`}>
                    {t('WIP')} 
                </p>
            </Container>
            <Container className="mt-4 mb-4">
            <Row className="align-items-start"> 
                    
                    <Col lg={6} className={`text-lg-center text-center pe-lg-0 mb-4 ${styles.columnDivider}`}>
                        <div className="d-flex align-items-end justify-content-center mb-2" style={{ minHeight: '80px' }}>
                            <p className={`text-center mb-2 ${styles.seePhotos}`}>
                                {t('See Little Paris through the lens')}
                            </p>
                        </div>

                        <div className={`${styles.seePhotosSubtext}`}>{t("Landmarks, forgotten buildings and slices of life")}</div>
                        
                        <Row className="mt-4 justify-content-center">
                            <Col md={11}> 
                                
                                <Carousel fade className={styles.vintageCarousel} interval={3000}>
                                    
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
                            <Row className="justify-content-between" style={{ width: '100%' }}>
                                <Col xs={6} className="pe-2 mt-4 pt-4">
                                <div className="d-flex flex-column">
                                <Button className={`${styles.morePhotosButton} w-100`} variant="link"
                                data-tooltip={t('See a photo album of Interwar Bucharest and Romania')}
                                aria-label={t('See a photo album of Interwar Bucharest and Romania')}
                                onClick={() => handleOpenMagazine("https://archive.org/embed/romania-mare-pitoreasca-1923-compressed", "România Mare Pitorească 1923")}
                                >   
                                </Button>
                                </div>
                                </Col>
                                <Col xs={6} className="ps-2 mt-4 pt-4">                               
                                <div className="d-flex flex-column">
                                    <Link 
                                        href="/gallery" 
                                        className={`btn btn-link ${styles.GalleryButton} w-100`} 
                                        data-tooltip={t('See more in the gallery')}
                                        aria-label={t('See more in the gallery')}
                                    >   
                                    </Link>
                                </div>
                                </Col>
                            </Row>
                        </Row>
                    </Col>

                    <Col lg={6} className={`text-lg-center text-center pe-lg-0`}>
                        <div className="d-flex align-items-end justify-content-center mb-2" style={{ minHeight: '80px' }}>
                                    <p className={`text-center mb-0 ${styles.takePage}`}>
                                        {t('Take a page out of Interwar Bucharest')}
                                    </p>
                        </div>            
                
                <Row classname="align-items-end g-3 mt-4">
                <p className={`${styles.takePageSubtext}`}>{t("Newspapers and magazines for all to see!")}</p>
                <Col className="text-lg-end text-center mt-lg-0">
                    <div className="d-flex flex-column align-items-lg-end align-items-center">
                        
                        <button 
                            className={styles.magazineThumbnailVisual} 
                            onClick={() => handleOpenMagazine("https://archive.org/embed/realitatea-ilustrata/Realitatea Ilustrata 1931/RealitateaIlustrata_1931_01-06-1657309527__pages1-50", "Realitatea Ilustrată 06.01.1931")}
                        >
                            <img 
                                src="/images/magazines/RealitateaIlustrata_1931-01-06.jpg" 
                                alt="Copertă Realitatea Ilustrată 1931" 
                                className={styles.magazineThumbnail}
                            />
                            
                            <div className={styles.magazineInfoBlock}>
                                <h5 className={styles.magazineTitleVisual}>Realitatea Ilustrată</h5>
                                <span className={styles.magazineDateVisual}>{t('1931 New Year Edition')}</span>
                            </div>
                        </button>
                    </div>
                </Col>
                <Col className="text-lg-end text-center mt-lg-0">
                <div className="d-flex flex-column align-items-lg-end align-items-center">

                        <button 
                            className={styles.magazineThumbnailVisual} 
                            onClick={() => handleOpenMagazine("https://archive.org/embed/realitatea-ilustrata/Realitatea Ilustrata 1935/RealitateaIlustrata_1935-1-1655838299__pages1-50", "Realitatea Ilustrată 02.01.1935")}
                        >
                            <img 
                                src="/images/magazines/RealitateaIlustrata_1935-01-02.jpg" 
                                alt="Copertă Realitatea Ilustrată 1935" 
                                className={styles.magazineThumbnail}
                            />
                            <div className={styles.magazineInfoBlock}>
                                <h5 className={styles.magazineTitleVisual}>Realitatea Ilustrată</h5>
                                <span className={styles.magazineDateVisual}>{t('1935 New Year Edition')}</span>
                            </div>
                        </button>
                    </div>
                </Col>
                </Row>
            <Row className="align-items-end">
                <Col className="text-lg-end text-center ">
                <div className="d-flex flex-column align-items-lg-end align-items-center">
                    
                    <button 
                        className={styles.magazineThumbnailVisual} 
                        onClick={() => handleOpenMagazine("https://archive.org/embed/romania-anul-ii-nr.-9-septembrie-1937", "România Anul II Nr. 9")}
                    >
                        <img 
                            src="/images/magazines/ONT_Romania_anul_II_nr_9.jpg" 
                            alt="Copertă România 1937" 
                            className={styles.magazineThumbnail}
                        />
                        
                        <div className={styles.magazineInfoBlock}>
                            <h5 className={styles.magazineTitleVisual}>România</h5>
                            <span className={styles.magazineDateVisual}>{t('Year Two Issue Nine, 1937')}</span>
                        </div>
                    </button>
                </div>
                </Col>
                <Col className="text-lg-end text-center">
                <div className="d-flex flex-column align-items-lg-end align-items-center">
                    <button 
                        className={styles.magazineThumbnailVisual} 
                        onClick={() => handleOpenMagazine("https://archive.org/embed/adeverul-1922-12-1636662720-pages-97-100", "Adevărul Anul XXXV, No. 11905, 1922")}
                    >
                        <img 
                            src="/images/magazines/Adeverul_1922_12-16.jpg" 
                            alt="Copertă Adevărul 1922" 
                            className={styles.magazineThumbnail}
                        />
                        <div className={styles.magazineInfoBlock}>
                            <h5 className={styles.magazineTitleVisual}>Adevărul</h5>
                            <span className={styles.magazineDateVisual}>{t('Christmas Day, 1922')}</span>
                        </div>
                    </button>
                </div>
                </Col>
            </Row>
            <Row className="align-items-end">
                <Col className="text-lg-end text-center">
                <div className="d-flex flex-column align-items-lg-end align-items-center">
                    
                    <button 
                        className={styles.magazineThumbnailVisual} 
                        onClick={() => handleOpenMagazine("https://archive.org/embed/revista-veselia/Veselia_1937-1653688794__pages1-50", "Veselia Anul XLV 1 ianuarie 1937")}
                    >
                        <img 
                            src="/images/magazines/Veselia_19370101.jpg" 
                            alt="Copertă Veselia 1937" 
                            className={styles.magazineThumbnail}
                        />
                        
                        <div className={styles.magazineInfoBlock}>
                            <h5 className={styles.magazineTitleVisual}>Veselia</h5>
                            <span className={styles.magazineDateVisual}>{t('1937 New Year Edition')}</span>
                        </div>
                    </button>
                </div>
                </Col>
                <Col className="text-lg-end text-center">
                <div className="d-flex flex-column align-items-lg-end align-items-center">
                    <button 
                        className={styles.magazineThumbnailVisual} 
                        onClick={() => handleOpenMagazine("https://archive.org/embed/gandirea_202103/gandirea_1921_1922_001_001", "Gândirea Anul I, No. 1")}
                    >
                        <img 
                            src="/images/magazines/gandirea_1921_1922_001_001.jpg" 
                            alt="Copertă Gândirea 1921" 
                            className={styles.magazineThumbnail}
                        />
                        <div className={styles.magazineInfoBlock}>
                            <h5 className={styles.magazineTitleVisual}>Gândirea</h5>
                            <span className={styles.magazineDateVisual}>{t('Year One Issue One, 1921')}</span>
                        </div>
                    </button>
                </div>
                </Col>
            </Row>
                <Row>
                    <Col className="center ps-lg-0 pt-2">
                    <div className="d-flex flex-column align-items-lg-center align-items-center">
                      <Button className={`${styles.moreMagazinesButton}`} variant="link"
                    data-tooltip={t('See more magazines and newspapers')}
                    aria-label={t('See more magazines and newspapers')}
                    >   
                      </Button>
                      </div>
                    </Col>
                </Row>
                    </Col>

                    <Col lg={4} className={`text-lg-center text-center pe-lg-3 mb-4 ${styles.rowDivider}`}>
                            <div className={`text-center mb-2 mt-4 ${styles.ThreeColumnTitle}`}>
                                {t('Share your thougths!')}
                            </div>
                            <div className={`text-center mb-2 ${styles.ThreeColumnTitleSubtext}`}>
                                {t('Join the discussion in the forum')}
                            </div>
                    </Col>
                    <Col lg={4} className={`text-lg-center text-center pe-lg-3 mb-4 ${styles.rowDivider}`}>
                            <div className={`text-center mb-2 mt-4 ${styles.ThreeColumnTitle}`}>
                                {t('Looking for a souvenir?')}
                            </div>
                            <div className={`text-center mb-2 ${styles.ThreeColumnSubtext}`}>
                                {t('Explore the shop for items inspired by Interwar Bucharest')}
                                <div className="d-flex flex-column align-items-center mt-3">
                                    <Link 
                                        href="/shop" 
                                        className={`btn btn-link ${styles.ShopButton}`} 
                                        data-tooltip={t('Go to the shop')}
                                        aria-label={t('Go to the shop')}
                                    >   
                                    </Link>
                                </div>
                            </div>
                    </Col>
                    <Col lg={4} className={`text-lg-center text-center pe-lg-3 mb-4 ${styles.rowDivider}`}>
                            <div className={`text-center mb-2 mt-4 ${styles.ThreeColumnTitle}`}>
                                {t('Want to learn more about Little Paris?')}
                            </div>
                            <div className={`text-center mb-2 ${styles.ThreeColumnSubtext}`}>
                                {t('See maps, transport routes and old guides')}

                            </div>
                    </Col>
            </Row>
        </Container>
            <Modal show={showMagazine} onHide={handleCloseMagazine} size="xl" centered contentClassName={styles.vintageModal}>
                <Modal.Header closeButton style={{ borderBottom: '2px solid var(--interwar-ink)' }}>
                   <Modal.Title className={styles.vintageModalTitle}>
                        {magazineTitle || t('The Reading Room')}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.vintageModalReader}>

                {isLoadingMagazine && (
                        <div 
                            className="d-flex flex-column justify-content-center align-items-center w-100 h-100" 
                            style={{ 
                                position: 'absolute', 
                                top: 0, left: 0, 
                                backgroundColor: 'var(--interwar-paper)', 
                                zIndex: 10 
                            }}
                        >
                            <div className={styles.loadingReel}></div>
                            <p className="mt-3" style={{ fontFamily: 'var(--font-title)', color: 'var(--interwar-ink)', fontSize: '1.2rem', fontStyle: 'italic' }}>
                                {t('Getting ')}{magazineTitle}{'...'}
                            </p>
                        </div>
                    )}

                    {magazineSrc && (
                        <iframe 
                            src={magazineSrc} 
                            width="100%" 
                            height="100%" 
                            webkitallowfullscreen="true" 
                            mozallowfullscreen="true" 
                            allowFullScreen
                            onLoad={() => setIsLoadingMagazine(false)} 
                            style={{ 
                                border: 'none',
                                display: isLoadingMagazine ? 'none' : 'block' 
                            }}
                            >
                        </iframe>
                    )}
                </Modal.Body>
            </Modal>
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