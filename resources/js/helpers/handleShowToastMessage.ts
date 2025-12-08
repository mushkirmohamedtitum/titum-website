import { TOAST_MESSAGE_TYPE } from '@/constants/ToastMessageType';
import toast from 'react-hot-toast';

export const handleToastMessage = (type: string, message: string) => {
    switch (type) {
        case TOAST_MESSAGE_TYPE.SUCCESS:
            return toast.success(message);
        case TOAST_MESSAGE_TYPE.ERROR:
            return toast.error(message);
        // case TOAST_MESSAGE_TYPE.LOADING:
        //     return toast.loading(message);
        default:
            return toast(message);
    }
};
