export const generateTimeStamp = (stockDate: string) => {
    const date = new Date(stockDate);
    const timestamp = date.getTime();
    return timestamp;
}