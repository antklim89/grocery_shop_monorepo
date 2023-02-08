import { FC, memo } from 'react';

import ChangePassword from './ChangePassword';
import UserInformationForm from './UserInformationForm';

import { useAuthStore } from '~/store';
import { useBootstrap } from '~/utils';


const Profile: FC = () => {
    useBootstrap('Tab');
    const user = useAuthStore((state) => state.user);

    if (!user) return null;
    return (
        <div className="container">
            <h1 className="text-center mb-4">
                {user.username} profile
            </h1>

            <div className="row">
                <nav className="col-12 col-md-4">
                    <div className="nav nav-pills flex-md-column" id="nav-tab" role="tablist">
                        <button
                            aria-controls="user-info"
                            aria-selected="true"
                            className="nav-link active"
                            data-bs-target="#user-info"
                            data-bs-toggle="tab"
                            id="user-info-tab"
                            role="tab"
                            type="button"
                        >
                            Info
                        </button>
                        <button
                            aria-controls="change-profile"
                            aria-selected="false"
                            className="nav-link"
                            data-bs-target="#change-profile"
                            data-bs-toggle="tab"
                            id="change-profile-tab"
                            role="tab"
                            type="button"
                        >
                            Change password
                        </button>
                    </div>
                </nav>

                <div className="tab-content col-12 col-md-8" id="nav-tabContent">
                    <div
                        aria-labelledby="user-info-tab"
                        className="tab-pane fade show active"
                        id="user-info"
                        role="tabpanel"
                    >
                        <UserInformationForm {...user} />
                    </div>
                    <div
                        aria-labelledby="change-profile-tab"
                        className="tab-pane fade"
                        id="change-profile"
                        role="tabpanel"
                    >
                        <ChangePassword />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default memo(Profile);
