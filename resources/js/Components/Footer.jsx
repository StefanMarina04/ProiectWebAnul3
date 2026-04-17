import { useState } from 'react';
import { Offcanvas, Nav, Button, Container, Row, Col} from 'react-bootstrap';
import { Link, usePage } from '@inertiajs/react';
import styles from '../../css/footer.module.css';

export default function Footer() {
        const { auth, translations, locale } = usePage().props;
        const t = (text) => translations ? (translations[text] || text) : text;
    return (
        <footer className={styles.footerContainer}>
            <Container>
                <Row className="gy-4">
                    <Col lg={4} md={6}>
                        <h5 className={styles.footerTitle}>{t('Social Media')}</h5>
                            <a href="#" className={styles.socialLink}>Instagram</a>
                            <a href="#" className={styles.socialLink}>Reddit</a>
                            <a href="#" className={styles.socialLink}>Pinterest</a>
                            <a href="#" className={styles.socialLink}>Facebook</a>
                    </Col>

                    <Col lg={4} md={6}>
                        <h5 className={styles.footerTitle}>Contact</h5>
                        <p className={styles.footerText}>
                            <strong>{t('Address:')}</strong> Calea Victoriei nr. 48-50, București (Palatul Telefoanelor)
                        </p>
                        <p className={styles.footerText}>
                            <strong>Email:</strong> contact@miculparis.ro
                        </p>
                    </Col>

                    <Col lg={4} md={12}>
                        <div className={styles.mapWrapper}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11395.660428158017!2d26.095324117715297!3d44.43490358053444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff46b8a1799f%3A0x315e68c92d89ed58!2sPalace%20of%20Telephones!5e0!3m2!1sen!2sus!4v1776384707427!5m2!1sen!2sus"
                             width="450" 
                             height="150" 
                             style={{ border: '1.5px solid var(--interwar-ink)', borderRadius: '4px' }}
                             allowfullscreen="" 
                             loading="lazy" 
                             referrerpolicy="no-referrer-when-downgrade">
                             </iframe>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5 border-top border-dark pt-3">
                    <Col className="text-center">
                        <p className={styles.copyright}>
                            {new Date().getFullYear()} {t('Paris of the East - Web Project')}
                        </p>
                    </Col>
                </Row>

            </Container>
        </footer>
    );
}