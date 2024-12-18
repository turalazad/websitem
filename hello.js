const menulist = document.getElementById("menuList");
const menuicon = document.getElementsByClassName("menu-icon");
menulist.style.maxHeight = "0px";

function toggleMenu(){
    if(menulist.style.maxHeight == "0px"){
        menulist.style.maxHeight = "300px";
    }
    else {
        menulist.style.maxHeight = "0px";
    }
}
