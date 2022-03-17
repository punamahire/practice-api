export const getDataSource = (fetchUrl) => {
    
    return fetch(fetchUrl)
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}