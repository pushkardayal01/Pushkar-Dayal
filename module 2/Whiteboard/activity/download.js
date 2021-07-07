let download=document.querySelector("#download");

download.addEventListener("click" , function(){
    let imagePath = canvas.toDataURL("image/jpg");
    console.log(imagePath);
    // <a href="" download="canvas.jpg"></a> 
    let aTag = document.createElement("a");
    aTag.download = "canvas.jpg";
    aTag.href = imagePath;
    aTag.click();
})