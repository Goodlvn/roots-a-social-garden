$(document).ready(function () {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));

    $("#plantPostBtn").on("click", function () {
      $("#plantPostModal").addClass("is-active");
      $("#postBody").val("");
   
   });
   
   $("#plantPostModal").on("click", "#close", function () {
       $("#plantPostModal").removeClass("is-active");  
    });
   
    $("#plantPostModal").on("click", ".modal-background", function () {
       $("#plantPostModal").removeClass("is-active");  
    });
   
   // direct to new highlight modal when user clicks on + button ========================
   $("#addNewHighlight").on("click", function () {
       $("#newHighlightModal").addClass("is-active");
    });
   
    $("#newHighlightModal").on("click", "#close", function () {
       $("#newHighlightModal").removeClass("is-active");  
    });
   
    $("#newHighlightModal").on("click", ".modal-background", function () {
       $("#newHighlightModal").removeClass("is-active");  
    });
   
    $("#mainContainer").on("click", ".showCom", (event) => {
       let comments = event.target.closest(".postOrigin");
       let commentsNodeList = comments.querySelectorAll(".commentFunc");
       let postColor = comments.querySelector(".post");

       commentsNodeList.forEach(com => com.classList.toggle("hide"));
       postColor.classList.toggle("has-background-success-light");
    });
   
    $("#getStartedCloseBtn").on("click", (data) => {
      $("#getStarted").addClass("hide");
    });

    $.get("/api/user_data", (data) => {
      $(".handle").text("@" + data.username);
      $(".fullName").text(data.first_name + " " + data.last_name);
      $(".bio").text(data.bio);
   });

   // Check for click events on the navbar burger icon
   $(".navbar-burger").click(function() {
       // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
       $(".navbar-burger").toggleClass("is-active");
       $(".navbar-menu").toggleClass("is-active");
   });
});

