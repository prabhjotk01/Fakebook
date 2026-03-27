'use strict';
import { User } from "./user";

export class Subscriber extends User {
    #pages;
    #groups;
    #verified;

    constructor(id, name, userName, email, pages, groups, verified) {
    super(id, name, userName, email);
    this.#pages = pages;
    this.#groups = groups;
    this.#verified = verified;
    }

    getInfo() {
        return `
      ${super.getInfo()}
      <p>Pages: ${this.#pages.join(", ")}</p>
      <p>Groups: ${this.#groups.join(", ")}</p>
      <p>verified: ${this.#verified ? "Yes" : "No"}</p>
    `;
    }
}