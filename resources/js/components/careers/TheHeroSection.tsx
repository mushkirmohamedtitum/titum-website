import { THEME } from '@/constants/theme';
import { useTheme } from '../ThemeProvider';

const TheHeroSection = () => {
    const { theme } = useTheme();

    // console.log(theme);

    return (
        <section className="relative mt-[7.9rem] flex min-h-[30vh] w-full items-center justify-center px-5 md:px-20 lg:px-32">
            {/* <div className="mx-auto w-full max-w-[1500px]"> */}
            <div className="mt-36">
                <h4 className={`text-center text-4xl font-extrabold ${theme == THEME.DARK ? '' : 'text-logoPurple'}`}>
                    Join our team of creators & dreamers
                </h4>

                <span className={`block p-5 text-center xl:px-80 ${theme == THEME.DARK ? 'text-gray-500' : 'text-green-700'}`}>
                    Our philosophy is simple - hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
                </span>
            </div>
        </section>
    );
};

export default TheHeroSection;
