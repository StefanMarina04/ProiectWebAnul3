import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import styles from '../../../css/welcome.module.css';
import login_styles from '../../../css/login.module.css';

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
                    <InputLabel htmlFor="email" value={t('Email')} className={login_styles.authLabel} />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className={`mt-1 block w-full ${login_styles.authInput}`}
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="password" value={t('Password')} className={login_styles.authLabel} />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className={`mt-1 block w-full ${login_styles.authInput}`}
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mb-0 ms-0 d-flex align-items-center">
                    <Checkbox
                        id="remember"
                        name="remember"
                        checked={data.remember}
                        onChange={(e) => setData('remember', e.target.checked)}
                    />
                    <label className={`${login_styles.authLabel} ms-2 pt-1`} htmlFor="remember">
                        {t('Remember me')}
                    </label>
                </div>

                <div className="d-flex align-items-center justify-content-between mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className={login_styles.vintageAuthLink}
                        >
                            {t('Forgot your password?')}
                        </Link>
                    )}
                    <PrimaryButton className={`${login_styles.authButton} ms-auto`} disabled={processing}>
                        {t('Login')}
                    </PrimaryButton>
                </div>

                <hr className="my-3" />
                <div className={`text-center small`}>
                    {t("Don't have an account?")}{' '}

                </div>
                <div className="justify-content-center d-flex mt-0">
                    <Link href={route('register')} className={login_styles.vintageAuthLink}>
                        {t('Register')}
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
