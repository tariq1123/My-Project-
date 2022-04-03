// fetch(`https://jsonplaceholder.typicode.com/posts`)
// .then(res => {
//     return res.json();
// })
// .then(data => {
//    console.log(data);
// })
// .catch(error => {
//     console.error(error)
// })


const http = new EasyHttp;
//DOM VARIABLE
const getRequestBtn = document.querySelector('.get-Request');
const postRequestBtn = document.querySelector('.post-request');
const putRequestBtn = document.querySelector('put-request');
const deleteRequestBtn = document.querySelector('delete-request');

//GET REQUEST
getRequestBtn.addEventListener('click',function(event){
    event.preventDefault();
    http.get('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
    .catch(error => console.error(error))
});

//POST RQUEST
postRequestBtn.addEventListener('click',function(event){
    event.preventDefault();
    const payload = {
        userId: 1,
        id: 1,
        title: "this is title",
        body: "this is body"
    };
    http.post('https://jsonplaceholder.typicode.com/posts',payload)
    .then(data => console.log(data))
    .catch(error => console.error(error))
})

//PUT REQUEST
putRequestBtn.addEventListener('click',function(event){
    event.preventDefault();
    const payload = {
     userId: 1,
     id: 1,
     title: "this is title",
     body: "this is body"
    };
    http.put('https://jsonplaceholder.typicode.com/posts/1',payload)
    .then(data => console.log(data))
    .catch(error => console.error(error))
})

//DELETE REQUEST
deleteRequestBtn.addEventListener('click',function(event){
    event.preventDefault();
    http.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log(data))
    .catch(error => console.error(error))
})