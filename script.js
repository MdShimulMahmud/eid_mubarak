var itemId = document.querySelectorAll(".item")[0];

function myFunc() {
    itemId.addEventListener("mouseover",function(){
        itemId.classList.add("zoom");
    });
}


