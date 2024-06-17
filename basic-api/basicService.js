

const getAll = () => {
    basicApi.getAll();
}

const getById = () => {
    const id= document.querySelector('#todoId').value;
    if (id > 0) basicApi.getItem({id});
}

const post = () => {
    let error= false;
    const errorMsg= document.querySelector('#errorMsg');

    const title= document.querySelector('#title').value;
    const body= document.querySelector('#body').value;

    if (title.trim().length <=0 || body.trim().length <=0) error = true
    if (!error) {
        basicApi.postItem({userId: 1, title, body})
        errorMsg.innerHTML=''
    } else errorMsg.innerHTML= 'Error, title or body must not be empty'
}