alert('working')

//library
const http = new EasyHttp();
//DOM VARIABLES
const getRequestBtn = document.querySelector('.get-request');
const getRequestBtn2 = document.querySelector('.get-request-2');
const postRequestBtn = document.querySelector('.post-request');
const putRequestBtn = document.querySelector('.put-request');
const deleteRequestBtn = document.querySelector('.delete-request');

//GET REQUEST
getRequestBtn.addEventListener('click',function(event){
    event.preventDefault();
    http.get('http://jsonplaceholder.typicode.com/posts',function(data,error){
        console.log(data,'data');
        console.log(error,'error');
    })
});

//GET REQUEST
getRequestBtn2.addEventListener('click',function(event){
    event.preventDefault();
    http.get('https://jsonplaceholder.typicode.com/posts',function(data,error){
        console.log(data,'data');
        console.log(error,'error');
    })
});

//POST REQUEST
postRequestBtn.addEventListener('click',function(event){
    event.preventDefault();
    const payload = {
        userId: 1,
        id: 1,
        title: "this is title",
        body: "this is body"
    };
    http.post('https://jsonplaceholder.typicode.com/posts',payload,function(data,error){
        console.log(data,'data');
        console.log(error,'error');
    })
});

//PUT REQUEST
putRequestBtn.addEventListener('click',function(event){
    event.preventDefault();
    const payload2 = {
        userId: 1,
        id: 1,
        title: "this is title",
        body: "this is body"
    };
    http.put('https://jsonplaceholder.typicode.com/posts/1',payload2,function(data,error){
        console.log(data,'data');
        console.log(error,'error');
    })
})



//DELETE REQUEST
deleteRequestBtn.addEventListener('click',function(event){
    event.preventDefault();
    ///DELETE REQUEST
    http.delete('https://jsonplaceholder.typicode.com/posts/1',function(data,error){
        console.log(data,'error');
        console.log(error,'error');
    })
})