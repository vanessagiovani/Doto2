function openNavbar(){
    var x = document.getElementById("navbar-content");
    if(x.className === "top-nav"){
        x.className += " responsive"
    }
    else{
        x.className = "top-nav"
    }
}