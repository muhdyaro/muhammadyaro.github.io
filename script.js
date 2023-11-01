var aboutElement=
document.getElementById("about");

aboutElement.addEventListener("dragstart",function(event){
    event.dataTransfer.setData("text/plain",event.target.id);
});

aboutElement.addEventListener("drag", function(event){
})