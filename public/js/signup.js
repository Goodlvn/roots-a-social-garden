// direct to the new profile set up page when user clicks on signup button ========================


$(document).ready(() => {

    let emailInput = $("#signEmail");
    let passwordInput = $("#password");
    let confirmPassword = $("#confirmPassword");

    $("#signupBtn").on("click", (event) => {
        event.preventDefault();
        // check to see if both passwords match, if so redirect user to the next page ========================
        if (passwordInput.val() === confirmPassword.val()) {

            let userData = {
                email: emailInput.val().trim(),
                password: passwordInput.val().trim()
            };

            if(!userData.email || !userData.password) {
                return;
            }

            signUpUser(userData.email, userData.password);
            emailInput.val("");
            passwordInput.val("");
            confirmPassword.val("");

        } else {
            emailInput.val("");
            passwordInput.val("");
            confirmPassword.val("");
            alert("Passwords don't match. Please try again.");
        };
    });

    function signUpUser(email, password) {
        $.post("/api/signup", {
            email: email,
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


  
});

