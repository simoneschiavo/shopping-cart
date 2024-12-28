export const getRequestsWithNativeFetch = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Network response was not ok: Status " + response.status);
    }
    const data = await response.json();
    return data;
}