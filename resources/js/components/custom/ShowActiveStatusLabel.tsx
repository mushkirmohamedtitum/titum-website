import { ACTIVE_STATUS_CODE } from '@/constants/ActiveStatusCode';
import { TABLE_COLUMN_NAMES } from '@/constants/TableColumnNames';
import { X } from 'lucide-react';

const ShowActiveStatusLabel = ({ statusCode }: { statusCode: number }) => {
    // console.log(statusCode);

    return (
        <small
            className={`block w-fit rounded-full px-2 py-1 text-center font-semibold ${statusCode == ACTIVE_STATUS_CODE.ACTIVE ? 'bg-green-200 text-green-800' : 'text-red-600'}`}
        >
            {statusCode == ACTIVE_STATUS_CODE.ACTIVE ? TABLE_COLUMN_NAMES.ACTIVE : <X />}
        </small>
    );
};

export default ShowActiveStatusLabel;
