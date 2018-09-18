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

module.exports = view();