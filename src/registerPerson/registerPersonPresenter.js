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

module.exports = presenter;