function client(){

    function registerPerson(request, successCallback, errorCallback){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
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

module.exports = client();