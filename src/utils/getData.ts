export const getData = async (url: string, callback: any) => {
    const response = await fetch(url);
    const data = await response.json();
    callback(data);
}