let undo=document.querySelector("#undo");
let redoicon=document.querySelector("#redo");


// let redo=[];
undo.addEventListener("click", undoline);

function undoline(){
    if(linedb.length)
    {
        let redolist=linedb.pop();
        redo.push(redolist);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawagain();
    }
    
}

function drawagain(){
    console.log(linedb);
    for(let i=0;i<linedb.length;i++)
    {
        let line=linedb[i];
        
        for(let j=0;j<line.length;j++)
        {
            let pointobject=line[j];
            if(pointobject.pointtype=="mt")
            {
              ctx.beginPath();  
              ctx.moveTo(pointobject.x, pointobject.y);

            }
            else{
                ctx.lineTo(pointobject.x,pointobject.y);
                ctx.stroke();
                
            }
        }
    }
    console.log("redo operation...");
    console.log(redo);
}

redoicon.addEventListener("click", redoline);

function redoline(){
    if(redo.length)
    {
        let line=redo.pop();
        linedb.push(line);
        for(let i=0;i<line.length;i++)
        {
            let pointobject=line[i];
            if(pointobject.pointtype=="mt")
            {
              ctx.beginPath();  
              ctx.moveTo(pointobject.x, pointobject.y);

            }
            else{
                ctx.lineTo(pointobject.x,pointobject.y);
                ctx.stroke();
                
            }
        }
    }

}