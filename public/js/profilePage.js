$(document).ready(function () {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));
});

// direct to modal when user clicks on plant post button ========================
$("#plantPostBtn").on("click", function () {
   $("#plantPostModal").addClass("is-active");
    
})

$("#plantPostModal").on("click", "#close", function () {
    $("#plantPostModal").removeClass("is-active");  
 })

 $("#plantPostModal").on("click", ".modal-background", function () {
    $("#plantPostModal").removeClass("is-active");  
 })

