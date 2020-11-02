// direct to user profile page when user clicks login now button
$(document).ready(() => {

    var username = $("#username");
    var password = $("#password");

    $("#loginNowBtn").on("click", function (event) {

        event.preventDefault();
        // if no email or password is specified, do not make call and let user know
        if ($("#username").val() === '') {
            $("#username").addClass("is-danger");
        } else if
            ($("#password").val() === '') {
            $("#password").addClass("is-danger");
        } else {

            let userData = {
                username: username.val().trim(),
                password: password.val().trim()
            };

            if (!userData.username || !userData.password) {
                return;
            }

            logInUser(userData.username, userData.password);
            username.val("");
            password.val("");
        };

    });

    function logInUser(username, password) {
        $.post("/api/login", {
            username: username,
            password: password
        })
            .then(() => {
                window.location.replace("/members");
            })
            .catch((err) => {
                console.log(err);
            });
    }


    $("#signUpBtn").on("click", function (event) {
        event.preventDefault();
        // redirect to next user profile page
        window.location = "/";
    })

});

// create event listener for hamburger menu
$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
  });






