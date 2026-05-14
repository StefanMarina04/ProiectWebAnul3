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
            <Head title={t("Magazines")} />

            <StandardMenuLayout>
            </StandardMenuLayout>

            <Container className={`text-center mt-5`}>
                <h1 className={`mt-4 ${magazine_styles.moreMagazinesTitle}`}>{t('Extra pages for the curious!')}</h1>
                <div className="ps-5 pe-5 d-flex" style={{ borderBottom: '2px solid var(--interwar-ink)', marginTop: '0.5rem' }}></div>
            </Container>
            <Container className={`text-center mb-4 mt-4`}>
                <h2 className={`mt-3 ${magazine_styles.moreMagazinesSubtitle}`}>{t('Magazines')}</h2>
                <div className="ps-5 pe-5" style={{ borderBottom: '1.5px solid var(--interwar-ink)', marginTop: '0.5rem', maxWidth: '50%', marginLeft: '25%', marginBottom: '1rem' }}></div>
            </Container>
            <Container>
                <Row classname="align-items-center">
                    <Col className="text-lg-center text-center ">
                        <div className="d-flex flex-column align-items-lg-center align-items-start">
                            <button
                                className={styles.magazineThumbnailVisual}
                                onClick={() => handleOpenMagazine("https://archive.org/embed/revista-radio-si-radiofonia/Radio, septembrie-decembrie 1928 (Anul 1, nr. 1-15)", "Radio Anul I No.1")}
                            >
                                <img
                                    src="/images/magazines/Radiofonia_1928_09_23.jpg"
                                    alt="Copertă Adevărul 1922"
                                    className={styles.magazineThumbnail}
                                />
                                <div className={styles.magazineInfoBlock}>
                                    <h5 className={styles.magazineTitleVisual}>Radio (Radiofonia)</h5>
                                    <span className={styles.magazineDateVisual}>{t('First Issue, 1928')}</span>
                                </div>
                            </button>
                        </div>
                    </Col>
                    <Col className="text-lg-center text-center">
                        <div className="d-flex flex-column align-items-lg-center align-items-center">
                            <button
                                className={styles.magazineThumbnailVisual}
                                onClick={() => handleOpenMagazine("https://archive.org/embed/radiofonia-1934-04-06-1662752278-pages-201-250", "Radiofonia Anul VII, No. 289")}
                            >
                                <img
                                    src="/images/magazines/Radiofonia_1934_04-06.jpg"
                                    alt="Copertă Radiofonia 1934"
                                    className={styles.magazineThumbnail}
                                />

                                <div className={styles.magazineInfoBlock}>
                                    <h5 className={styles.magazineTitleVisual}>Radiofonia</h5>
                                    <span className={styles.magazineDateVisual}>{t('Year Six No. 289, 1934')}</span>
                                </div>
                            </button>
                        </div>
                    </Col>
                    <Col className="text-lg-center text-center">
                        <div className="d-flex flex-column align-items-lg-center align-items-end">
                            <button
                                className={styles.magazineThumbnailVisual}
                                onClick={() => handleOpenMagazine("https://archive.org/embed/radiofonia-1937-07-09-1662754006-pages-101-150", "Radiofonia 4 iulie 1937")}
                            >
                                <img
                                    src="/images/magazines/Radiofonia_1937_07-09.jpg"
                                    alt="Copertă Adevărul 1922"
                                    className={styles.magazineThumbnail}
                                />
                                <div className={styles.magazineInfoBlock}>
                                    <h5 className={styles.magazineTitleVisual}>Radio (Radiofonia)</h5>
                                    <span className={styles.magazineDateVisual}>{t('4th of July 1937')}</span>
                                </div>
                            </button>
                        </div>
                    </Col>
                </Row>
                <Row classname="align-items-center">
                    <Col className="text-lg-center text-center ">
                        <div className="d-flex flex-column align-items-lg-center align-items-start">

                            <button
                                className={styles.magazineThumbnailVisual}
                                onClick={() => handleOpenMagazine("https://archive.org/embed/ziarul_stiintelor_si_al_calatoriilor_1927_51", "Ziarul științelor și al călătoriilor, Anul XXXI No.48, 1927")}
                            >
                                <img
                                    src="/images/magazines/ziarul_stiintelor_si_al_calatoriilor_1927_48_0000.jpg"
                                    alt="Copertă Ziarul științelor și al călătoriilor 1927"
                                    className={styles.magazineThumbnail}
                                />

                                <div className={styles.magazineInfoBlock}>
                                    <h5 className={styles.magazineTitleVisual}>Ziarul științelor și al călătoriilor</h5>
                                    <span className={styles.magazineDateVisual}>{t('Year XXXI No.48, 1927')}</span>
                                </div>
                            </button>
                        </div>
                    </Col>
                    <Col className="text-lg-center text-center">
                        <div className="d-flex flex-column align-items-lg-center align-items-center">
                            <button
                                className={styles.magazineThumbnailVisual}
                                onClick={() => handleOpenMagazine("https://archive.org/embed/ziarul-stiintelor-si-calatoriilor-1928-1666324654-pages-251-300", "Ziarul științelor și al călătoriilor, Anul XXXII No.1, 1928")}
                            >
                                <img
                                    src="/images/magazines/ZiarulStiintelorSiCalatoriilor_19280101.jpg"
                                    alt="Copertă Ziarul științelor și al călătoriilor 1928"
                                    className={styles.magazineThumbnail}
                                />
                                <div className={styles.magazineInfoBlock}>
                                    <h5 className={styles.magazineTitleVisual}>Ziarul științelor și al călătoriilor</h5>
                                    <span className={styles.magazineDateVisual}>{t('Year XXXII No.1, 1928')}</span>
                                </div>
                            </button>
                        </div>
                    </Col>
                    <Col className="text-lg-center text-center">
                        <div className="d-flex flex-column align-items-lg-center align-items-end">
                            <button
                                className={styles.magazineThumbnailVisual}
                                onClick={() => handleOpenMagazine("https://archive.org/embed/ziarul-stiintelor-si-calatoriilor-1937-1666325852-pages-451-500", "Ziarul științelor și al călătoriilor, Anul LI Număr de Anul Nou 1937")}
                            >
                                <img
                                    src="/images/magazines/ZiarulStiintelorSiCalatoriilor_1937-1666325852__pages001-050_0000.jpg"
                                    alt="Copertă Ziarul științelor și al călătoriilor 1937"
                                    className={styles.magazineThumbnail}
                                />
                                <div className={styles.magazineInfoBlock}>
                                    <h5 className={styles.magazineTitleVisual}>Ziarul științelor și al călătoriilor</h5>
                                    <span className={styles.magazineDateVisual}>{t('Year LI New Year Issue, 1937')}</span>
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
                                onClick={() => handleOpenMagazine("https://archive.org/embed/voiaj_a01_n01_text", "Voiaj, Anul I Nr.1 1933")}
                            >
                                <img
                                    src="/images/magazines/revista_voiaj_1933.jpg"
                                    alt="Copertă Voiaj 1933"
                                    className={styles.magazineThumbnail}
                                />

                                <div className={styles.magazineInfoBlock}>
                                    <h5 className={styles.magazineTitleVisual}>Voiaj</h5>
                                    <span className={styles.magazineDateVisual}>{t('First Issue, 1933')}</span>
                                </div>
                            </button>
                        </div>
                    </Col>
                    <Col className="text-lg-center text-center">
                        <div className="d-flex flex-column align-items-lg-center align-items-center">
                            <button
                                className={styles.magazineThumbnailVisual}
                                onClick={() => handleOpenMagazine("https://archive.org/embed/voiaj_a01_n02_tiff", "Voiaj, Anul I Nr.2 1933")}
                            >
                                <img
                                    src="/images/magazines/revista_voiaj_1933_2.jpg"
                                    alt="Copertă Voiaj 1933 (2)"
                                    className={styles.magazineThumbnail}
                                />
                                <div className={styles.magazineInfoBlock}>
                                    <h5 className={styles.magazineTitleVisual}>Voiaj</h5>
                                    <span className={styles.magazineDateVisual}>{t('Second Issue, 1933')}</span>
                                </div>
                            </button>
                        </div>
                    </Col>
                    <Col className="text-lg-center text-center">
                        <div className="d-flex flex-column align-items-lg-center align-items-end">
                            <button
                                className={styles.magazineThumbnailVisual}
                                onClick={() => handleOpenMagazine("https://archive.org/embed/revista-veselia/Veselia_1927-1653687722__pages701-750", "Veselia Anul XXXIII, No. 47, 1927")}
                            >
                                <img
                                    src="/images/magazines/Veselia_19271124.jpg"
                                    alt="Copertă Veselia 1927"
                                    className={styles.magazineThumbnail}
                                />
                                <div className={styles.magazineInfoBlock}>
                                    <h5 className={styles.magazineTitleVisual}>Veselia</h5>
                                    <span className={styles.magazineDateVisual}>{t('Year XXXIII, No. 47, 1927')}</span>
                                </div>
                            </button>
                        </div>
                    </Col>
                </Row>
                </Container>
                <Container className={`text-center mb-4 mt-4`}>
                <h2 className={`mt-3 ${magazine_styles.moreMagazinesSubtitle}`}>{t('Newspapers, gazzetes and bonus magazines')}</h2>
                <div className="ps-5 pe-5" style={{ borderBottom: '1.5px solid var(--interwar-ink)', marginTop: '0.5rem', maxWidth: '50%', marginLeft: '25%', marginBottom: '1rem' }}></div>
                </Container>
                <Container>
                <Row className="align-items-center">
                    <Col className="text-lg-center text-center ">
                        <div className="d-flex flex-column align-items-lg-center align-items-start">

                            <button
                                className={styles.magazineThumbnailVisual}
                                onClick={() => handleOpenMagazine("https://archive.org/embed/calendarul-nr.-545-550-22-dec.-30-dec.-1930", "Calendarul Anul II No. 545")}
                            >
                                <img
                                    src="/images/magazines/Calendarul nr. 545.jpg"
                                    alt="Copertă Calendarul 1930"
                                    className={styles.magazineThumbnail}
                                />

                                <div className={styles.magazineInfoBlock}>
                                    <h5 className={styles.magazineTitleVisual}>Calendarul</h5>
                                    <span className={styles.magazineDateVisual}>{t('Year II No. 545, 1930')}</span>
                                </div>
                            </button>
                        </div>
                    </Col>
                    <Col className="text-lg-center text-center">
                        <div className="d-flex flex-column align-items-lg-center align-items-center">
                            <button
                                className={styles.magazineThumbnailVisual}
                                onClick={() => handleOpenMagazine("https://archive.org/embed/tribuna-comertului-pitesti", "Tribuna Comerțului, Anul I No. 2, 1926 +")}
                            >
                                <img
                                    src="/images/magazines/Tribuna_Comertului.jpg"
                                    alt="Copertă Tribuna Comerțului Pitești"
                                    className={styles.magazineThumbnail}
                                />
                                <div className={styles.magazineInfoBlock}>
                                    <h5 className={styles.magazineTitleVisual}>Tribuna Comerțului</h5>
                                    <span className={styles.magazineDateVisual}>{t('Year I No. 2, 1926 + more')}</span>
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