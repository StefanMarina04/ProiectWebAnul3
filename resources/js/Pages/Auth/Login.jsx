import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { translations } = usePage().props;
    const t = (text) => translations ? (translations[text] || text) : text;

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), { onFinish: () => reset('password') });
    };

    return (
        <GuestLayout>
            <Head title={t('Log in')} />

            {status && (
                <div className="alert alert-success mb-3" role="alert">
                    {t(status)}
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mb-3">
                    <InputLabel htmlFor="email" value={t('Email')} />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="password" value={t('Password')} />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mb-3 form-check">
                    <Checkbox
                        id="remember"
                        name="remember"
                        checked={data.remember}
                        onChange={(e) => setData('remember', e.target.checked)}
                    />
                    <label className="form-check-label ms-2 small text-muted" htmlFor="remember">
                        {t('Remember me')}
                    </label>
                </div>

                <div className="d-flex align-items-center justify-content-between mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="small"
                        >
                            {t('Forgot your password?')}
                        </Link>
                    )}
                    <PrimaryButton className="ms-auto" disabled={processing}>
                        {t('Log in')}
                    </PrimaryButton>
                </div>

                <hr className="my-3" />
                <div className="text-center small">
                    {t("Don't have an account?")}{' '}
                    <Link href={route('register')}>{t('Register')}</Link>
                </div>
            </form>
        </GuestLayout>
    );
}
