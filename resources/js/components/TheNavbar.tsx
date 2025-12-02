import { THEME } from '@/constants/theme';
import type { IMenu } from '@/interface/Menu';
import { Link, usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import CloseIcon from '../components/icons/CloseIcon';
import HumburgerMenu from '../components/icons/HumburgerMenu';
import { useTheme } from '../components/ThemeProvider';
import { ModeToggle } from '../components/Toggle';

const TheNavbar = () => {
    const { theme } = useTheme();

    // console.log();

    const { menus } = usePage().props;

    const [toggle, setToggle] = useState(false);

    const panelVariants = {
        closed: {
            opacity: 0,
            y: -12, // slide slightly upward when hidden
            pointerEvents: 'none',
            transition: { duration: 0.25, ease: 'easeInOut' },
        },
        open: {
            opacity: 1,
            y: 0,
            pointerEvents: 'auto',
            transition: {
                type: 'spring',
                stiffness: 280,
                damping: 24,
                mass: 0.9,
            },
        },
    };

    return (
        <section className="relative z-50 w-full">
            <section
                className={`gentium-plus-regular fixed top-0 right-0 left-0 mx-auto w-full p-8 shadow-md backdrop-blur-xl backdrop-filter lg:px-20`}
            >
                <div
                    className={`mx-auto flex max-w-[1500px] items-center justify-between rounded-lg ${theme == THEME.DARK ? 'bg-secondaryDarkBlack' : 'bg-slate-100'} px-6 py-3`}
                >
                    {/* Logo */}
                    <Link href={'/'} className="w-20 lg:w-28">
                        <img src={`${theme === THEME.DARK ? '/titum-logo-light.png' : '/titum-logo.png'}`} alt="Titum (Pvt) Ltd Logo" />
                    </Link>

                    {/* Menus - Desktop Layout */}
                    <ul className="hidden items-center gap-x-3 lg:flex">
                        {menus?.map((menu: IMenu) => {
                            // console.log(menu);

                            return (
                                <li key={menu.id}>
                                    <Link
                                        className={`${
                                            theme === THEME.DARK
                                                ? 'duration-300 hover:border hover:border-slate-700 hover:bg-menuBgColorDarkTheme'
                                                : 'hover:bg-logoPurple hover:text-slate-100 hover:duration-300'
                                        } rounded-md px-3 py-2`}
                                        href={`${menu.slug}`}
                                    >
                                        {menu.menu_label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* For Desktop Layout */}
                    <div className="hidden items-center gap-x-5 lg:flex">
                        <ModeToggle />

                        <button
                            type="button"
                            className={`${
                                theme === THEME.DARK ? 'bg-white' : 'bg-logoPurple'
                            } inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/50 transition-all hover:scale-[1.02] focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none`}
                        >
                            Let's talk
                        </button>
                    </div>

                    {/*  Nav menu button & Theme button - Mobile Layout */}
                    <div className="flex items-center lg:hidden">
                        <ModeToggle />

                        <button
                            type="button"
                            className={`${theme === THEME.DARK ? '' : 'text-logoPurple'} text-xl`}
                            onClick={() => setToggle(!toggle)}
                        >
                            {toggle ? <CloseIcon /> : <HumburgerMenu />}
                        </button>
                    </div>

                    {/* Navigation Menus - Mobile Layout */}
                    {toggle && (
                        <AnimatePresence>
                            <motion.div
                                variants={panelVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                className={`${
                                    theme === THEME.DARK ? 'bg-primaryBlack' : 'bg-white'
                                } absolute top-28 right-0 left-0 flex flex-col items-start gap-y-3 py-8 pl-10 shadow-lg backdrop-blur-lg backdrop-filter lg:hidden`}
                            >
                                {/* <li>
            <ModeToggle />
          </li> */}
                                {menus?.map((menu: IMenu) => {
                                    // console.log(menu);

                                    return (
                                        <li key={menu.id}>
                                            <Link
                                                onClick={() => setToggle(false)}
                                                className={`${
                                                    theme === THEME.DARK
                                                        ? 'duration-300 hover:border hover:border-slate-700 hover:bg-menuBgColorDarkTheme'
                                                        : 'hover:bg-logoPurple hover:text-slate-100 hover:duration-300'
                                                } rounded-md px-3 py-2`}
                                                href={`${menu.slug}`}
                                            >
                                                {menu.menu_label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    )}
                </div>
            </section>
        </section>
    );
};

export default TheNavbar;
