function toggleDropdown(){
    document.getElementById("form").classList.toggle("dropdown-shown");
    document.querySelector(".wrapper").classList.toggle("hide");
    document.getElementById("hgroup").classList.toggle("hide");
    document.querySelector(".component-picker").classList.toggle("noborder");

}


// document.getElementsByClassName(component-picker).addEventListener("mousedown", document.getElementById("form").classList.remove("dropdown-shown"));