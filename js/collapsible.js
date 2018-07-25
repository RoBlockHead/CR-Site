var coll = document.getElementsByClassName("collapsible");
var coll2 = document.getElementsByClassName("collapsible2");
var cont = document.getElementsByClassName("content");
var i;

window.onload = function(){
    for (i = 0; i < coll2.length; i++) {
        coll2[i].style.display = "block";
    }
    for (i = 0; i < cont.length; i++) {
        cont[i].style.display = "block";
    }
};

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            while (!content.classList.contains("collapsible")){
                content.style.maxHeight = null;
                content.style.padding = "0 18px";
                if (content.classList.contains("active")){
                    content.classList.toggle("active");
                }
                content = content.nextElementSibling;
            }
        } 
        else {
            while (!content.classList.contains("collapsible")){
                if (content.classList.contains("collapsible2")){
                    content.style.padding = 18+"px";
                    content.style.maxHeight = (content.scrollHeight + 40) + "px";
                }
                content = content.nextElementSibling;
            }
        }
    });
}

var coll = document.getElementsByClassName("collapsible2");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.padding = "0 18px";
        } else {
            content.style.maxHeight = (content.scrollHeight + 40) + "px";
            content.style.padding = 18+"px";
        }
    });
}