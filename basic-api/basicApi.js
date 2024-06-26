 const BASE_URL= 'https://jsonplaceholder.typicode.com/todos';
 const headers= {'Content-Type': 'applicartion/json'};

 const basicApi = {
    getAll: () => {
        const url = BASE_URL;

        fetch(url, {
            method: 'GET',
            headers,
            })
        .then(response => response.json())
        .then(json => console.log(json))
    },
    
    getItem: ({id}) => {
        const url = `${BASE_URL}/${id}`;

        fetch(url, {
            method: 'GET',
            headers,
            })
        .then(response => response.json())
        .then(json => console.log(json))
    },
    
    postItem: ({userId, title, body}) => {
        const url = `${BASE_URL}`;

        fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                userId,
                title,
                body,
            }),
            })
        .then(response => response.json())
        .then(json => console.log(json))
    },

    deleteItem: ({id}) => {

    },
    putItem: ({id, content}) => {

    },
    pathItem: ({id, content}) => {

    },
}