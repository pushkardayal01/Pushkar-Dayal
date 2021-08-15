let a=[1,2,3,4,5];
function double(x) {
    return 2 * x;
  }

  function isEven(x) {
    return x % 2 == 0;
  }

function filterduplicate(arr,operation){
    let b=[]; 
    for(let i=0;i<arr.length;i++){
        if(operation(arr[i])){
            b.push(arr[i]);
        }

    }
    return b;
}

let c=filterduplicate(a,isEven);
console.log(c);