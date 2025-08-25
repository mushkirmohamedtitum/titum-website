import TheHeroSection from '@/components/home/TheHeroSection';
import TheSecondChild from '@/components/home/TheSecondChild';
import WhoWeAre from '@/components/home/WhoWeAre';
import GuestLayout from '@/layouts/app/guest-layout';

const TheHomePage = () => {
    return (
        <>
            <GuestLayout>
                <TheHeroSection />

                <TheSecondChild />

                <WhoWeAre />
            </GuestLayout>
        </>
    );
};

export default TheHomePage;
