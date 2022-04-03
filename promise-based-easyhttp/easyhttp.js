class EasyHttp{
    //get record
    get(url){
        return new Promise(function(resolve,reject){
            fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error)
            })
        })
    }

//store record
post(url,data){
    return new Promise(function(resolve,reject){
        fetch(url,{
            headers:{
                'Comtent=type' : 'application/json'
            },
            method:"POST",
            body:JSON.stringify(data)
        })
        .then(res =>{
            return res.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error)
        })
    })
}

//update record
put(url,data){
    return new Promise(function(resolve,reject){
        fetch(url,{
            headers:{
                'Content-type' : 'application/json'
            },
            method:"PUT",
            body:JSON.stringify(data)
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error)
        })
    })
}

// delete record
delete(url){
    return new Promise(function(resolve,reject){
        fetch(url,{
            method:"DELETE"
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error)
        })
    })
  }
}

