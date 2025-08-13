let icon = document.getElementById("moon-icon");

   icon.onclick = function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        icon.src = "Images/sun Img.png";
        icon.style.color = "white";
    }
    else{
        icon.src = "Images/moon Image.png";     
    }
}