const view = require("./registerPerson/registerPersonView");
const client = require("./registerPerson/registerPersonClient");
const presenter = require("./registerPerson/registerPersonPresenter");

presenter(view(), client());