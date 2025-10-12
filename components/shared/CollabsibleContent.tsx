import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

const CollabsibleContent = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const [showContent, setShowContent] = useState(false)
    return (
        <div className='border-b border-slate-700 last:border-0'>
            <div className='flex justify-between select-none cursor-pointer items-center py-3' onClick={() => setShowContent(!showContent)}>
                {title}
                {
                    showContent
                        ? <ChevronDownIcon className='w-4 h-4' />
                        : <ChevronLeftIcon className='w-4 h-4' />
                }

            </div>
            <div className={`pr-3 pb-3 ${showContent ? 'block' : 'hidden'}`}>
                {children}
            </div>
        </div>
    )
}

export default CollabsibleContent