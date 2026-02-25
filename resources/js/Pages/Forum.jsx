import NavLink from '@/Components/NavLink';
import { Head, Link } from '@inertiajs/react';
import {Container} from 'react-bootstrap'

export default function Forum()
{
    return (
        <>
        <Head title="Forum" />
        <Container className='mt-5'>
            <h1> Forum </h1>
            <p> Welcome </p>
            <Link href="/#home" className="nav-link">Go to the homepage</Link>
        </Container>
        </>
    );
}