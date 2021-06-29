var itemId = document.querySelectorAll("#cont");
itemId.addEventListener("mouseover",myFunc);
function myFunc() {
 itemId.classList.add("zoom");
}


var id = document.getElementById("cont");
function myFunc() {
    id.addEventListener("click",function(){
        this.classList.add("zoom");
    });
}