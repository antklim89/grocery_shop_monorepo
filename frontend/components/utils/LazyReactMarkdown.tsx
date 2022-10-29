import { FC, lazy, Suspense } from 'react';


const ReactMarkdown = lazy(() => import('react-markdown'));

interface LazyReactMarkdownProps {
    children: string;
    className?: string
}

const LazyReactMarkdown: FC<LazyReactMarkdownProps> = ({ children, className }) => {
    return (
        <Suspense
            fallback={(
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
        >
            <ReactMarkdown className={className}>{children}</ReactMarkdown>
        </Suspense>
    );
};

export default LazyReactMarkdown;
