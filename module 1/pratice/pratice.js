/*
const num = 5;
console.log(num + 5);
let a = 6;
a = a + num;
console.log(num - a);
*/
let a = 2;
{
  let a = 3;
  {
    let a = 4;
    {
      let a = 5;
      console.log(a);
    }
    console.log(a);
  }
  console.log(a);
}
console.log(a);