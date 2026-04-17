import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    const { translations } = usePage().props;
    const t = (text) => translations ? (translations[text] || text) : text;

    return (
        <AuthenticatedLayout>
            <Head title={t('Profile')} />

            <div className="py-4">
                <h2 className="mb-4" style={{ fontFamily: 'var(--font-title)', color: 'var(--interwar-ink)' }}>
                    {t('My Profile')}
                </h2>

                <div className="card shadow-sm mb-4" style={{ backgroundColor: 'var(--interwar-paper)', border: '1px solid var(--interwar-gold)' }}>
                    <div className="card-body p-4">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                        />
                    </div>
                </div>

                <div className="card shadow-sm mb-4" style={{ backgroundColor: 'var(--interwar-paper)', border: '1px solid var(--interwar-gold)' }}>
                    <div className="card-body p-4">
                        <UpdatePasswordForm />
                    </div>
                </div>

                <div className="card shadow-sm mb-4 border-danger">
                    <div className="card-body p-4">
                        <DeleteUserForm />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
