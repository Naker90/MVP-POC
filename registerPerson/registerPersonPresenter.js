function presenter(view, client) {

    view.subscribeToRegisterPersonRequested(registerPersonRequestedHandler);

    function registerPersonRequestedHandler(personData){
        let request = {
            name: personData.name,
            surname: personData.surname,
            email: personData.email,
            telephone: personData.telephone
        };
        client.registerPerson(request, successCallback);

        function successCallback(){
            view.showSuccessMessage();
        }
    }
}

module.exports = presenter;