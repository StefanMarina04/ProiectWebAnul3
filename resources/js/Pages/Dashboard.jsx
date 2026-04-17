import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const { auth, translations } = usePage().props;
    const t = (text) => translations ? (translations[text] || text) : text;
    const user = auth.user;

    return (
        <AuthenticatedLayout>
            <Head title={t('Dashboard')} />

            <div className="py-4">
                <h2 className="mb-4" style={{ fontFamily: 'var(--font-title)', color: 'var(--interwar-ink)' }}>
                    {t('Dashboard')}
                </h2>

                <div className="row g-3">
                    <div className="col-12 col-md-8">
                        <div className="card shadow-sm h-100" style={{ backgroundColor: 'var(--interwar-paper)', border: '1px solid var(--interwar-gold)' }}>
                            <div className="card-body">
                                <p className="mb-0">
                                    {t("Welcome back")}, <strong>{user.name}</strong>! {t("You're logged in!")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="card shadow-sm h-100" style={{ backgroundColor: 'var(--interwar-paper)', border: '1px solid var(--interwar-gold)' }}>
                            <div className="card-body d-flex flex-column gap-2">
                                <Link href="/profile" className="btn btn-sm btn-outline-secondary w-100">
                                    {t('Edit Profile')}
                                </Link>
                                {user.role === 'admin' && (
                                    <Link href="/admin" className="btn btn-sm btn-warning w-100">
                                    {t('Admin Panel')}
                                    </Link>
                                )}
                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="btn btn-sm btn-outline-danger w-100"
                                >
                                    {t('Log Out')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
