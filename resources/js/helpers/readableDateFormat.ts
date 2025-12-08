import dayjs from 'dayjs';

export const readableDateFormat = (date: string, format: string) => {
    return dayjs(date).format(format);
};
