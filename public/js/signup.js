 // direct to the new profile set up page when user clicks on signup button ========================
 $("#signupBtn").on("click", function (event) {
    event.preventDefault();
   // check to see if both passwords match, if so redirect user to the next page ========================
    if ($("#password1").val() === $("#confirmPassword").val()) {
        var email = $("#signEmail").val();
        console.log(email);
        var password = $("#password1").val();
        console.log(password)
        var password2 = $("#confirmPassword").val();
        console.log(password2)
        // redirect to new profile set-up page
        window.location = "profileSetup.html";
    } else {
        alert("Passwords don't match. Please try again.");
    };
})
   // direct to login page when user clicks on login button ========================
   $("#loginBtn").on("click", function (event) {
    event.preventDefault();
    // redirect to next user profile page
    window.location = "login.html";
})

