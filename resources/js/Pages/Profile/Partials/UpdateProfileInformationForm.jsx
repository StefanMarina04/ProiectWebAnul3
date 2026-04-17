import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const { auth, translations } = usePage().props;
    const t = (text) => translations ? (translations[text] || text) : text;
    const user = auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <h5 style={{ color: 'var(--interwar-ink)', fontFamily: 'var(--font-title)' }}>
                {t('Profile Information')}
            </h5>
            <p className="text-muted small mb-4">
                {t("Update your account's profile information and email address.")}
            </p>

            <form onSubmit={submit}>
                <div className="mb-3">
                    <InputLabel htmlFor="name" value={t('Name')} />
                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />
                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="email" value={t('Email')} />
                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />
                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div className="alert alert-warning small mb-3">
                        {t('Your email address is unverified.')}{' '}
                        <Link href={route('verification.send')} method="post" as="button" className="alert-link">
                            {t('Click here to re-send the verification email.')}
                        </Link>
                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-success">
                                {t('A new verification link has been sent to your email address.')}
                            </div>
                        )}
                    </div>
                )}

                <div className="d-flex align-items-center gap-3">
                    <PrimaryButton disabled={processing}>{t('Save')}</PrimaryButton>
                    {recentlySuccessful && (
                        <span className="text-success small">{t('Saved.')}</span>
                    )}
                </div>
            </form>
        </section>
    );
}
