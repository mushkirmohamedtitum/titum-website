import { THEME } from '@/constants/theme';
import { useTheme } from '../ThemeProvider';
import Milestones from './Milestones';

const WhoWeAre = () => {
    const { theme } = useTheme();

    return (
        <section
            className={`w-full px-5 pt-24 pb-14 md:px-20 lg:px-32 ${
                theme === THEME.DARK ? 'bg-secondaryDarkBlack' : 'bg-slate-100'
            } flex items-start justify-between gap-x-5`}
        >
            <div className="mx-auto flex w-full max-w-[1500px] flex-col justify-between space-y-10 lg:flex-row lg:space-y-0">
                <div className="lg:w-[45%]">
                    <h2 className={`text-3xl font-bold md:text-5xl ${theme === THEME.DARK ? 'text-white' : 'text-logoPurple'}`}>Who We Are...</h2>

                    <p className="mt-5 pr-4 text-lg">
                        Titum (Pvt) Ltd. is established in 2018 by a team of young expert software professionals. We are enable to out clients to
                        address challenges and enhance their business by designing top notch software solutions tailored to their needs...
                    </p>

                    <button
                        type="button"
                        className={`mt-10 inline-flex items-center justify-center rounded-md ${
                            theme === THEME.DARK ? 'bg-white' : 'bg-logoPurple'
                        } px-10 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/50 transition-all hover:scale-[1.02] focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none`}
                    >
                        Learn more
                    </button>
                </div>

                <div className="lg:w-[45%]">
                    <Milestones />
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
