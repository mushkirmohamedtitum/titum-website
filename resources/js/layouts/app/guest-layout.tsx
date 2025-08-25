import { AppShell } from '@/components/app-shell';
import { ThemeProvider } from '@/components/ThemeProvider';
import TheNavbar from '@/components/TheNavbar';
import React from 'react';

const GuestLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <AppShell>
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <TheNavbar />
                    {children}
                </ThemeProvider>
            </AppShell>
        </>
    );
};

export default GuestLayout;
