import { observer } from 'mobx-react-lite';
import { FC, FormEvent, useState } from 'react';

import { useAuth } from './AuthProvider';

import Alert from '~/components/utils/Alert';
import Loading from '~/components/utils/Loading';
import { updateUser } from '~/requests/updateUser';


const UserInformationForm: FC = () => {
    const user = useAuth().getUser();

    const [loading, setLoading] = useState(false);

    const [name, setName] = useState(user.name || '');
    const [surname, setSurname] = useState(user.surname || '');
    const [address, setAddress] = useState(user.address || '');
    const [phone, setPhone] = useState(user.phone || '');

    const [errorMessage, setErrorMessage] = useState<string|null>(null);
    const [resultMessage, setResultMessage] = useState<string|null>(null);


    const handleSaveProfile = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage(null);
        setResultMessage(null);
        try {
            setLoading(true);
            await updateUser(user.id, { name, surname, address, phone });
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
                        id="name"
                        maxLength={200}
                        pattern="^[a-zA-Z-']*$"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        id="surname"
                        maxLength={200}
                        pattern="^[a-zA-Z-']*$"
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
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
                        id="phone"
                        maxLength={200}
                        pattern="^[\d-]*$"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                        id="address"
                        maxLength={2000}
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
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

export default observer(UserInformationForm);
