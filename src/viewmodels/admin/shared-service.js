import {noView} from 'aurelia-framework';

let contacts = [
  {
    id: 1,
    name: "test",
    email: "email"
  },
  {
    id: 2,
    name: "asdfasdf",
    email: "email345345"
  },
];

@noView
export class SharedService {

  constructor() {
    this.data = undefined;
    this.contacts = contacts
  }
}
