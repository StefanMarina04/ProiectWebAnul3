import StandardMenuLayout from '@/Layouts/StandardMenuLayout';
import { Head } from '@inertiajs/react';
import { Container } from 'react-bootstrap';

export default function Gallery() {
    const { translations, locale } = usePage().props;
    const t = (text) => translations ? (translations[text] || text) : text;
    return (
        <StandardMenuLayout>
            <Head title="Gallery"/>
            
        </StandardMenuLayout>
    );
}