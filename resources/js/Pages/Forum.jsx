import { Head, Link, usePage } from '@inertiajs/react';
import { Container } from 'react-bootstrap';
import StandardMenuLayout from '@/Layouts/StandardMenuLayout';

export default function Forum() {
    const { translations } = usePage().props;
    const t = (text) => translations ? (translations[text] || text) : text;

    return (
        <>
            <Head title={t("Forum")} />
            <StandardMenuLayout></StandardMenuLayout>
        </>
    );
}