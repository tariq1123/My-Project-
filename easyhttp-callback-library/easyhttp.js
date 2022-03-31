function EasyHttp(){
    this.http = new XMLHttpRequest();
}

EasyHttp.prototype.get = function(url,callbackFunction){
    let self = this;
    let xhr = self.http;
    xhr.open('GET',url,true);
    xhr.onerror = function() {
        console.log('Request error...');
    }
    xhr.onload = function(){
        if(xhr.readyState == 4 && this.status == 200 || xhr.readyState == 4 && this.status == 201){
            const data = JSON.parse(this.responseText);
            callbackFunction(data,null);
        }else{
            callbackFunction(null,`Error :  ${xhr.status}`);
        }
    }
    xhr.send();
}

EasyHttp.prototype.post = function(url,data,callbackFunction){
    let self = this;
    let xhr = self.http;
    xhr.open('POST',url,true);
    xhr.onerror = function() {
        console.log('Request error....');
    }
    xhr.onload = function(){
        if(xhr.readyState == 4 && this.status == 200 || xhr.readyState == 4 && this.status == 201){
            const data = JSON.parse(this.responseText);
            callbackFunction(data,null);
        }else{
            callbackFunction(null,`Error :  ${xhr.status}`);
        }
    }
    
    const updatedData = JSON.stringify(data);
    xhr.send(updatedData);
}

EasyHttp.prototype.put = function(url,data,callbackFunction){
    let self = this;
    let xhr = self.http;
    xhr.open('PUT',url,true);
    xhr.onerror = function() {
        console.log('Request error...');
    }
    xhr.onload = function(){
        if(xhr.readyState == 4 && this.status == 200 || xhr.readyState == 4 && this.status == 201){
            const data = JSON.parse(this.responseText);
            callbackFunction(data,null);
        }else{
            callbackFunction(data,`Error :  ${xhr.Status}`);
        }
    }

    const updatedData = JSON.stringify(data);
    xhr.send(updatedData);
}


EasyHttp.prototype.delete =function(url,callbackFunction){
    let self = this;
    let xhr =self.http;
    xhr.open('DELETE',url,true);
    xhr.onerror = function() {
        console.log('Request error...');
    }
    xhr.onload = function(){
        if(xhr.readyState == 4 && this.status == 200 || xhr.readyState == 4 && this.status == 201){
            const data = JSON.parse(this.responseText);
            callbackFunction(data,null);
        }else{
            callbackFunction(data,`Error :  ${xhr.Status}`);
        }
    }
    xhr.send();
}