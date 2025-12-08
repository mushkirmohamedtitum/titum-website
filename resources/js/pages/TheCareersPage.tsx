import OpeningsSection from '@/components/careers/OpeningsSection';
import TheHeroSection from '@/components/careers/TheHeroSection';
import { ICareersHeroMainContent } from '@/interface/careers/HeroMainContent';
import GuestLayout from '@/layouts/app/guest-layout';
import { Head } from '@inertiajs/react';
import { FunctionComponent } from 'react';

interface ITheCareerPage {
    data?: ICareersHeroMainContent;
}

const TheCareersPage: FunctionComponent<ITheCareerPage> = ({ data }) => {
    return (
        <>
            <Head title="Careers" />

            <GuestLayout>
                <div className="mx-auto w-full max-w-[1500px] lg:px-16">
                    <TheHeroSection heroMainContent={data} />

                    <OpeningsSection />
                </div>
            </GuestLayout>
        </>
    );
};

export default TheCareersPage;
