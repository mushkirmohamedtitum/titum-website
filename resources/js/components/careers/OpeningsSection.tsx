import { THEME } from '@/constants/theme';
import TheAccordian from '../TheAccordian';
import { useTheme } from '../ThemeProvider';

const OpeningsSection = () => {
    const { theme } = useTheme();

    return (
        <div className="p-5">
            <h4 className={`mt-10 text-center text-2xl font-semibold ${theme == THEME.DARK ? '' : 'text-logoPurple'}`}>Our Current Openings</h4>

            <div className={`mx-auto mt-2 h-[3px] w-16 rounded-full ${theme == THEME.DARK ? 'bg-white' : 'bg-logoPurple'}`}></div>

            <div className="mt-7 space-y-5">
                {[1, 2, 3, 4, 5].map((num: number) => {
                    return <TheAccordian key={num} />;
                })}
            </div>
        </div>
    );
};

export default OpeningsSection;
