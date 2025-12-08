import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { adminDashboardRoutePath } from '@/utils/utils';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: adminDashboardRoutePath,
    },
    {
        title: 'Careers',
        href: '',
    },
    {
        title: 'Hero Main Content',
        href: '',
    },
];

const TheHeroContents = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Hero Main Contents | Careers' />

            <h1>TheHeroContents</h1>
        </AppLayout>
    );
};

export default TheHeroContents;
