import OpeningsSection from '@/components/careers/OpeningsSection';
import TheHeroSection from '@/components/careers/TheHeroSection';
import GuestLayout from '@/layouts/app/guest-layout';
import { Head } from '@inertiajs/react';

const TheCareersPage = () => {
    return (
        <>
            <Head title="Careers" />

            <GuestLayout>
                <div className="mx-auto w-full max-w-[1500px] lg:px-16">
                    <TheHeroSection />

                    <OpeningsSection />
                </div>
            </GuestLayout>
        </>
    );
};

export default TheCareersPage;
