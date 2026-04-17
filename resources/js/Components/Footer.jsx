import { Container } from 'react-bootstrap';
import { usePage } from '@inertiajs/react';
import styles from '../../css/footer.module.css';
import { FaInstagram, FaReddit, FaPinterest, FaFacebook } from 'react-icons/fa';


export default function Footer() {
    const { translations } = usePage().props;
    const t = (text) => translations ? (translations[text] || text) : text;

    return (
        <footer className={styles.footerContainer}>
            <Container className="pt-4 pb-0">

                <div className={styles.footerGrid}>

                    <div>
                        <h5 className={`${styles.footerTitle}`}>{t('Social Media')}</h5>
                        <div className={styles.socialGrid}>
                            <a href="https://instagram.com/miculparis-littleparis" className={styles.socialLink} aria-label="Instagram">
                                <FaInstagram />
                                <span>Instagram</span>
                            </a>
                            <a href="https://reddit.com/community/miculparis" className={styles.socialLink} aria-label="Reddit">
                                <FaReddit />
                                <span>Reddit</span>
                            </a>
                            <a href="https://pinterest.com/miculparis-littleparis" className={styles.socialLink} aria-label="Pinterest">
                                <FaPinterest />
                                <span>Pinterest</span>
                            </a>
                            <a href="https://facebook.com/miculparis-littleparis" className={styles.socialLink} aria-label="Facebook">
                                <FaFacebook />
                                <span>Facebook</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h5 className={styles.footerTitle}>Contact</h5>
                        <p className={styles.footerText}>
                            <strong>{t('Address:')}</strong> Calea Victoriei nr. 35, București (Palatul Telefoanelor)
                        </p>
                        <p className={styles.footerText}>
                            <strong>Email:</strong> contact@asoc.miculparis.ro
                        </p>
                    </div>

                    <div className={styles.mapWrapper}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11395.660428158017!2d26.095324117715297!3d44.43490358053444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff46b8a1799f%3A0x315e68c92d89ed58!2sPalace%20of%20Telephones!5e0!3m2!1sen!2sus!4v1776384707427!5m2!1sen!2sus"
                            width="100%"
                            height="200"
                            style={{ border: '1.5px solid var(--interwar-ink)', borderRadius: '4px', display: 'block' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        {new Date().getFullYear()} {t('Paris of the East - Web Project')}
                    </p>
                </div>

            </Container>
        </footer>
    );
}