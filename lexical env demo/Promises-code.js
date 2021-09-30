// promises in javascript (Web Dev Simpilified)

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;

  if (a === 2) {
    resolve("Success");
  } else reject("Failure");
});

p.then(message => {
  console.log("this is in the then " + message);
}).catch(message => {
  console.log("this is in the catch " + message);
});
