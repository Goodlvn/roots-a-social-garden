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

   // view circle images inside garden highlights ===================================
   //1st circle image
   $("#plant1").on("click", function () {
      $("#plant1Modal").addClass("is-active");
   });

   $("#plant1Modal").on("click", "#close", function () {
      $("#plant1Modal").removeClass("is-active");
   });

   $("#plant1Modal").on("click", ".modal-background", function () {
      $("#plant1Modal").removeClass("is-active");
   });

   //2nd circle image
   $("#plant2").on("click", function () {
      $("#plant2Modal").addClass("is-active");
   });

   $("#plant2Modal").on("click", "#close", function () {
      $("#plant2Modal").removeClass("is-active");
   });

   $("#plant2Modal").on("click", ".modal-background", function () {
      $("#plant2Modal").removeClass("is-active");
   });

   //3nd circle image
   $("#plant3").on("click", function () {
      $("#plant3Modal").addClass("is-active");
   });

   $("#plant3Modal").on("click", "#close", function () {
      $("#plant3Modal").removeClass("is-active");
   });

   $("#plant3Modal").on("click", ".modal-background", function () {
      $("#plant3Modal").removeClass("is-active");
   });

   //4th circle image
   $("#plant4").on("click", function () {
      $("#plant4Modal").addClass("is-active");
   });

   $("#plant4Modal").on("click", "#close", function () {
      $("#plant4Modal").removeClass("is-active");
   });

   $("#plant4Modal").on("click", ".modal-background", function () {
      $("#plant4Modal").removeClass("is-active");
   });

   //5th circle image
   $("#plant5").on("click", function () {
      $("#plant5Modal").addClass("is-active");
   });

   $("#plant5Modal").on("click", "#close", function () {
      $("#plant5Modal").removeClass("is-active");
   });

   $("#plant5Modal").on("click", ".modal-background", function () {
      $("#plant5Modal").removeClass("is-active");
   });

   // direct to new highlight modal when user clicks on + button ========================
   $("#addNewHighlight").on("click", function () {
<<<<<<< HEAD
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
=======
      $("#newHighlightModal").addClass("is-active");
   });

   $("#newHighlightModal").on("click", "#close", function () {
      $("#newHighlightModal").removeClass("is-active");
   });

   $("#newHighlightModal").on("click", ".modal-background", function () {
      $("#newHighlightModal").removeClass("is-active");
   });

   $("#mainContainer").on("click", ".showCom", (event) => {
      let comments = event.target.parentElement.parentNode.childNodes[1];
      comments.classList.toggle("hide");
   });

   $("#getStartedCloseBtn").on("click", (data) => {
>>>>>>> 1b55440174d92e7a21b8844093e864d99e90ff76
      $("#getStarted").addClass("hide");
   });

   $.get("/api/user_data", (data) => {
      $(".handle").text("@" + data.username);
      $(".fullName").text(data.first_name + " " + data.last_name);
      $(".bio").text(data.bio);
   });

   // Check for click events on the navbar burger icon
   $(".navbar-burger").click(function () {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
   });
});



