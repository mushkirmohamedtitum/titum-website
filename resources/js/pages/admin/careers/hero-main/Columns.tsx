import ShowActiveStatusLabel from '@/components/custom/ShowActiveStatusLabel';
import COLUMN_NAMES from '@/constants/ColumnNames';
import { TABLE_COLUMN_NAMES } from '@/constants/TableColumnNames';
import { readableDateFormat } from '@/helpers/readableDateFormat';
import { ICareersHeroMainContent } from '@/interface/careers/HeroMainContent';
import { defaultDateFormat } from '@/utils/utils';
import { ColumnDef } from '@tanstack/react-table';

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
];
