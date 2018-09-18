function presenter(view, client) {

    view.subscribeToRegisterPersonRequested(registerPersonRequestedHandler);

    function registerPersonRequestedHandler(personData){
        let request = {
            name: personData.name,
            surname: personData.surname,
            email: personData.email,
            telephone: personData.telephone
        };
        client.registerPerson(request, successCallback, errorHandler);

        function successCallback(){
            view.showSuccessMessage();
        }

        function errorHandler(){
            view.showErrorMessage();
        }
    }
}

function view(){

    let registerPersonRequestedHandler = () => {};

    function subscribeToRegisterPersonRequested(handler){
        registerPersonRequestedHandler = handler;
    }

    function showSuccessMessage(){
        throw new Error("not implemented");
    }

    function showErrorMessage(){
        throw new Error("not implemented");
    }

    return {
        subscribeToRegisterPersonRequested: subscribeToRegisterPersonRequested,
        showSuccessMessage: showSuccessMessage,
        showErrorMessage: showErrorMessage
    }
}

function client(){

    function registerPerson(){
        throw new Error("not implemented")
    }

    return {
        registerPerson: registerPerson
    }
}

presenter(view(), client());