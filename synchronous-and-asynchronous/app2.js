alert('working')

const getBtn = document.getElementById('get_data');

getBtn.addEventListener('click',function(event){
    event.preventDefault();
    //Create an XHR Object
    const xhr = new XMLHttpRequest();
    xhr.open('GET','data.txt',true);

    //Optional - Used for spinners/loaders
    xhr.onprogress = function(){
        console.log('READYSTATE',xhr.readyState);
    }

    xhr.onerror = function() {
        console.log('request error...');
    }

    xhr.onload = function(){
        //console.log('READYSTATE',xhr.readyState);
        //console.log(this.status,"status");
        if(xhr.readyState == 4 && this.status == 200){
            console.log(this.responseText);
        }
    }

    xhr.send();
})




// readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready

// HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 500: "internal error"
  // 404: "Not Found"
  // 304: "Not Modified"




// JSON VS XML
// Both are format and use send & recieve data asyncronusly

// JSON Example
// {"employees":[
//     { "firstName":"John", "lastName":"Doe" },
//     { "firstName":"Anna", "lastName":"Smith" },
//     { "firstName":"Peter", "lastName":"Jones" }
// ]}
// XML Example

{/* <employees>
  <employee>
    <firstName>John</firstName> <lastName>Doe</lastName>
  </employee>
  <employee>
    <firstName>Anna</firstName> <lastName>Smith</lastName>
  </employee>
  <employee>
    <firstName>Peter</firstName> <lastName>Jones</lastName>
  </employee>
</employees> */}