import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import { FC, FormEvent, useEffect, useState } from 'react';

import { useAuth } from '~/components/auth/AuthProvider';
import Loading from '~/components/utils/Loading';


const Auth: FC<{isSignup?: boolean}> = ({ isSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const auth = useAuth();

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (isSignup) {
                await auth.signup({ email, username: email, password });
            } else {
                await auth.login({ identifier: email, password });
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        auth.setError('');
    }, [isSignup, email, password, confirm]);


    return (
        <div className="container">
            <h1 className="text-center text-primary">{isSignup ? 'Sign Up' : 'Log In'}
            </h1>
            <form className="p-5 border" onSubmit={handleLogin}>
                {auth.error
                    ? (
                        <div className="alert alert-danger" role="alert">
                            <i className="bi bi-exclamation-triangle px-2" />
                            {auth.error}
                        </div>
                    )
                    : null}
                <div className="mb-3">
                    <input
                        required
                        autoComplete="email"
                        className="form-control"
                        placeholder="E-mail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        required
                        autoComplete={isSignup ? 'new-password' : 'current-password'}
                        className="form-control"
                        pattern="\S*"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                { isSignup
                    ? (
                        <div className="mb-3">
                            <input
                                required
                                autoComplete="new-password"
                                className="form-control"
                                pattern="\S*"
                                placeholder="Confirm password"
                                type="password"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                            />
                        </div>
                    )
                    : null}
                <div>
                    <p className="text-center">
                        or{' '}
                        {isSignup
                            ? (
                                <Link passHref className="text-decoration-underline" href="/login">
                                    Log In
                                </Link>
                            )
                            : (
                                <Link passHref className="text-decoration-underline" href="/signup">
                                    Sign Up
                                </Link>
                            )}
                    </p>
                </div>
                <button className="btn btn-primary" disabled={auth.loading} type="submit">
                    {isSignup ? 'Sign up' : 'Log In'}
                    <Loading loading={auth.loading} size="sm" />
                </button>
            </form>
        </div>
    );
};

export default observer(Auth);
