import React, { Dispatch, SetStateAction } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
type ShowPassBtnProps = {
    showPass: boolean,
    setShowPass: Dispatch<SetStateAction<boolean>>,
    className?: string
}

const ShowPassBtn = ({ showPass, setShowPass, className = '' }: ShowPassBtnProps) => {
    return (
        <>
            {
                showPass
                    ? <EyeSlashIcon onClick={() => setShowPass(!showPass)} className={`w-6 h-6 text-slate-400 cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 ${className}`} />
                    : <EyeIcon onClick={() => setShowPass(!showPass)} className={`w-6 h-6 text-slate-400 cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 ${className}`} />
            }
        </>
    )
}

export default ShowPassBtn