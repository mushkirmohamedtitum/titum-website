import TheHeroSection from '@/components/home/TheHeroSection';
import TheSecondChild from '@/components/home/TheSecondChild';
import WhoWeAre from '@/components/home/WhoWeAre';
import GuestLayout from '@/layouts/app/guest-layout';
import { Head } from '@inertiajs/react';

const TheHomePage = () => {
    return (
        <>
            <Head title="Home" />

            <GuestLayout>
                <TheHeroSection />

                <TheSecondChild />

                <WhoWeAre />
            </GuestLayout>
        </>
    );
};

export default TheHomePage;
