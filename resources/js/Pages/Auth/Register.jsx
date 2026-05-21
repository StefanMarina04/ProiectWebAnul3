import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import styles from '../../../css/welcome.module.css';
import login_styles from '../../../css/login.module.css';

export default function Register() {
    const { translations } = usePage().props;
    const t = (text) => translations ? (translations[text] || text) : text;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title={t('Register')} />

            <form onSubmit={submit}>
                <div className="mb-3">
                    <InputLabel htmlFor="name" value={t('Name')} className={login_styles.authLabel} />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className={`mt-1 block w-full ${login_styles.authInput}`}
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="email" value={t('Email')} className={login_styles.authLabel} />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className={`mt-1 block w-full ${login_styles.authInput}`}
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
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
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mb-3">
                    <InputLabel htmlFor="password_confirmation" value={t('Confirm Password')} className={login_styles.authLabel} />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className={`mt-1 block w-full ${login_styles.authInput}`}
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="d-flex align-items-center justify-content-between mt-4">
                    <Link href={route('login')} className={`${login_styles.vintageAuthLink}`}>
                        {t('Already registered?')}
                    </Link>
                    <PrimaryButton className={`${login_styles.authButton} ms-auto`} disabled={processing}>
                        {t('Register')}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
