console.log("Bind-call-apply");

//object
let name = {
  firstname: "Leo",
  lastname: "Messi",
  printFullName: function () {
    console.log(this.firstname + " " + this.lastname);
  },
};

name.printFullName();

//object 2
let name2 = {
  firstname: "Neymar",
  lastname: "JR",
};

//call method
// using call method we can borrow a functions from other object
//and use it with the data of some other object

name.printFullName.call(name2);
//the first argument in call will be the refernce or what we want the this of the function to be pointing to
// now the this of the printFullName() will point to name2

// we can also access other function

let name3 = {
  firstname: "ABC",
  lastname: "XYZ",
};

let func = function () {
  console.log(this.firstname + " " + this.lastname);
};

// func(); // gives undefined

//using call
func.call(name3);

// function with parameters
//if a function has paramters while usimg call the  1st argument will be where its this points to
//and the other arguments will be the arguments to the function

let name4 = {
  firstname: "Luis",
  lastname: "Suarez",
};

let FullName = function (club1, club2) {
  console.log(
    this.firstname + " " + this.lastname + " from " + club1 + " and " + club2
  );
};

FullName.call(name4, "Liverpool", "Barca");

//only difference between call and apply method is that apply take the parameters as an array except the 1st parameter
FullName.apply(name4, ["Barca ", "Athletico Madrid"]);

//bind

// in bind instead of calling we get a function in return which is the copy of the function we binded it to, syntax is same as call

console.log("BIND");
let copyFullName = FullName.bind(name4, "Barca", "Ath Madrid");
//creates a copy of FullName and binds it with the name4  object and returns a function

console.log("Bind returned ", copyFullName);
copyFullName();
// main difference in bind is that it returns a copy which can be invoked later

// console.log("start");

// setTimeout(function () {
//   console.log("setTimeout");
// }, 1000);

// console.log("end");
