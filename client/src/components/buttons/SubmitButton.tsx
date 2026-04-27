import type { FC } from "react";
import Spinner from "../Spinner/Spinner";

interface SubmitButtonProps {
    label: string;
    newClassName?: string;
    className?: string;
    loading?: boolean
    loadingLabel?: string
}
const SubmitButton: FC<SubmitButtonProps> = ({ label, newClassName, className, loading, loadingLabel }) => {
    return (
        <>
            <button type="submit" className={` ${newClassName ? newClassName : `px-4 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-medium cursor-pointer rounded-lg shadow-lg disabled:opacity-80 disabled:cursor-not-allowed ${className}`
                }`}
                disabled={loading}

            >
                {loading ? (
                    <span className="inline-flex items-center justify-center gap-2">
                        <Spinner size="xs" />
                        <span>{loadingLabel}</span>
                    </span>
                ) : (
                    label
                )}
            </button>
        </>
    )
}

export default SubmitButton