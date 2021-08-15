let a=[1,2,3,4,5];
function double(x) {
    return 2 * x;
  }

function mapduplicate(arr,operation){
    let b=[]; 
    for(let i=0;i<arr.length;i++){
        b.push(operation(arr[i]));
    }
    return b;
}

let c=mapduplicate(a,double);
console.log(c);