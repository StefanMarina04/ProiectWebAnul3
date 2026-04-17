import { Head, Link, usePage } from '@inertiajs/react';
import { Container } from 'react-bootstrap';
import StandardMenuLayout from '@/Layouts/StandardMenuLayout';

export default function Forum() {
    const { translations } = usePage().props;
    const t = (text) => translations ? (translations[text] || text) : text;

    return (
        <>
            <Head title={t("Forum")} />
            <br></br>
            <div className="display-6 pt-4 d-flex align-items-end justify-content-center">{t('We are terribly sorry for the inconvenience, this page is still under construction')}</div>
            <div className="display-6 d-flex align-items-end justify-content-center mt-3 pb-4">{t('We kindly ask you to try our other pages!')}</div>
            <StandardMenuLayout></StandardMenuLayout>
        </>
    );
}