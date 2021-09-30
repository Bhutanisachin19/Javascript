function outer() {
  console.log("this of outer", this);
  function func1() {
    let a = 10;
    console.log("This of func1", this);

    function func2() {
      console.log("This of Normal function func2", this);
    }

    let func3 = () => {
      //should have printed func1
      console.log("This of Arrow function func3", this);
    };

    func2();
    func3();
  }

  func1();
}

outer();
