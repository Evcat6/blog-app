const getDate = (date: string): string => {
    const newDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    };

    const formattedDate = newDate.toLocaleDateString('en-US', options);

    return formattedDate;
};

export { getDate };
