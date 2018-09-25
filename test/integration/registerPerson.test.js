const fs = require("fs");
const path = require("path");
const view = require("./../../src/registerPerson/registerPersonView");
const client = require("./../../src/registerPerson/registerPersonClient");
const presenter = require("./../../src/registerPerson/registerPersonPresenter");

describe("register person", function(){

    beforeEach(function (done) {
        loadTemplate("../../src/index.html", function (html) {
            document.body.innerHTML = html;
            presenter(view(), client());
            done();
        });
    });

    it("loads the markup", function () {
       expect(document.querySelector("h1")).not.toBeNull();
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