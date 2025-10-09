import React from 'react'
export interface MobileNavbarItem {
    title: string;
    icon: React.ReactNode;
    activeIcon: React.ReactNode;
    url: string;
}