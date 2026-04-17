import StandardMenuLayout from '@/Layouts/StandardMenuLayout';
import { Head, usePage } from '@inertiajs/react';
import { Container, Row, Col, Modal } from 'react-bootstrap'; // Am adăugat Modal
import { useState } from 'react'; // Am adăugat useState
import styles from '../../css/gallery.module.css'; 

export default function Gallery() {
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
                <p className="lead mb-1 pt-1" style={{ opacity: '0.8' }}>
                    {t('Still looking for more pictures of Interwar Bucharest? We have got you covered.')}
                </p>
                <div className="ps-2 pe-2 d-flex" style={{ borderBottom: '1px solid var(--interwar-ink)', marginTop: '1rem'}}></div>
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
            <div className="ps-2 pe-2 d-flex" style={{ borderBottom: '1px solid var(--interwar-ink)', marginTop: '1rem'}}></div>
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

        </StandardMenuLayout>
    );
}