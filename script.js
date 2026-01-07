const makeChange = (c) => {
  // your name here
  let change = {
    q: 0,
    d: 0,
    n: 0,
    p: 0
  };

  // quarters
  change.q = Math.floor(c / 25);
  c = c % 25;

  // dimes
  change.d = Math.floor(c / 10);
  c = c % 10;

  // nickels
  change.n = Math.floor(c / 5);
  c = c % 5;

  // pennies
  change.p = c;

  return change;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
