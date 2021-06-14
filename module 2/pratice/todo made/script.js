let inputtext=document.querySelector(".todoinput");
let addbutton=document.querySelector(".addinputbutton");
let divcontainner=document.querySelector(".contains");


console.log()
inputtext.addEventListener("keypress", function (e)
{
    if(e.key == "Enter")
    {
        addtodo();
    }
});

addbutton.addEventListener("click",addtodo);
console.log(addbutton);
function addtodo()
{
    console.log("clicked....");
    let inputvalue=inputtext.value;
    
    if(inputvalue)
    {
        console.log(inputvalue);
        appendtodo(inputvalue);
        inputtext.value="";
    }
}

function appendtodo(teext)
{
    let cdiv=document.createElement("div");
    cdiv.classList.add("todoitem");
    
    let ptag=document.createElement("p");
    ptag.classList.add("ptagclass");
    ptag.textContent=teext;

    let delbutton=document.createElement("button");
    delbutton.classList.add("delbuttonclass");
    delbutton.textContent="delete";
    delbutton.addEventListener("click",deleteelement);

    cdiv.append(ptag);
    cdiv.append(delbutton);
    console.log("hii");
    divcontainner.append(cdiv);
}

function deleteelement(e)
{
    //console.log(e.target.parentNode);
    e.target.parentNode.remove();
}