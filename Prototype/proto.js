console.log("Prototype in js");

//

/*
function xyz(name) {
  this.name = name;
  //   this.getName = function () {
  //     return this.name;
  //   };
}


xyz.prototype.getName = function () {
  return this.name;
};
let e1 = new xyz("Neymar");
let e2 = new xyz("Leo");
console.log(e1.getName());
*/

//shronik

let xyz = {
  num: 10,

  abc: function () {
    var num = 20;
    console.log("abc num ", this.num);
  },
  //abc.getNum();
};

xyz.__proto__.getNum = function () {
  console.log("Hello ");
  console.log("num is ", this.num);
};

console.log(xyz.getNum());
