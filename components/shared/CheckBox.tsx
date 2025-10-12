import React from 'react'
import { Label } from '../ui/label'

const CheckBox = () => {
    return (
        <div className='pb-4 last:pb-0 cursor-pointer'>
            {/* <input className='hidden peer' onChange={ } type='checkbox' id='mobile' value='1' /> */}
            <Label htmlFor='mobile' className='flex gap-2 before:content-[""] before:size-4 before:rounded-sm before:border before:border-slate-600  peer-checked:before:bg-slate-300'>
                موبایل
            </Label>
        </div>
    )
}

export default CheckBox