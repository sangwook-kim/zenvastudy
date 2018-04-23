export class Player {
    private name;
    constructor(input_name) {
        this.name = input_name;
    }

    show() {
        alert(`I(${this.name}) am still alive`);
    }
}
