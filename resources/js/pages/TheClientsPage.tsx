import GuestLayout from '@/layouts/app/guest-layout';
import { Head } from '@inertiajs/react';

const TheClientsPage = () => {
    return (
        <>
            <Head title="Our Clients" />

            <GuestLayout>
                <h1>TheClientsPage</h1>
            </GuestLayout>
        </>
    );
};

export default TheClientsPage;
