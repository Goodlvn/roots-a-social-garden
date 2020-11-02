// direct to the new profile set up page when user clicks on signup button ========================
$(document).ready(() => {

    let username = $("#username");
    let password = $("#password");
    let confirmPassword = $("#confirmPassword");
  
    $("#signupBtn").on("click", (event) => {
        event.preventDefault();
        // check to see if both passwords match, if so redirect user to the next page ========================
        if (password.val().trim() === confirmPassword.val().trim()) {
  
            let userData = {
                username: username.val().trim(),
                password: password.val().trim()
            };
  
            if(!userData.username || !userData.password) {
                return;
            }
  
            signUpUser(userData.username, userData.password);
            username.val("");
            password.val("");
            confirmPassword.val("");
  
        } else {
            username.val("");
            password.val("");
            confirmPassword.val("");
            alert("Passwords don't match. Please try again.");
        };
    });
  
    function signUpUser(username, password) {
        $.post("/api/signup", {
            username: username,
            password: password
        })
        .then((data) => {
            window.location.replace("/members");
        })
        .catch(handleLoginErr);
    };
  
    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    };

    // direct to login page when user clicks on login button ========================
    $("#loginBtn").on("click", function (event) {
        event.preventDefault();
        // redirect to next user profile page
        window.location = "login";
    })

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
});


