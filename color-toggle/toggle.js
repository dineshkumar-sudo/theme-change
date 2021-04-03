var button = document.querySelector("button");
iswhite= true;
button.addEventListener("click" , function(){
    if(iswhite){
        document.body.style.background = "black";
       
    }else{
        document.body.style.background = "white";
       
    }
    iswhite =!iswhite;
});