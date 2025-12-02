import { AppShell } from '@/components/app-shell';
import { ThemeProvider } from '@/components/ThemeProvider';
import TheNavbar from '@/components/TheNavbar';
import { IMenu } from '@/interface/Menu';
import React from 'react';

const GuestLayout = ({ children, menus }: { children: React.ReactNode; menus?: IMenu[] }) => {
    return (
        <>
            <AppShell>
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <TheNavbar menus={menus} />
                    {children}
                </ThemeProvider>
            </AppShell>
        </>
    );
};

export default GuestLayout;
