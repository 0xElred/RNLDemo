import { useEffect, type FC } from "react";

interface ToastMessageProps {
    message: string;
    isFailed?: boolean;
    isVisible: boolean;
    onClose: () => void;
}

const ToastMessage: FC<ToastMessageProps> = ({
    message,
    isFailed = false,
    isVisible,
    onClose,
}) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    const failed = isFailed === true;

    return (
        <>
            {failed ? (
                <div
                    className={`fixed top-40 right-0 z-50 flex w-full max-w-xs items-center rounded-lg border border-red-200 bg-red-100 p-4 m-4 text-red-900 shadow-lg transition-opacity duration-300 md:right-4 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    role="alert"
                >
                    <div
                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-200 text-red-600 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-10"}`}
                    >
                        <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="sr-only">Error icon</span>
                    </div>
                    <div className="ms-3 text-sm font-normal">{message}</div>
                </div>
            ) : (
                <div
                    className={`fixed top-40 right-0 z-50 flex w-full max-w-xs items-center rounded-lg border border-green-200 bg-green-100 p-4 m-4 text-gray-900 shadow-lg transition-opacity duration-300 md:right-4 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    role="alert"
                >
                    <div
                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-200 text-green-600 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-10"}`}
                    >
                        <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="sr-only">Success icon</span>
                    </div>
                    <div className="ms-3 text-sm font-normal">{message}</div>
                </div>
            )}
        </>
    );
};

export default ToastMessage;
