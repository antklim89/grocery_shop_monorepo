'use client';
import Link from 'next/link';
import { FC, FormEvent, useEffect, useState } from 'react';

import Loading from '~/components/utils/Loading';
import { useAuthStore } from '~/store';


const Auth: FC<{isSignup?: boolean}> = ({ isSignup }) => {
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const signup = useAuthStore((state) => state.signup);
    const login = useAuthStore((state) => state.login);
    const loading = useAuthStore((state) => state.loading);


    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (isSignup) {
                await signup({ email, username: email, password });
            } else {
                await login({ identifier: email, password });
            }
        } catch (err) {
            if (err instanceof Error) setError(err.message);
        }
    };

    useEffect(() => {
        setError(null);
    }, [isSignup, email, password, confirm]);


    return (
        <div className="container" style={{ maxWidth: 576 }}>
            <h1 className="text-center text-primary">{isSignup ? 'Sign Up' : 'Log In'}
            </h1>
            <form className="p-5 border" onSubmit={handleLogin}>
                {error
                    ? (
                        <div className="alert alert-danger" role="alert">
                            <i className="bi bi-exclamation-triangle px-2" />
                            {error}
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
                <button className="btn btn-primary" disabled={loading} type="submit">
                    {isSignup ? 'Sign up' : 'Log In'}
                    <Loading loading={loading} size="sm" />
                </button>
            </form>
        </div>
    );
};

export default Auth;
