let canvas=document.querySelector("#canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 100;


window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 100;
    
  });


//->> after resize function dwaing vanish..---->>
// ctx.fillStyle="red";
// ctx.fillRect(10,10,500,100);



// let ispendown=false;
// canvas.addEventListener("mousedown",function(e){
//   let x= e.clientX;
//   let y= e.clientY-100;
//   console.log(x,y);
//   ctx.beginPath();
//   ctx.moveTo(x,y);
//   ispenndown=true;
// });
// canvas.addEventListener("mousemove",function(e){
//   if(ispendown)
//   {
//     console.log("its moving");
//     let x= e.clientX;
//     let y= e.clientY -100;
//     //console.log(x,y);
//     ctx.LineTo(x,y);
//     ctx.stroke();
//   }
// });
// canvas.addEventListener("mouseup", function(e){
//   ispendown=false;
// });

// function starting(e){
//   console.log("Starting Point..");
//   //let{clientX,clientY}=e;
//   let x=e.clientX;
//   let y=e.clientY-100;
//   console.log(x,y);
//   ctx.beginPath();
//   ctx.moveTo(x,y);
//   ispenndown=true;

// }

// function moving(e){
//   if(ispendown)
//   {
//     console.log("its moving");
//     let x=e.clientX;
//     let y=e.clientY -100;
//     console.log(x,y);
//     ctx.LineTo(x,y);
//     ctx.stroke();
//   }
// }

// function ending(e)
// {
//   ispendown=false;
//   //ctx.stroke();

// }
let redo=[];
let linedb = [];
let line = [];
let ispendown=false;

canvas.addEventListener("mousedown",function(e){
  ispendown=true;
  redo=[];
  let x=e.clientX;
  let y=e.clientY-85;
  ctx.beginPath();
  ctx.moveTo(x, y);
  let pointobject={
    x:x,
    y:y,
    pointtype:"mt",
  };
  line.push(pointobject);
});

canvas.addEventListener("mousemove",function(e){
  if(ispendown)
  {
    let x=e.clientX;
    let y=e.clientY-80;
    ctx.lineTo(x, y);
    ctx.stroke();

    let pointobject= {
      x:x,
      y:y,
      pointtype:"mm",
    };
    line.push(pointobject);
  }
});

canvas.addEventListener("mouseup",function(e){
  ispendown=false;
  linedb.push(line);
  
  line=[];

  console.log(linedb);
  if(linedb.length){
    undo.classList.add("active-tool");
    undo.classList.remove("fade");
 }
  else{
     undo.classList.remove("active-tool");
        undo.classList.add("fade");
}
});

// let undo=document.querySelector("#undo");

// undo.addEventListener("click", undoline);

// function undoline(){
//     if(linedb.length)
//     {
//         linedb.pop();
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         drawagain();
//     }
    
// }

// function drawagain(){
//     console.log(linedb);
//     for(let i=0;i<linedb.length;i++)
//     {
//         let line=linedb[i];
        
//         for(let j=0;j<line.length;j++)
//         {
//             let pointobject=line[j];
//             if(pointobject.pointtype=="mt")
//             {
//               ctx.beginPath();  
//               ctx.moveTo(pointobject.x, pointobject.y);

//             }
//             else{
//                 ctx.lineTo(pointobject.x,pointobject.y);
//                 ctx.stroke();
                
//             }
//         }
//     }
// }




// let undo=document.querySelector("#undo");
// let redoicon=document.querySelector("#redo");


// let redo=[];
// undo.addEventListener("click", undoline);

// function undoline(){
//     if(linedb.length)
//     {
//         let redolist=linedb.pop();
//         redo.push(redolist);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         drawagain();
//     }
    
// }

// function drawagain(){
//     console.log(linedb);
//     for(let i=0;i<linedb.length;i++)
//     {
//         let line=linedb[i];
        
//         for(let j=0;j<line.length;j++)
//         {
//             let pointobject=line[j];
//             if(pointobject.pointtype=="mt")
//             {
//               ctx.beginPath();  
//               ctx.moveTo(pointobject.x, pointobject.y);

//             }
//             else{
//                 ctx.lineTo(pointobject.x,pointobject.y);
//                 ctx.stroke();
                
//             }
//         }
//     }
//     console.log("redo operation...");
//     console.log(redo);
// }

// redoicon.addEventListener("click", redoline);

// function redoline(){
//     if(redo.length)
//     {
//         let line=redo.pop();
//         linedb.push(line);
//         for(let i=0;i<line.length;i++)
//         {
//             let pointobject=line[i];
//             if(pointobject.pointtype=="mt")
//             {
//               ctx.beginPath();  
//               ctx.moveTo(pointobject.x, pointobject.y);

//             }
//             else{
//                 ctx.lineTo(pointobject.x,pointobject.y);
//                 ctx.stroke();
                
//             }
//         }
//     }

// }