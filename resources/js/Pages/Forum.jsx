import { Head, Link, usePage } from '@inertiajs/react';
import { Container } from 'react-bootstrap';
import StandardMenuLayout from '@/Layouts/StandardMenuLayout';
import styles from '../../css/magazines.module.css'

export default function Forum() {
    const { translations } = usePage().props;
    const t = (text) => translations ? (translations[text] || text) : text;

    return (
        <>
            <Head title={t("Forum")} />
            <br></br>
            <div className={`text-center mt-5`}>WIP</div>
            <StandardMenuLayout></StandardMenuLayout>
        </>
    );
}