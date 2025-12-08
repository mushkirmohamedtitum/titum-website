import ShowActiveStatusLabel from '@/components/custom/ShowActiveStatusLabel';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import COLUMN_NAMES from '@/constants/ColumnNames';
import { TABLE_COLUMN_NAMES } from '@/constants/TableColumnNames';
import { readableDateFormat } from '@/helpers/readableDateFormat';
import { IActionOptions } from '@/interface/actionOptions';
import { ICareersHeroMainContent } from '@/interface/careers/HeroMainContent';
import { actionOptionsArr } from '@/utils/actionOptions';
import { defaultDateFormat } from '@/utils/utils';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';

export const columns: ColumnDef<ICareersHeroMainContent>[] = [
    {
        accessorKey: 'hero_main_content',
        header: () => <div>{TABLE_COLUMN_NAMES.MAIN_CONTENT}</div>,
    },
    {
        accessorKey: 'is_active',
        header: () => <div className="">{TABLE_COLUMN_NAMES.STATUS}</div>,
        cell: ({ row }) => {
            // console.log(row);

            return <ShowActiveStatusLabel statusCode={row.getValue(COLUMN_NAMES.IS_ACTIVE)} />;
        },
    },
    {
        accessorKey: 'created_by',
        header: () => <div>{TABLE_COLUMN_NAMES.CREATED_BY}</div>,
        cell: ({ row }) => {
            // console.log();
            return <span>{row?.original?.created_by?.name}</span>;
        },
    },
    {
        accessorKey: 'updated_by',
        header: () => <div>{TABLE_COLUMN_NAMES.UPDATED_BY}</div>,
        cell: ({ row }) => {
            // console.log();
            return <span>{row?.original?.updated_by?.name}</span>;
        },
    },
    {
        accessorKey: 'created_at',
        header: () => <div>{TABLE_COLUMN_NAMES.CREATED_BY}</div>,
        cell: ({ row }) => {
            return <span>{readableDateFormat(row.getValue('created_at'), defaultDateFormat)}</span>;
        },
    },
    {
        accessorKey: 'updated_at',
        header: () => <div>{TABLE_COLUMN_NAMES.UPDATED_AT}</div>,
        cell: ({ row }) => {
            return <span>{readableDateFormat(row.getValue('updated_at'), defaultDateFormat)}</span>;
        },
    },
    {
        accessorKey: 'id',
        header: () => <div>{TABLE_COLUMN_NAMES.ACTIONS}</div>,
        cell: ({ row }) => {
            // console.log(row);
            const ViewIcon = actionOptionsArr[0].icon;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem className="cursor-pointer">
                            <span>
                                <ViewIcon />
                            </span>
                            <span>{actionOptionsArr[0].label}</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />

                        {actionOptionsArr.slice(1).map((option: IActionOptions) => {
                            return (
                                <DropdownMenuItem key={option.code} className="cursor-pointer">
                                    {option?.icon && (
                                        <span>
                                            <option.icon />
                                        </span>
                                    )}

                                    <span>{option.label}</span>
                                </DropdownMenuItem>
                            );
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
