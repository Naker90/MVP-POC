function client(){

    function registerPerson(request, successCallback, errorCallback){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.status === 201) {
                successCallback();
            }
            errorCallback();
        };
        xhttp.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
        xhttp.send(request);
    }

    return {
        registerPerson: registerPerson
    }
}

module.exports = client;