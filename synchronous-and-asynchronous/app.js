//alert('working')

console.log('step 1....');

//call back

setTimeout(function(){
    console.log('step 2.... 1gb excel');
},2000); //callback

console.log('step 3....');

//2-promice

const doSomething = new Promise(function(resolve,reject){
    if(false) {
        resolve({
            name: "tariq",
            last: "tajuddin",
            address: "nazimabad",
        });
    } else {
        reject("this error occured");
    }
})

doSomething
.then(function(data){
    console.log(data,"promice data");
})
.catch(function(data){
    console.log(error,"promice error");
})

//3-asyns await

const getTodosData = function () {
    return fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        return data;
        //    console.log(data,"data");
    })
    .catch(function(error) {
        //console.log(error);
        return error;
    });  
};

//ASYNC AWAIT
const doSomethingAsyncAwait = async function () {
    const data = await getTodosData();
    if (data) {
        data.forEach((singleItem) => {
            console.log(singleItem);
        });
    }
};

doSomethingAsyncAwait();