jest.mock("./../../src/registerPerson/registerPersonView", ()=>{
    return {
        subscribeToRegisterPersonRequested: jest.fn(),
        showSuccessMessage: jest.fn(),
        showErrorMessage: jest.fn()
    }
});
jest.mock("./../../src/registerPerson/registerPersonClient", ()=>{
    return {
        registerPerson: jest.fn()
    }
});
const view = require("./../../src/registerPerson/registerPersonView");
const client = require("./../../src/registerPerson/registerPersonClient");
const presenter = require("./../../src/registerPerson/registerPersonPresenter");

let registerPersonRequestedHandler = () => {};

beforeEach(() => {
    view.subscribeToRegisterPersonRequested
        .mockImplementation((handler) => {
            registerPersonRequestedHandler = handler;
        });
    presenter(view, client);
});

test("shows success message when register person successfully", () => {
    const person = {
        name: "anyName",
        surname: "anySurname",
        email: "any@email.com",
        telephone: "666222444"
    };
    client.registerPerson
        .mockImplementation((request, successHandler) => {
            expect(request.name).toBe(person.name);
            expect(request.surname).toBe(person.surname);
            expect(request.email).toBe(person.email);
            expect(request.telephone).toBe(person.telephone);
            successHandler();
        });

    registerPersonRequestedHandler(person);

    expect(view.showSuccessMessage).toHaveBeenCalled();
});

test("shows error message when register person fail", () => {
    const person = {
        name: "anyName",
        surname: "anySurname",
        email: "any@email.com",
        telephone: "666222444"
    };
    client.registerPerson
        .mockImplementation((request, successHandler, errorHandler) => {
            errorHandler();
        });

    registerPersonRequestedHandler(person);

    expect(view.showErrorMessage).toHaveBeenCalled();
});