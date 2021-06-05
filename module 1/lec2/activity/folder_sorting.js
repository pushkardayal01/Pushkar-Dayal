let fs=require("fs");
let documenttype=require("./util.js");
console.log(documenttype);


let testfolder="./download";
let allfilename=fs.readdirSync(testfolder);
console.log(allfilename);
for(i=0;i<allfilename.length;i++)
{
    let extension=getextension(allfilename[i]);
    checkextension(extension,allfilename[i]);
    
}

function getextension(f)
{
    f=f.split(".");
    return f[1];
}
function checkextension(extension,file)
{
      //extension=doc
      let foldername="";
      for(let key in documenttype)
      {
            let a=documenttype[key];
            console.log(a);
            if(a.includes(extension))
            {
                foldername=key;
                break;
            }
            //console.log("Hello");

            
     }

            let folderpath=testfolder+"/"+foldername;
            if(fs.existsSync(folderpath))
            {
               Movesfolder(folderpath,file);
               //console.log("hii");
            }
            else{
               createfolder(folderpath);
               Movesfolder(folderpath,file);
               //console.log("hey!!");
            }
      


}

function createfolder(folderpath) 
{
    fs.mkdirSync(folderpath);
}

function Movesfolder(folderpath,file)
{
    let sf=testfolder +file;
    let df=folderpath+file;
    fs.copyFileSync(sf,df);
}

