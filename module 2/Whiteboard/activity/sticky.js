let sticky=document.querySelector("#Sticky");
let stickycont=[];
sticky.addEventListener("click",function(e){
    let stickydiv=document.createElement("div");
    stickydiv.classList.add("stricky");
    stickydiv.innerHTML =`<div class="header">
    <div class="minimize"> -</div>
    <div class="close">X</div>
</div>
<div class="stricky-body" contenteditable="true"></div>`
     
document.querySelector("body").append(stickydiv);

let close=document.querySelector(".close");
close.addEventListener("click",function(){
    stickydiv.remove();
});

let minimize=document.querySelector(".minimize");
let stickycontent=document.querySelector(".stricky-body");
minimize.addEventListener("click",function(){
    let content=stickycontent.textContent;
    stickycont.push(content);
    close.click();
    console.log(content);
});

let initialX;
let initialY;
let stickyhold=false;
let stickyheader=document.querySelector(".header");
stickyheader.addEventListener("mousedown",function(e){
    stickyhold=true;
    initialX=e.clientX;
    initialY=e.clientY;
});
stickyheader.addEventListener("mousemove",function(e){
    if(stickyhold){
        let finialX=e.clientX;
        let finalY=e.clientY;

        let dx=finialX-initialX;
        let dy=finalY-initialY;

        let {top , left} = stickydiv.getBoundingClientRect();
        stickydiv.style.top=top+ dy +"px";
        stickydiv.style.left=top+ dx +"px";

        initialX=finialX;
        initialY=finialY;
    }
});
stickyheader.addEventListener("mouseup",function(e){
    stickyhold=false;

});
// function closesticky(){
//     stickydiv.remove();
// }



});




// {/* <div class="stricky">
//         <div class="header">
//             <div class="minimize"> -</div>
//             <div class="close">X</div>
//         </div>
//         <div class="stricky-body" contenteditable="true"></div>
//     </div> */}