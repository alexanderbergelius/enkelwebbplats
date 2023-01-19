function bytbild() {
    document.getElementById('testbyt1').src='img/map.jpg';
}
function byttillbaka() {
    document.getElementById('testbyt1').src='img/GRRM3.jpg';
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('dropbtn')) { 
        var dropdowns = documents.getElementByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; 1++) {
            var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
             }
         }
     }
 }

 /* Dropdown */
 function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
 }

 window.onclick = function(event){
    if(!event.targetmatches('.dropbtn')) {
        var ropdowns =
        document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < ropdowns.length; i++) {
            var openDropdown = dropdowns[i];
 }