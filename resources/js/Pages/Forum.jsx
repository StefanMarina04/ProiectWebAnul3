import { Head, Link, usePage } from '@inertiajs/react';
import { Container } from 'react-bootstrap';

export default function Forum() {
    const { translations } = usePage().props;
    const t = (text) => translations ? (translations[text] || text) : text;

    return (
        <>
            <Head title={t("Forum")} />
            <Container className='mt-5'>
                <h1>{t('Forum')}</h1>
                <p>{t('Welcome')}</p>
                <Link href="/#home" className="nav-link">{t('Go to the homepage')}</Link>
            </Container>
        </>
    );
}