import { TABLE_COLUMN_NAMES } from '@/constants/TableColumnNames';
import { CircleCheckBig, Edit, Eye, Trash } from 'lucide-react';

export const actionOptionsArr = [
    {
        code: 1,
        label: TABLE_COLUMN_NAMES.VIEW,
        icon: Eye,
    },
    {
        code: 2,
        label: TABLE_COLUMN_NAMES.MODIFY,
        icon: Edit,
    },
    {
        code: 3,
        label: `${TABLE_COLUMN_NAMES.MODIFY} ${TABLE_COLUMN_NAMES.STATUS}`,
        icon: CircleCheckBig,
    },
    {
        code: 4,
        label: TABLE_COLUMN_NAMES.DELETE,
        icon: Trash,
    },
];
