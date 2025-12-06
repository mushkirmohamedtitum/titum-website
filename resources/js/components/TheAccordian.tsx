import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { THEME } from '@/constants/theme';
import { Link } from '@inertiajs/react';
import DetailLayout from './icons/DetailLayout';
import { useTheme } from './ThemeProvider';
import TimeAgo from './TimeAgo';

const TheAccordian = () => {
    const { theme } = useTheme();

    return (
        <Accordion
            type="single"
            collapsible
            className={`w-full rounded-md border px-3 transition-all duration-300 ease-in-out ${
                theme == THEME.DARK ? 'hover:bg-secondaryDarkBlack hover:shadow-xl' : 'border-gray-200 bg-white hover:shadow-xl'
            }`}
        >
            <AccordionItem value="1">
                <div>
                    <AccordionTrigger className={`${theme == THEME.DARK ? '' : 'text-logoPurple'}`}>Senior Inventory Specialist</AccordionTrigger>
                    <ul className="-mt-2 flex items-center space-x-3 pb-3">
                        <li>
                            <small className="mr-1 text-[0.7rem]">📌</small>
                            <small className={`${theme == THEME.DARK ? 'text-slate-300' : 'text-green-700'}`}>Full Time</small>
                        </li>
                        <li>
                            <small className="mr-1 text-[0.7rem]">📌</small>
                            <small
                                className={`${theme == THEME.DARK ? 'text-slate-300' : 'text-green-700 selection:bg-logoPurple selection:text-slate-200'}`}
                            >
                                On Site
                            </small>
                        </li>

                        <li>
                            <small className="mr-1 text-[0.7rem]">📌</small>
                            <small
                                className={`${theme == THEME.DARK ? 'text-slate-300' : 'text-green-700 selection:bg-logoPurple selection:text-slate-200'}`}
                            >
                                Posted {<TimeAgo timeStamp="2025-12-03 10:25:01" />}
                            </small>
                        </li>
                    </ul>
                </div>
                <AccordionContent className="mt-2">
                    <p
                        className={` ${theme == THEME.DARK ? 'text-gray-500 selection:text-slate-50' : 'text-logoPurple_400 selection:bg-logoPurple selection:text-slate-200'}`}
                    >
                        We are looking for a passionate Software Engineer (Laravel) to join our development team. The ideal candidate has strong
                        experience in backend development using Laravel and modern PHP practices, and enjoys building scalable, secure, and
                        high-performance applications.
                    </p>

                    <Link
                        href={'/'}
                        className={`mt-3 flex w-fit items-center space-x-1 rounded ${theme == THEME.DARK ? 'bg-secondaryBlack text-slate-400 transition-all hover:text-slate-50' : 'bg-green-100 text-green-700 transition-all hover:bg-green-700 hover:text-slate-50'} px-3 py-1.5 text-sm`}
                    >
                        <span>{<DetailLayout />}</span>
                        <span>Details</span>
                    </Link>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default TheAccordian;
