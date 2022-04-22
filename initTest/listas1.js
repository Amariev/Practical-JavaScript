const array = [12123541,2,3];

function printFirst(ar) {
  console.log(ar[0]);
}

printFirst(array);

//----------------------
// expand parameters

const expandFn = (...args) => args.map(console.log);

expandFn(2,3,4,5);
