import TheHeroSection from '@/components/home/TheHeroSection';
import TheSecondChild from '@/components/home/TheSecondChild';
import WhoWeAre from '@/components/home/WhoWeAre';
import { ICareersHeroMainContent } from '@/interface/careers/HeroMainContent';
import GuestLayout from '@/layouts/app/guest-layout';
import { Head } from '@inertiajs/react';
import { FunctionComponent } from 'react';

interface ITheHomePage {
    data?: ICareersHeroMainContent;
}

const TheHomePage: FunctionComponent<ITheHomePage> = ({ data }) => {
    return (
        <>
            <Head title="Home" />

            <GuestLayout>
                <TheHeroSection heroMainContent={data} />

                <TheSecondChild />

                <WhoWeAre />
            </GuestLayout>
        </>
    );
};

export default TheHomePage;
