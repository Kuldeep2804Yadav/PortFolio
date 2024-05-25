function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks.classList.contains("show-menu")) {
        navLinks.classList.remove("show-menu");
    } else {
        navLinks.classList.add("show-menu");
    }
}

var btn = document.querySelector("#send");
btn.addEventListener("click", function(event) {
    event.preventDefault;
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var message= document.getElementById("message").value;

     var FormDetails={
       name:name,
       email:email,
       message:message
    }
    localStorage.setItem(name,JSON.stringify(FormDetails));
})
