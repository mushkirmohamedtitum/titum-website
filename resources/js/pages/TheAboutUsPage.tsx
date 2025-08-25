import GuestLayout from '@/layouts/app/guest-layout';
import { Head } from '@inertiajs/react';

const TheAboutUsPage = () => {
    return (
        <>
            <Head title="About Us" />
            <GuestLayout>
                <h1>TheAboutUsPage</h1>
            </GuestLayout>
        </>
    );
};

export default TheAboutUsPage;
