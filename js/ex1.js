// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// const person = "Lydia";
// const age = 21;

// getPersonInfo`${person} is ${age} years old`;

class Person {
  name = "John";
  age = 20;

  getName() {
    console.log(this.name);
  }
}

const newPerson = new Person();
newPerson.getName();

class Example {
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }
  getValue1() {
    console.log(this.param1);
  }
  static getValue2() {
    console.log(this);
  }
}

Example.getValue2();
