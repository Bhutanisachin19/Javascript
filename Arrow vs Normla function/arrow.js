//arrow functions vs normal functions

class Person {
  constructor(name) {
    this.name = name;
  }

  //arrow function do not get their own this keyword
  //binds "this" with the current scope i.e Person class
  printArrow() {
    setTimeout(() => {
      console.log("Arrow : " + this.name);
    }, 100);
  }

  // does not binds "this" with the current scope i.e Person class , keeps the scope global
  //as name is not in global scope it will print blank
  printName() {
    setTimeout(function () {
      console.log("Normla Function : " + this.name);
    }, 100);
  }

  printNameAgain() {
    console.log("Again ", this.name);
  }
}

let Person_obj = new Person("Messi");
Person_obj.printArrow();
Person_obj.printName();
Person_obj.printNameAgain();

//arrow function binds "this" with cureent scope and hence it is preferred
