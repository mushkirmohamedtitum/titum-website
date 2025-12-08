import { THEME } from '@/constants/theme';
import { ICareersHeroMainContent } from '@/interface/careers/HeroMainContent';
import { FunctionComponent } from 'react';
import { useTheme } from '../ThemeProvider';

interface ITheHeroSection {
    heroMainContent?: ICareersHeroMainContent;
}

const TheHeroSection: FunctionComponent<ITheHeroSection> = ({ heroMainContent }) => {
    const { theme } = useTheme();

    return (
        <section className="relative mt-[7.9rem] flex min-h-[100vh] w-full items-center justify-center px-5 md:px-20 lg:px-32">
            {/* Video background */}
            <iframe
                className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
                src="https://www.youtube.com/embed/pW8TJq3NFhc?autoplay=1&mute=1&loop=1&playlist=pW8TJq3NFhc&controls=0&modestbranding=1"
                title="Titum intro video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />

            {/* Dark overlay */}
            <div className={`absolute inset-0 ${theme === THEME.DARK ? 'bg-black/90' : 'bg-white/92'} z-10`} />

            {/* Content */}
            <div className={`relative z-20 w-full max-w-[1500px] rounded-md px-5 py-10 ${theme === THEME.DARK ? '' : ''}`}>
                <h2
                    className={`${
                        theme === THEME.DARK
                            ? 'text-white selection:bg-white selection:text-black'
                            : 'text-logoPurple selection:bg-green-800 selection:text-white'
                    } text-center text-3xl font-[800] md:text-5xl md:leading-[4.3rem]`}
                >
                    {heroMainContent?.hero_main_content ??
                        'Titum is here to make it easier and more efficient for you to grow your business with trusted solutions and support.'}
                </h2>

                <span
                    className={`${
                        theme === THEME.DARK ? 'mt-8 text-slate-300 selection:bg-white selection:text-black' : 'mt-5 text-green-800 italic'
                    } block text-center font-semibold`}
                >
                    Delivering solutions today, built with quality that empowers your tomorrow.
                </span>

                <div className="mt-5 flex justify-center">
                    <button
                        type="button"
                        className={`inline-flex items-center justify-center rounded-md ${
                            theme === THEME.DARK ? 'bg-white' : 'bg-logoPurple'
                        } px-10 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/50 transition-all hover:scale-[1.02] focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none`}
                    >
                        Let&apos;s talk
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TheHeroSection;
