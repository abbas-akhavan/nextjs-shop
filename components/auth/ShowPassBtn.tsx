import { Dispatch, SetStateAction } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

type ShowPassBtnProps = {
    showPass: boolean,
    setShowPass: Dispatch<SetStateAction<boolean>>,
    className?: string
}

const ShowPassBtn = ({ showPass, setShowPass, className = '' }: ShowPassBtnProps) => {
    const Icon = showPass ? EyeSlashIcon : EyeIcon;
    
    return (
        <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className={`w-6 h-6 text-slate-400 cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 ${className}`}
            aria-label={showPass ? 'Hide password' : 'Show password'}
            tabIndex={0}
        >
            <Icon className="w-6 h-6" />
        </button>
    );
}

export default ShowPassBtn