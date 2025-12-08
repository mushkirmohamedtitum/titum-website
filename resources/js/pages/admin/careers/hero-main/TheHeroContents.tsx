import { useTheme } from '@/components/ThemeProvider';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { ACTION_TYPE } from '@/constants/ActionTypes';
import { CONFIRMATION_ALERT_MESSAGE } from '@/constants/AlertMessage';
import { ICareersHeroMainContent } from '@/interface/careers/HeroMainContent';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { adminDashboardRoutePath } from '@/utils/utils';
import { Head } from '@inertiajs/react';
import { FunctionComponent, useRef, useState } from 'react';
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
    const initHeroContent: ICareersHeroMainContent = {
        id: '',
        hero_main_content: '',
        is_active: null,
        created_by: { id: null, name: '' },
        updated_by: { id: null, name: '' },
        created_at: '',
        updated_at: '',
    };

    const alertButtonRef = useRef<HTMLButtonElement>(null);

    const { theme } = useTheme();

    const [selectedRow, setSelectedRow] = useState(initHeroContent);

    const [userAction, setUserAction] = useState('');

    const handleRowAction = (action: string, row: ICareersHeroMainContent) => {
        if (action == ACTION_TYPE.MODIFY_STATUS || action == ACTION_TYPE.DELETE || action == ACTION_TYPE.MODIFY) {
            setUserAction(action);
            setSelectedRow(row);
            alertButtonRef.current?.click();
        }

        // if (action == ACTION_TYPE.MODIFY_STATUS) {
        //     setUserAction(action);
        //     setSelectedRow(row);
        //     alertButtonRef.current?.click();
        // }

        // if (action == ACTION_TYPE.DELETE) {
        //     setUserAction(action);
        //     setSelectedRow(row);
        //     alertButtonRef.current?.click();
        // }

        // if (action == ACTION_TYPE.MODIFY) {
        //     setUserAction(action);
        //     setSelectedRow(row);
        //     alertButtonRef.current?.click();
        // }
    };

    const handleReset = () => {
        setUserAction('');
        setSelectedRow(initHeroContent);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Hero Main Contents | Careers" />

            <div className="3xl:px-0 container mx-auto px-11 py-10">
                {/* Confirmation alert component */}
                <div className="hidden justify-end">
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="outline" ref={alertButtonRef}>
                                Show Dialog
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    {userAction == ACTION_TYPE.MODIFY_STATUS
                                        ? CONFIRMATION_ALERT_MESSAGE.MODIFY_STATUS.HEADING
                                        : userAction == ACTION_TYPE.MODIFY
                                          ? CONFIRMATION_ALERT_MESSAGE.MODIFY.HEADING
                                          : userAction == ACTION_TYPE.DELETE
                                            ? CONFIRMATION_ALERT_MESSAGE.DELELE.HEADING
                                            : ''}
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                    {userAction == ACTION_TYPE.MODIFY_STATUS
                                        ? CONFIRMATION_ALERT_MESSAGE.MODIFY_STATUS.DESCRIPTION
                                        : userAction == ACTION_TYPE.MODIFY
                                          ? CONFIRMATION_ALERT_MESSAGE.MODIFY.DESCRIPTION
                                          : userAction == ACTION_TYPE.DELETE
                                            ? CONFIRMATION_ALERT_MESSAGE.DELELE.DESCRIPTION
                                            : ''}
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel
                                    type="button"
                                    onClick={() => {
                                        handleReset?.();
                                    }}
                                    // className={`${theme == THEME.DARK ? '' : 'border-logoPurple_500 text-logoPurple'}`}
                                >
                                    Cancel
                                </AlertDialogCancel>
                                <AlertDialogAction
                                    // className={`${theme == THEME.DARK ? '' : 'bg-logoPurple transition-all hover:bg-logoPurpleHover'}`}
                                    onClick={() => {
                                        if (userAction == ACTION_TYPE.MODIFY_STATUS) {
                                            console.log('implement status update logic!');
                                        }
                                    }}
                                >
                                    Continue
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>

                {/* Add New */}
                <div className="mb-5">
                    <AddNew />
                </div>

                <DataTable columns={columns(handleRowAction)} data={data} endpoint="hero-main" />
            </div>
        </AppLayout>
    );
};

export default TheHeroContents;
