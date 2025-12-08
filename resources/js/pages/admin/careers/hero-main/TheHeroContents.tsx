import { ICareersHeroMainContent } from '@/interface/careers/HeroMainContent';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { adminDashboardRoutePath } from '@/utils/utils';
import { Head } from '@inertiajs/react';
import { FunctionComponent } from 'react';
import { DataTable } from '../../../../components/custom/DataTable';
import AddNew from './AddNew';
import { columns } from './Columns';

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

interface ITheHeroContents {
    data?: ICareersHeroMainContent[];
}

const TheHeroContents: FunctionComponent<ITheHeroContents> = ({ data }) => {
    // console.log(data);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Hero Main Contents | Careers" />

            {/* <div className="container mx-auto py-10 2xl:px-10"> */}
            <div className="3xl:px-0 container mx-auto px-11 py-10">
                {/* Add New */}
                <div className="mb-5">
                    <AddNew />
                </div>

                <DataTable columns={columns} data={data} endpoint="hero-main" />
            </div>
        </AppLayout>
    );
};

export default TheHeroContents;
