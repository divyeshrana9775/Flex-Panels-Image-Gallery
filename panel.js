const panels = document.querySelectorAll(".panel");
function toggleOpen(){
    console.log("hello");
 this.classList.toggle("open");
}
function toggleAcitve(){
    console.log(e.propertyName);
    if(e.propertyName.includes("flex")){
        this.classList.toggle("open-acitve");
    }
}
panels.forEach(panel=> panel.addEventListener("click", toggleOpen));
panels.forEach(panel=> panel.addEventListener("transitionend", toggleAcitve));