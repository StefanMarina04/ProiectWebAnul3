import StandardMenuLayout from '@/Layouts/StandardMenuLayout';
import { useState, useRef } from 'react';
import { Container, Navbar, Nav, Offcanvas, Button, Row, Col, Modal, Carousel, Spinner } from 'react-bootstrap';
import { Head, Link, usePage } from '@inertiajs/react';
import styles from '../../css/welcome.module.css';
import magazine_styles from '../../css/magazines.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Magazines() {
    const { translations, locale } = usePage().props;
    
    const t = (text) => translations ? (translations[text] || text) : text;

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
    return (
        <>
        <Head title={t("Magazines")}/>

        <StandardMenuLayout>
        </StandardMenuLayout>
            
            <Container className={`text-center mt-5`}>
                    <h1 className={`mt-4 ${magazine_styles.moreMagazinesTitle}`}>{t('Extra pages for the curious!')}</h1>
                    <div className="ps-5 pe-5 d-flex" style={{ borderBottom: '2px solid var(--interwar-ink)', marginTop: '0.5rem'}}></div>
            </Container>
            <Container className={`text-center mb-4 mt-4`}>
                <h2 className={`mt-3 ${magazine_styles.moreMagazinesSubtitle}`}>{t('Magazines')}</h2>
                <div className="ps-5 pe-5" style={{ borderBottom: '1.5px solid var(--interwar-ink)', marginTop: '0.5rem', maxWidth: '50%', marginLeft: '25%', marginBottom: '1rem'}}></div>
            </Container>
            <Container>
        <Row classname="align-items-center">
                <Col className="text-lg-center text-center ">
                <div className="d-flex flex-column align-items-lg-center align-items-start">
                    
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
                <Col className="text-lg-center text-center">
                <div className="d-flex flex-column align-items-lg-center align-items-center">
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
                 <Col className="text-lg-center text-center">
                <div className="d-flex flex-column align-items-lg-center align-items-end">
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
            <Row className="align-items-center">
                <Col className="text-lg-center text-center ">
                <div className="d-flex flex-column align-items-lg-center align-items-start">
                    
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
                <Col className="text-lg-center text-center">
                <div className="d-flex flex-column align-items-lg-center align-items-center">
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
                 <Col className="text-lg-center text-center">
                <div className="d-flex flex-column align-items-lg-center align-items-end">
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
            <Row className="align-items-center">
                <Col className="text-lg-center text-center ">
                <div className="d-flex flex-column align-items-lg-center align-items-start">
                    
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
                <Col className="text-lg-center text-center">
                <div className="d-flex flex-column align-items-lg-center align-items-center">
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
                 <Col className="text-center text-center">
                <div className="d-flex flex-column align-items-lg-center align-items-end">
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

        </>
    );
}