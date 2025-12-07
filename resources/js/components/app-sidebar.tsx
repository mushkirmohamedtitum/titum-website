import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { THEME } from '@/constants/theme';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Lamp, LayoutGrid, Settings, User, UserCheck2 } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'User',
        href: '',
        icon: User,
    },
    {
        title: 'User Role',
        href: '',
        icon: UserCheck2,
    },
    {
        title: 'Clients',
        href: '',
        icon: Settings,
    },
    {
        title: 'Services',
        href: '',
        icon: Lamp,
    },
    {
        title: 'Pricing',
        href: '',
        // icon: ,
    },
];

// const footerNavItems: NavItem[] = [
//     {
//         title: 'Repository',
//         href: 'https://github.com/laravel/react-starter-kit',
//         icon: Folder,
//     },
//     {
//         title: 'Documentation',
//         href: 'https://laravel.com/docs/starter-kits#react',
//         icon: BookOpen,
//     },
// ];

export function AppSidebar() {
    const { theme } = useTheme();

    // console.log(usePage().props);

    const { adminNavMenus } = usePage().props;

    console.log(adminNavMenus);

    return (
        <Sidebar collapsible="icon" variant="inset">
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

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
