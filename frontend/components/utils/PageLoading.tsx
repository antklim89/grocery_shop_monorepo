
const PageLoading = () => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <div className="spinner-grow spinner-grow-sm mx-2" role="status" style={{ animationDelay: '100ms' }}>
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm mx-2" role="status" style={{ animationDelay: '200ms' }}>
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm mx-2" role="status" style={{ animationDelay: '300ms' }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default PageLoading;
