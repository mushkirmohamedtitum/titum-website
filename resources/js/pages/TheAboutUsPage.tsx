import { useTheme } from '@/components/ThemeProvider';
import { THEME } from '@/constants/theme';
import GuestLayout from '@/layouts/app/guest-layout';
import { Head } from '@inertiajs/react';

const TheAboutUsPage = () => {
    const { theme } = useTheme();

    // console.log(theme);

    return (
        <>
            <Head title="About Us" />
            <GuestLayout>
                <section className="relative mt-[8rem] mr-0 py-24 lg:mr-5 xl:mr-0">
                    <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
                        <div className="grid w-full grid-cols-1 items-center justify-start gap-10 lg:grid-cols-2 xl:gap-12">
                            <div className="inline-flex w-full flex-col items-center justify-center gap-10 lg:items-start">
                                <div className="flex w-full flex-col items-start justify-center gap-8">
                                    <div className="flex flex-col items-center justify-start gap-4 lg:items-start">
                                        {/* <h6 className="text-base leading-relaxed font-normal text-gray-400">About Us</h6> */}
                                        <div className="flex w-full flex-col items-center justify-start gap-3 lg:items-start">
                                            <h2
                                                className={`font-manrope text-center text-4xl leading-normal font-bold ${theme == THEME.DARK ? '' : ''} lg:text-start`}
                                            >
                                                Who we are read to know about us
                                            </h2>
                                            <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                                                Titum (PVT) Ltd. is established in 2018 by a team of young expert software professionals. We are
                                                enable to our clients to address challenges and enhance their business by designing top notch software
                                                solutions tailored to their needs.
                                            </p>

                                            <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                                                Our team has more than 10 years industrial experiences in the software development, ICT support,
                                                Management, and Business Consultancy, BPO, KPO and R&D including professional, and academic qualified
                                                staffs.
                                            </p>

                                            <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                                                We emphasis on quality of the products and services to market with human resources.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex w-full flex-col items-start justify-center gap-6">
                                        <div className="grid w-full grid-cols-1 items-center justify-start gap-8 md:grid-cols-2">
                                            <div className="inline-flex h-full w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 p-3.5 transition-all duration-700 ease-in-out hover:border-gray-400">
                                                <h4 className={`font-manrope text-2xl leading-9 font-bold ${theme == THEME.DARK ? '' : ''}`}>
                                                    8+ Years
                                                </h4>
                                                <p className="text-base leading-relaxed font-normal text-gray-500">
                                                    Influencing Digital Landscapes Together
                                                </p>
                                            </div>
                                            <div className="inline-flex h-full w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 p-3.5 transition-all duration-700 ease-in-out hover:border-gray-400">
                                                <h4 className="font-manrope text-2xl leading-9 font-bold">125+ Projects</h4>
                                                <p className="text-base leading-relaxed font-normal text-gray-500">
                                                    Excellence Achieved Through Success
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid h-full w-full grid-cols-1 items-center justify-start gap-8 md:grid-cols-2">
                                            {/* <div className="inline-flex w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 p-3.5 transition-all duration-700 ease-in-out hover:border-gray-400">
                                                <h4 className="font-manrope text-2xl leading-9 font-bold text-gray-900">26+ Awards</h4>
                                                <p className="text-base leading-relaxed font-normal text-gray-500">
                                                    Our Dedication to Innovation Wins Understanding
                                                </p>
                                            </div> */}
                                            <div className="inline-flex h-full w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 p-3.5 transition-all duration-700 ease-in-out hover:border-gray-400">
                                                <h4 className="font-manrope text-2xl leading-9 font-bold">99% Happy Clients</h4>
                                                <p className="text-base leading-relaxed font-normal text-gray-500">
                                                    Mirrors our Focus on Client Satisfaction.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full items-start justify-center lg:justify-start">
                                <div className="relative h-full w-full rounded-3xl border-gray-200 sm:h-[646px] sm:w-[564px] sm:border sm:bg-gray-100">
                                    <img
                                        className="h-full w-full rounded-3xl object-cover sm:mt-5 sm:ml-5"
                                        src="https://pagedone.io/asset/uploads/1717742431.png"
                                        alt="about Us image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our team */}
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <h2 className="font-manrope text-center text-5xl font-bold text-gray-900">Our team </h2>
                        </div>
                        <div className="mx-auto grid max-w-xl grid-cols-1 gap-8 min-[500px]:grid-cols-2 md:max-w-3xl md:grid-cols-6 lg:max-w-full lg:grid-cols-5">
                            <div className="group block md:col-span-2 lg:col-span-1">
                                <div className="relative mb-6">
                                    <img
                                        src="https://pagedone.io/asset/uploads/1696238374.png"
                                        alt="Antonio image"
                                        className="mx-auto h-40 w-40 rounded-full border border-solid border-transparent object-cover transition-all duration-500 group-hover:border-indigo-600"
                                    />
                                </div>
                                <h4 className="mb-2 text-center text-xl font-semibold text-gray-900 capitalize transition-all duration-500 group-hover:text-indigo-600">
                                    Antonio Roberto{' '}
                                </h4>
                                <span className="block text-center text-gray-500 transition-all duration-500 group-hover:text-gray-900">Founder</span>
                            </div>
                            <div className="group block md:col-span-2 lg:col-span-1">
                                <div className="relative mb-6">
                                    <img
                                        src="https://pagedone.io/asset/uploads/1696238396.png"
                                        alt="Patricia image"
                                        className="mx-auto h-40 w-40 rounded-full border border-solid border-transparent object-cover transition-all duration-500 group-hover:border-indigo-600"
                                    />
                                </div>
                                <h4 className="mb-2 text-center text-xl font-semibold text-gray-900 capitalize transition-all duration-500 group-hover:text-indigo-600">
                                    Patricia Angely{' '}
                                </h4>
                                <span className="block text-center text-gray-500 transition-all duration-500 group-hover:text-gray-900">
                                    Co-Founder
                                </span>
                            </div>
                            <div className="group group md:col-span-2 lg:col-span-1">
                                <div className="relative mb-6">
                                    <img
                                        src="	https://pagedone.io/asset/uploads/1696238411.png"
                                        alt="Jerom image"
                                        className="mx-auto h-40 w-40 rounded-full border border-solid border-transparent object-cover transition-all duration-500 group-hover:border-indigo-600"
                                    />
                                </div>
                                <h4 className="mb-2 text-center text-xl font-semibold text-gray-900 capitalize transition-all duration-500 group-hover:text-indigo-600">
                                    Jerom Bell{' '}
                                </h4>
                                <span className="block text-center text-gray-500 transition-all duration-500 group-hover:text-gray-900">
                                    Chairman
                                </span>
                            </div>
                            <div className="group block md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-4">
                                <div className="relative mb-6">
                                    <img
                                        src="	https://pagedone.io/asset/uploads/1696238425.png"
                                        alt="Yasmine image"
                                        className="mx-auto h-40 w-40 rounded-full border border-solid border-transparent object-cover transition-all duration-500 group-hover:border-indigo-600"
                                    />
                                </div>
                                <h4 className="mb-2 text-center text-xl font-semibold text-gray-900 capitalize transition-all duration-500 group-hover:text-indigo-600">
                                    Yasmine Tano{' '}
                                </h4>
                                <span className="block text-center text-gray-500 transition-all duration-500 group-hover:text-gray-900">CEO</span>
                            </div>
                            <div className="group mx-auto block min-[500px]:col-span-2 md:col-span-2 lg:col-span-1">
                                <div className="relative mb-6">
                                    <img
                                        src="https://pagedone.io/asset/uploads/1696238446.png"
                                        alt="Martin image"
                                        className="mx-auto h-40 w-40 rounded-full border border-solid border-transparent object-cover transition-all duration-500 group-hover:border-indigo-600"
                                    />
                                </div>
                                <h4 className="mb-2 text-center text-xl font-semibold text-gray-900 capitalize transition-all duration-500 group-hover:text-indigo-600">
                                    Martin Darbys
                                </h4>
                                <span className="block text-center text-gray-500 transition-all duration-500 group-hover:text-gray-900">
                                    Product Manager
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </section>
            </GuestLayout>
        </>
    );
};

export default TheAboutUsPage;
