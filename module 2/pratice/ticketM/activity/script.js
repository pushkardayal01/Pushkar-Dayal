let filter=document.querySelector(".filter");
let ticket=document.querySelector(".ticket-constainer");
let firstpress=false;
//-->function to color the background
// filter.addEventListener("click",colorback);
// function colorback(e)
// {
//     console.log(e);
//     let c=e.target.classList[1];
//     if(ticket.classList.length>1)
//     {
//         ticket.classList.remove(ticket.classList[1]);
//     }
//     ticket.classList.add(c);
// }

// ticket.innerHTML(`<div class="tickets">
// <div class="ticket-head"></div>
// <div class="ticket-body">
//     <div class="ticket-input"></div>
//     <div class="ticket-design">
//         <div class="ticket-Red"></div>
//         <div class="ticket-Green"></div>
//         <div class="ticket-Blue"></div>
//         <div class="ticket-Yellow"></div>
//         <div class="ticket-black"></div>
// </div>`)

let create=document.querySelector(".open");
create.addEventListener("click",addhtml);

function addhtml()
{
    console.log("clicked on plus button");
    ticket.innerHTML=` <div class="tickets">
    <div class="ticket-body">
        <div class="ticket-input" contentEditable="true" spellcheck="false">Enter the text here!!!</div>
        <div class="ticket-design">
            <div class="ticket-Red"></div>
            <div class="ticket-Green"></div>
            <div class="ticket-Blue"></div>
            <div class="ticket-Yellow"></div>
            <div class="ticket-black"></div>
    </div>`;
    let input=document.querySelector(".ticket-input");
    console.log(input);
    input.addEventListener("keypress",function(e)
    {
        if(!firstpress)
    {
        console.log("hii");
        firstpress=true;
        //input.textcontent="";
        e.target.textcontent="";
        //console.log(firstpress);
    }
    });

}
//<div class="ticket-head"></div>
let deleteticket=document.querySelector(".close");
deleteticket.addEventListener("click",deletetic);

function deletetic()
{
    document.querySelector(".tickets").remove();
    firstpress=false;
}

// let ticketinput=document.querySelector(".ticket-input");
// ticketinput.addEventListener("click",delprev);
// function delprev()
// {
//     console.log(hi);
// }
// function typing(e)
// {
//     //let s=e.target;
//     //console.log(input.textcontent);
//     if(!firstpress)
//     {
//         firstpress=true;
//         //console.log(e);
//         //console.log(e.target.textcontent);
//         input.textcontent="";
//         //console.log(e.target.textcontent);
//         console.log(firstpress);
//     }

    
// }