import { useState } from 'react';


const CreateOrderModal = (): JSX.Element => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className="container">
            <form className="row">
                <div className="mb-3 col-sm-6 col-12">
                    <label className="w-100" htmlFor="email">
                        Name:
                        <br />
                        <input
                            required
                            autoComplete="given-name"
                            className="form-control"
                            id="name"
                            maxLength={200}
                            minLength={5}
                            pattern="^[a-zA-Z-']*$"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <div className="mb-3 col-sm-6 col-12">
                    <label className="w-100" htmlFor="email">
                        Surname:
                        <br />
                        <input
                            required
                            autoComplete="family-name"
                            className="form-control"
                            id="surname"
                            maxLength={200}
                            minLength={3}
                            pattern="^[a-zA-Z-']*$"
                            type="text"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                        />
                    </label>
                </div>
                <div className="mb-3 col-12">
                    <label className="w-100" htmlFor="email">
                        E-mail:
                        <br />
                        <input
                            required
                            autoComplete="email"
                            className="form-control"
                            id="email"
                            maxLength={200}
                            minLength={3}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <div className="mb-3 col-12">
                    <label className="w-100" htmlFor="email">
                        Address:
                        <br />
                        <input
                            required
                            autoComplete="address-level1"
                            className="form-control"
                            id="address"
                            maxLength={2000}
                            minLength={5}
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </label>
                </div>
                <div className="mb-3 col-12">
                    <label className="w-100" htmlFor="email">
                        Phone number:
                        <br />
                        <input
                            required
                            autoComplete="tel"
                            className="form-control"
                            id="phone"
                            maxLength={200}
                            minLength={3}
                            pattern="^[\d-]*$"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </label>
                </div>
                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-primary mx-2"
                        type="submit"
                    >
                        Confirm
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateOrderModal;
