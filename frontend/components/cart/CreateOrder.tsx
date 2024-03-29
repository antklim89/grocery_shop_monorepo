'use client';
import { Reducer, useReducer } from 'react';

import { IUser } from '~/types';


const CreateOrder = (user: IUser): JSX.Element => {
    const [{ name, surname, address, email, phone }, setValues] = useReducer<Reducer<IUser, Partial<IUser>>>(
        (oldState, newState) => ({ ...oldState, ...newState }),
        user,
    );

    return (
        <div className="container">
            <form className="row">
                <div className="mb-3 col-sm-6 col-12">
                    <label className="w-100">
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
                            value={name || ''}
                            onChange={(e) => setValues({ name: e.target.value || '' })}
                        />
                    </label>
                </div>
                <div className="mb-3 col-sm-6 col-12">
                    <label className="w-100">
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
                            value={surname || ''}
                            onChange={(e) => setValues({ surname: e.target.value || '' })}
                        />
                    </label>
                </div>
                <div className="mb-3 col-12">
                    <label className="w-100">
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
                            value={email || ''}
                            onChange={(e) => setValues({ email: e.target.value || '' })}
                        />
                    </label>
                </div>
                <div className="mb-3 col-12">
                    <label className="w-100">
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
                            value={address || ''}
                            onChange={(e) => setValues({ address: e.target.value || '' })}
                        />
                    </label>
                </div>
                <div className="mb-3 col-12">
                    <label className="w-100">
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
                            value={phone || ''}
                            onChange={(e) => setValues({ phone: e.target.value || '' })}
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

export default CreateOrder;
