/*
    Uses the url for an API to return the API data as an array
*/
const getDataFromAPI = async (url) => {
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        return data
    } else {
        return []
    }
}

export default getDataFromAPI;