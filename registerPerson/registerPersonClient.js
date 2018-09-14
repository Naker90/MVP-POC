function client(){

    function registerPerson(){
        throw new Error("not implemented")
    }

    return {
        registerPerson: registerPerson
    }
}

module.exports = client();