import TheHeroSection from '@/components/home/TheHeroSection';
import TheSecondChild from '@/components/home/TheSecondChild';
import WhoWeAre from '@/components/home/WhoWeAre';
import { IMenu } from '@/interface/Menu';
import GuestLayout from '@/layouts/app/guest-layout';
import { Head } from '@inertiajs/react';
import { FunctionComponent } from 'react';

interface ITheHomePage {
    menus?: IMenu[];
}

const TheHomePage: FunctionComponent<ITheHomePage> = ({ menus }) => {
    console.log(menus);

    return (
        <>
            <Head title="Home" />

            <GuestLayout menus={menus}>
                <TheHeroSection />

                <TheSecondChild />

                <WhoWeAre />
            </GuestLayout>
        </>
    );
};

export default TheHomePage;
