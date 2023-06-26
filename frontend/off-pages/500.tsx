import React from 'react';

import Seo from '~/components/utils/Seo';


const ServerErrorPage = () => {
    return (
        <>
            <Seo title="Unexpected Server Error" />
            <div className="position-absolute top-50 start-50 translate-middle text-center">
                <span className="h1">
                    500 | UNEXPECTED SERVER ERROR
                </span>
                <br />
                <button className="btn btn-primary" type="button" onClick={() => location.reload()}>RELOAD</button>
            </div>
        </>
    );
};

export default ServerErrorPage;
