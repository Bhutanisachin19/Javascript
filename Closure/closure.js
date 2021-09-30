//Namaste Javascript

function x() {
  let a = 7;

  function y() {
    console.log(a);
  }

  //a = 100;
  // in js a function can also retun a function
  return y;
}

var z = x(); //after running this line the executing context of x is removed but still y can access the value of a i.e 7 ,

/*
z just has the function y i.e 
y() {
    console.log(a);
}
 but still it can access the value of a because even if a function is returned it will still maintain its lexical scope 
 we can also say that when we returned the function y not only the function  code was returned but with it a closure was returned ,  this closure is a function with its lexical scope 
so when we execute z in the function somewhere else it still rembers a 
 */

console.log("z is ", z); // returns a function i.e x

console.log("Executing z..");

z();

//example 2

console.log("Example 2");

function onez() {
  var b = 900;
  function twox() {
    let a = 7;
    function threey() {
      console.log(a, b);
    }

    threey();
  }
  twox();
}

onez();

//here threey form a closure along with scope of twox and scope of onez

/*
 Uses of closure 
Currying
function like 'once'
memoize 
maintaining state in async world
setTimeouts
and many more...

*** to make a tree like structure

*/
