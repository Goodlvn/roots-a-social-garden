 // direct to the new profile set up page when user clicks on signup button ========================
 $("#signupBtn").on("click", function (event) {
    event.preventDefault();
    var email = $("#signEmail").val();
    console.log(email);
    var password = $("#password1").val();
    console.log(password)
    var password2 = $("#confirmPassword").val();
    console.log(password2)
    // redirect to new profile set-up page
    window.location = "profileSetup.html";
})
   // direct to login page when user clicks on login button ========================
   $("#loginBtn").on("click", function (event) {
    event.preventDefault();
    // redirect to next user profile page
    window.location = "login.html";
})
// event listener for signup button ==========================================
$("#signupBtn").on("click", function (event) {
    // if no email is specified, do not make call and let user know
    if ($("#email").val() === '') {
        $("#email").addClass("is-danger");
        if ($("#password").children().length === 7) {
            $("#password").append($("<p>", { "class": "is-danger help", id: "removeMe", text: "Please input a password with atleast 8 characters." }))
        }
    } else {
        // clear user input
        $("#email").val('');
        $("#password").val('');
    }
})
