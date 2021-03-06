jest.mock("./../../src/registerPerson/registerPersonClient", ()=>{
    return {
        registerPerson: jest.fn()
    }
});

const fs = require("fs");
const path = require("path");
const view = require("./../../src/registerPerson/registerPersonView");
const client = require("./../../src/registerPerson/registerPersonClient");
const presenter = require("./../../src/registerPerson/registerPersonPresenter");

describe("register person", function(){

    beforeEach(function (done) {
        loadTemplate("../../src/index.html", function (html) {
            document.body.innerHTML = html;
            presenter(view(), client);
            done();
        });
    });

    it("loads the markup", function () {
       expect(document.querySelector("h1")).not.toBeNull();
    });

    it("shows success message when register person", function(){
        let message = document.getElementById("message");
        let registerButton = document.getElementById("registerButton");
        client.registerPerson
            .mockImplementation((request, successHandler) => {
                successHandler();
            });

        registerButton.click();

       expect(message.style.color).toBe("green");
    });

    it("shows error message when register person", function(){
        let message = document.getElementById("message");
        let registerButton = document.getElementById("registerButton");
        client.registerPerson
            .mockImplementation((request, successHandler, errorHandler) => {
                errorHandler();
            });

        registerButton.click();

        expect(message.style.color).toBe("red");
    });

    function loadTemplate(viewPath, onLoad){
        const filePath = path.join(__dirname, viewPath);
        fs.readFile(filePath, {encoding: "utf-8"}, function(error, data){
            if(!error) {
                onLoad(data);
            } else {
                console.log(error);
            }
        });
    }
});