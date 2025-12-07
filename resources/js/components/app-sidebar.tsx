import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '@/components/ui/sidebar';
import { THEME } from '@/constants/theme';
import { ILevelOneNavigation, IMainNavigation } from '@/interface/AdminSideMenu';
import { NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import * as React from 'react';
import { NavFooter } from './nav-footer';
import { NavUser } from './nav-user';
import { useTheme } from './ThemeProvider';

const footerNavItems: NavItem[] = [];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { theme } = useTheme();
    const { adminNavMenus } = usePage().props as { adminNavMenus?: IMainNavigation[] };

    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link className="h-40" href="/dashboard" prefetch>
                                <img src={`${theme == THEME.DARK ? '/titum-logo-light.png' : '/titum-logo.png'}`} alt="Titum Logo Image" />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="gap-0">
                {adminNavMenus?.map((menu: IMainNavigation) => (
                    <Collapsible key={menu.id} asChild>
                        <div className="group/collapsible">
                            <SidebarGroup>
                                <SidebarGroupLabel
                                    asChild
                                    className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                >
                                    <CollapsibleTrigger>
                                        {(menu.level_one_navigation?.length ?? 0) > 0 ? (
                                            <span>{menu.label}</span>
                                        ) : (
                                            <Link href={`/admin${menu.path}`} className={`${theme == THEME.DARK ? '' : ''}`}>
                                                {menu.label}
                                            </Link>
                                        )}
                                        {(menu.level_one_navigation?.length ?? 0) > 0 && (
                                            <ChevronRight
                                                className={`ml-auto transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90`}
                                            />
                                        )}
                                    </CollapsibleTrigger>
                                </SidebarGroupLabel>
                                <CollapsibleContent className="overflow-hidden">
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{
                                            opacity: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
                                            height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                                        }}
                                    >
                                        <SidebarGroupContent>
                                            <SidebarMenu>
                                                {menu.level_one_navigation?.map((levelOne: ILevelOneNavigation, index: number) => (
                                                    <motion.div
                                                        key={levelOne.id}
                                                        initial={{ opacity: 0, y: -5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -5 }}
                                                        transition={{
                                                            duration: 0.2,
                                                            delay: index * 0.05,
                                                            ease: [0.4, 0, 0.2, 1],
                                                        }}
                                                    >
                                                        <SidebarMenuItem>
                                                            <SidebarMenuButton asChild>
                                                                <a
                                                                    href={'#'}
                                                                    className={`pl-5 ${theme == THEME.DARK ? 'text-gray-400' : 'text-gray-600'}`}
                                                                >
                                                                    {levelOne.label}
                                                                </a>
                                                            </SidebarMenuButton>
                                                        </SidebarMenuItem>
                                                    </motion.div>
                                                ))}
                                            </SidebarMenu>
                                        </SidebarGroupContent>
                                    </motion.div>
                                </CollapsibleContent>
                            </SidebarGroup>
                        </div>
                    </Collapsible>
                ))}
            </SidebarContent>
            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
