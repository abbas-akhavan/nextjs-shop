'use client'
import React, { Dispatch, SetStateAction } from 'react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './dialog';
interface MobileBottomModalProp {
    title?: string;
    open: boolean;
    onOpenChange: Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode;
    fill?: boolean;
    triggerContent: string | React.ReactNode;
}
const MobileBottomModal = ({ title, open, onOpenChange, children, fill, triggerContent }: MobileBottomModalProp) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger>{triggerContent}</DialogTrigger>
            <DialogContent
                className={`flex flex-col bg-slate-800 border-0 !duration-300 [&>button]:left-4 [&>button]:right-auto bottom-0 top-auto translate-y-0 left-0 translate-x-0 w-screen max-w-full data-[state=open]:animate-in data-[state=closed]:!animate-out data-[state=closed]:!fade-out-1 data-[state=open]:!fade-in-1 data-[state=closed]:!zoom-out-100 data-[state=open]:!zoom-in-100 data-[state=closed]:!slide-out-to-left-0 data-[state=open]:!slide-in-from-left-0 data-[state=open]:!slide-in-from-bottom-full data-[state=closed]:!slide-out-to-bottom-full ${fill ? 'h-screen' : ''}`}
            >
                {
                    title && <DialogTitle>{title}</DialogTitle>
                }
                {
                    children
                }
            </DialogContent>
        </Dialog>
    )
}

export default MobileBottomModal