// Get the modals
var modal = document.getElementById('myModal-1');
var modal2= document.getElementById('myModal-2');

// Get the target that opens the modals
var btn = document.getElementById("modal-1");
var btn2 = document.getElementById("modal-2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2= document.getElementById("span2");
// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
  }
btn2.onclick= function(){
    modal2.style.display ="block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
span2.onclick= function(){
    modal2.style.display= "none";
}


// When the user clicks anywhere outside of the modal, close it
//brian- try to fix this part so both windows can be closed this way. I can't get it to target correctly.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
