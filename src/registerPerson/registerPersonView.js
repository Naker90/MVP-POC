function view(){

    let registerPersonRequestedHandler = () => {};

    let name, surname, email, telephone, registerButton, message;

    function initialize(){
        name = document.getElementById("name");
        surname = document.getElementById("surname");
        email = document.getElementById("email");
        telephone = document.getElementById("telephone");
        registerButton = document.getElementById("registerButton");
        message = document.getElementById("message");

        registerButton.addEventListener("click", function(){
            registerPersonRequestedHandler({
                name: name.textContent,
                surname: surname.textContent,
                email: email.textContent,
                telephone: telephone.textContent
            })
        });
    }

    function subscribeToRegisterPersonRequested(handler){
        registerPersonRequestedHandler = handler;
    }

    function showSuccessMessage(){
        message.innerHTML = "Persona registrada con exito."
        message.classList.remove('display: none');
        message.classList.remove('color: green');
    }

    function showErrorMessage(){
        message.innerHTML = "Hubo un problema, intentelo de nuevo en unos minutos."
        message.classList.remove('display: none');
        message.classList.remove('color: red');
    }

    initialize();

    return {
        subscribeToRegisterPersonRequested: subscribeToRegisterPersonRequested,
        showSuccessMessage: showSuccessMessage,
        showErrorMessage: showErrorMessage
    }
}

module.exports = view();