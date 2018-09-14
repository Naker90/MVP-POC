jest.mock("./registerPersonView", ()=>{
    return {
        subscribeToRegisterPersonRequested: jest.fn(),
        showSuccessMessage: jest.fn()
    }
});
jest.mock("./registerPersonClient", ()=>{
    return {
        registerPerson: jest.fn()
    }
});
const view = require("./registerPersonView");
const client = require("./registerPersonClient");
const presenter = require("./registerPersonPresenter");

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
