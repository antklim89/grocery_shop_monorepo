import { observer } from 'mobx-react-lite';
import { FC, FormEvent, useState } from 'react';

import Alert from '~/components/utils/Alert';
import Loading from '~/components/utils/Loading';
import { changePassword } from '~/requests';


const ChangePassword: FC = () => {
    const [password, setPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string|null>(null);
    const [resultMessage, setResultMessage] = useState<string|null>(null);


    const handleChangePassword = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage(null);
        setResultMessage(null);
        try {
            await changePassword({
                currentPassword,
                password,
                passwordConfirmation,
            });
            setResultMessage('Password is successully changed.');
            setCurrentPassword('');
            setPassword('');
            setPasswordConfirmation('');
        } catch (err) {
            if (err instanceof Error) setErrorMessage(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="border rounded p-5 m-auto" onSubmit={handleChangePassword}>
            <Alert message={resultMessage} type="success" />
            <Alert message={errorMessage} type="danger" />
            <div className="mb-3">
                <label className="form-label w-100" htmlFor="newPassword">
                    Old Password
                    <br />
                    <input
                        required
                        autoComplete="current-password"
                        className="form-control"
                        id="oldPassword"
                        maxLength={200}
                        minLength={3}
                        pattern="\S*"
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <span className="invalid-feedback">Old password is invalid</span>
                </label>
            </div>
            <div className="mb-3">
                <label className="form-label w-100" htmlFor="newPassword">
                    New Password
                    <br />
                    <input
                        required
                        autoComplete="current-password"
                        className="form-control"
                        id="newPassword"
                        maxLength={200}
                        minLength={3}
                        pattern="\S*"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="invalid-feedback">New password is invalid</span>
                </label>
            </div>
            <div className="mb-3">
                <label className="form-label w-100" htmlFor="confirmPassword">
                    Confirm Password
                    <br />
                    <input
                        required
                        autoComplete="current-password"
                        className="form-control"
                        id="confirmPassword"
                        maxLength={200}
                        minLength={3}
                        pattern="\S*"
                        type="password"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                    <span className="invalid-feedback">The new and old passwords do not match.</span>
                </label>
            </div>
            <button className="btn btn-primary" disabled={loading} type="submit">
                Save
                <Loading loading={loading} size="sm" />
            </button>
        </form>
    );
};

export default observer(ChangePassword);
