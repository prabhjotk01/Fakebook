'use strict';

export class User {
    #id;
    #name;
    #userName;
    #email;

    constructor(id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    get name() {
        return this.#name;
    }

    getInfo() {
        return `${this.#id} , ${this.#name} , ${this.#userName} , ${this.#email}`;
    }
}