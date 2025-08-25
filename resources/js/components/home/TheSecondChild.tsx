import { THEME } from '@/constants/theme';
import { useTheme } from '../ThemeProvider';
import CloudBackup from '../icons/CloudBackup';
import SecureIcon from '../icons/SecureIcon';

const TheSecondChild = () => {
    const { theme } = useTheme();

    return (
        <section className={`w-full px-5 md:px-20 lg:px-32 ${theme === THEME.DARK ? '' : 'bg-logoPurple'}`}>
            <div
                className={`mx-auto flex w-full max-w-[1500px] flex-col items-center gap-x-5 py-14 text-center md:text-left lg:flex-row ${
                    theme === THEME.DARK ? '' : 'bg-logoPurple'
                }`}
            >
                <h3 className={`${theme === 'dark' ? '' : 'text-slate-100'} text-2xl font-semibold`}>
                    Various kinds of feature varience that can help you for ERP management.
                </h3>

                <div className="mt-5 flex flex-col items-start gap-y-4 text-left md:flex-row md:gap-x-8 lg:items-center">
                    {/* Safe and Secure */}
                    <div className="flex items-center gap-x-3">
                        {/* Icon */}
                        <div className={`${theme === 'dark' ? '' : 'rounded-full bg-green-900 p-3'}`}>
                            <div className={`${theme === 'dark' ? '' : 'text-slate-100'} text-xl lg:text-5xl`}>
                                <SecureIcon />
                            </div>
                        </div>

                        {/* Content */}
                        <span className={`${theme === 'dark' ? '' : 'text-slate-100'}`}>Safe and Secure</span>
                    </div>

                    {/* Access from anywhere and anytime */}
                    <div className="flex items-center gap-3">
                        {/* Icon */}
                        <div className={`${theme === THEME.DARK ? '' : 'rounded-full bg-green-900 p-3'}`}>
                            <div className={`${theme === THEME.DARK ? '' : 'text-slate-100'} text-xl lg:text-5xl`}>
                                <CloudBackup />
                            </div>
                        </div>

                        {/* Content */}
                        <span className={`${theme === THEME.DARK ? '' : 'text-slate-100'}`}>Access from anywhere and anytime</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheSecondChild;
