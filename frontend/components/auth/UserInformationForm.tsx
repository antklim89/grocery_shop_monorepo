'use client';
import { FC, FormEvent, useState } from 'react';

import Alert from '~/components/utils/Alert';
import Loading from '~/components/utils/Loading';
import { useAuthStore } from '~/store';
import { IUser } from '~/types';


const UserInformationForm: FC<IUser> = (user) => {
    const [loading, setLoading] = useState(false);

    const updateUser = useAuthStore((state) => state.updateUser);

    const [errorMessage, setErrorMessage] = useState<string|null>(null);
    const [resultMessage, setResultMessage] = useState<string|null>(null);


    const handleSaveProfile = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage(null);
        setResultMessage(null);
        try {
            setLoading(true);
            const formData = new FormData(e.currentTarget);
            const name = formData.get('name') as string;
            const surname = formData.get('surname') as string;
            const address = formData.get('address') as string;
            const phone = formData.get('phone') as string;

            await updateUser({ name, surname, address, phone });
            setResultMessage('Profile has been successfully updated');
        } catch (err) {
            if (err instanceof Error) setErrorMessage(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="border rounded p-5 m-auto" onSubmit={handleSaveProfile}>
            <Alert message={resultMessage} type="success" />
            <Alert message={errorMessage} type="danger" />
            <div className="mb-3">
                <label className="form-label w-100" htmlFor="name">
                    Name
                    <br />
                    <input
                        autoComplete="given-name"
                        className="form-control"
                        defaultValue={user.name || ''}
                        id="name"
                        maxLength={200}
                        name="name"
                        pattern="^[a-zA-Z-']*$"
                        type="text"
                    />
                    <span className="invalid-feedback">Name is invalid</span>
                </label>
            </div>
            <div className="mb-3">
                <label className="form-label w-100" htmlFor="surname">
                    Surname:
                    <br />
                    <input
                        autoComplete="family-name"
                        className="form-control"
                        defaultValue={user.surname || ''}
                        id="surname"
                        maxLength={200}
                        name="surname"
                        pattern="^[a-zA-Z-']*$"
                        type="text"
                    />
                    <span className="invalid-feedback">Surname password is invalid</span>
                </label>
            </div>
            <div className="mb-3">
                <label className="form-label w-100" htmlFor="phone">
                    Phone:
                    <br />
                    <input
                        autoComplete="tel"
                        className="form-control"
                        defaultValue={user.phone || ''}
                        id="phone"
                        maxLength={200}
                        name="phone"
                        pattern="^[\d-]*$"
                        type="tel"
                    />
                    <span className="invalid-feedback">Phone is invalid</span>
                </label>
            </div>
            <div className="mb-3">
                <label className="form-label w-100" htmlFor="address">
                    Address:
                    <br />
                    <input
                        autoComplete="address-line1"
                        className="form-control"
                        defaultValue={user.address || ''}
                        id="address"
                        maxLength={2000}
                        name="address"
                        type="text"
                    />
                    <span className="invalid-feedback">Address is invalid</span>
                </label>
            </div>
            <button className="btn btn-primary" disabled={loading} type="submit">
                Save
                <Loading loading={loading} size="sm" />
            </button>
        </form>
    );
};

export default UserInformationForm;
