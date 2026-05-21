import { Container, Card, Nav } from 'react-bootstrap';
import { Link, usePage } from '@inertiajs/react';
import styles from '../../css/welcome.module.css';
import login_styles from '../../css/login.module.css';
import StandardMenuLayout from '@/Layouts/StandardMenuLayout';

export default function GuestLayout({ children }) {
    const { translations } = usePage().props;
    const t = (text) => translations ? (translations[text] || text) : text;

    return (
        <StandardMenuLayout>
            <Container className="d-flex justify-content-center mt-5">
                <div style={{ width: '100%', maxWidth: '450px' }}>
                    
                    <div className="text-center mb-4">
                        <Link href="/" className="text-decoration-none">
                            <h2 className={login_styles.authTitle}>{t('Paris of the East')}</h2>
                        </Link>
                    </div>

                    <Card className={login_styles.loginCard}>
                        <Card.Body>
                            {children}
                        </Card.Body>
                    </Card>

                </div>
            </Container>
        </StandardMenuLayout>
    );
}