import { router } from '@inertiajs/react';

export const deleteRecord = (endpoint: string, id: string, httpMethod: string, handleReset: () => void, successMsg?: string, errorMsg?: string) => {
    try {
        router.visit(`${endpoint}/${id}`, {
            method: 'delete',
            preserveScroll: false,
            preserveState: false,
            onSuccess: () => {
                alert(successMsg ?? 'The record has been deleted successfully');
                handleReset?.();
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    } catch (error) {
        console.log(error);
        alert(errorMsg ?? 'Error Occured!');
    }
};
