import { TOAST_MESSAGE_TYPE } from '@/constants/ToastMessageType';
import { router } from '@inertiajs/react';
import { handleToastMessage } from './handleShowToastMessage';

export const deleteRecord = (endpoint: string, id: string, handleReset: () => void, successMsg?: string, errorMsg?: string) => {
    try {
        router.visit(`${endpoint}/${id}`, {
            method: 'delete',
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                // alert();
                handleToastMessage(TOAST_MESSAGE_TYPE.SUCCESS, successMsg ?? 'The record has been deleted successfully');
                handleReset?.();
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    } catch (error) {
        console.log(error);
        // alert();
        handleToastMessage(TOAST_MESSAGE_TYPE.ERROR, errorMsg ?? 'Error Occured!');
    }
};

export const handleChangeRecordStatus = (endpoint: string, id: string, handleReset: () => void, successMsg?: string, errorMsg?: string) => {
    try {
        router.visit(`${endpoint}/${id}`, {
            method: 'put',
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                // alert();
                handleToastMessage(TOAST_MESSAGE_TYPE.SUCCESS, successMsg ?? 'The record status has been updated successfully');
                handleReset?.();
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    } catch (e) {
        console.log(e);
        handleToastMessage(TOAST_MESSAGE_TYPE.ERROR, errorMsg ?? 'Error Occured!');
    }
};
