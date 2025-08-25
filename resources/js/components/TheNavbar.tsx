import type { Menu } from '@/interface/Menu';
import { menu } from '@/utils/menu';
import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import CloseIcon from './icons/CloseIcon';
import HumburgerMenu from './icons/HumburgerMenu';
import { useTheme } from './ThemeProvider';
import { ModeToggle } from './Toggle';

const TheNavbar = () => {
    const { theme } = useTheme();

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
                stiffness: 280, // snappy but not bouncy
                damping: 24, // smooth stop
                mass: 0.9,
            },
        },
    };

    return (
        <section className="relative z-50 w-full">
            <section className="gentium-plus-regular fixed top-0 right-0 left-0 mx-auto w-full px-10 py-8 shadow-md backdrop-blur-xl backdrop-filter lg:px-20">
                <div className="mx-auto flex max-w-[1500px] items-center justify-between">
                    {/* Logo */}
                    <Link href={'/'} className="w-20 lg:w-28">
                        <img src={`${theme === 'dark' ? '/titum-logo-light.png' : '/titum-logo.png'}`} alt="Titum (Pvt) Ltd Logo" />
                    </Link>

                    {/* Menus - Desktop Layout */}
                    <ul className="hidden items-center gap-x-3 lg:flex">
                        {menu.map((menu: Menu) => {
                            // console.log(menu);

                            return (
                                <li key={menu.id}>
                                    <Link
                                        className={`${
                                            theme === 'dark'
                                                ? 'duration-300 hover:border hover:border-slate-700 hover:bg-menuBgColorDarkTheme'
                                                : 'hover:bg-logoPurple hover:text-slate-100 hover:duration-300'
                                        } rounded-md px-3 py-2`}
                                        href={`${menu.link}`}
                                    >
                                        {menu.label}
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
                                theme === 'dark' ? 'bg-white' : 'bg-logoPurple'
                            } inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/50 transition-all hover:scale-[1.02] focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none`}
                        >
                            Let's talk
                        </button>
                    </div>

                    {/*  Nav menu button & Theme button - Mobile Layout */}
                    <div className="flex items-center lg:hidden">
                        <ModeToggle />

                        <button type="button" className={`${theme === 'dark' ? '' : 'text-logoPurple'} text-xl`} onClick={() => setToggle(!toggle)}>
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
                                    theme === 'dark' ? 'bg-primaryBlack' : 'bg-white'
                                } absolute top-20 right-0 left-0 flex flex-col items-start gap-y-3 py-8 pl-10 shadow-lg backdrop-blur-lg backdrop-filter lg:hidden`}
                            >
                                {/* <li>
            <ModeToggle />
          </li> */}
                                {menu.map((menu: Menu) => {
                                    // console.log(menu);

                                    return (
                                        <li key={menu.id}>
                                            <Link
                                                onClick={() => setToggle(false)}
                                                className={`${
                                                    theme === 'dark'
                                                        ? 'duration-300 hover:border hover:border-slate-700 hover:bg-menuBgColorDarkTheme'
                                                        : 'hover:bg-logoPurple hover:text-slate-100 hover:duration-300'
                                                } rounded-md px-3 py-2`}
                                                href={`${menu.link}`}
                                            >
                                                {menu.label}
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
