import { DataTable } from '@/components/custom/DataTable';
import { ICareerHeroSecondaryContent } from '@/interface/careers/HeroSecondaryContent';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { adminDashboardRoutePath } from '@/utils/utils';
import { Head } from '@inertiajs/react';
import { FunctionComponent } from 'react';
import { heroSecondaryContentColumns } from './HeroSecondaryColumns';

interface ITheHeroSecondaryContentsProps {
    data: ICareerHeroSecondaryContent;
}

const TheHeroSecondaryContents: FunctionComponent<ITheHeroSecondaryContentsProps> = ({ data }) => {
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
            title: 'Hero Secondary Content',
            href: '',
        },
    ];

    console.log(data);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Hero Secondary Contents | Careers" />

            <div className="3xl:px-0 container mx-auto px-11 py-10">
                {/* Confirmation alert component */}
                {/* <div className="hidden justify-end">
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
                                >
                                    Cancel
                                </AlertDialogCancel>
                                <AlertDialogAction
                                    onClick={() => {
                                        if (userAction == ACTION_TYPE.MODIFY_STATUS) {
                                            handleChangeRecordStatus('hero-section', selectedRow?.id, handleReset);
                                        }

                                        if (userAction == ACTION_TYPE.DELETE) {
                                            deleteRecord('hero-main', selectedRow.id, handleReset);
                                        }

                                        if (userAction == ACTION_TYPE.MODIFY) {
                                            openEditModalRef.current?.click();
                                        }
                                    }}
                                >
                                    Continue
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div> */}

                {/* Add New */}
                <div className="mb-5">{/* <AddNew ref={openEditModalRef} row={selectedRow} handleReset={handleReset} /> */}</div>

                <DataTable columns={heroSecondaryContentColumns} data={data} endpoint="hero-secondary" />
            </div>
        </AppLayout>
    );
};

export default TheHeroSecondaryContents;
