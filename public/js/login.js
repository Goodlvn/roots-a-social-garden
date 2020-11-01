// direct to user profile page when user clicks login now button
$(document).ready(() => {

    var emailInput = $("#loginEmail");
    var passwordInput = $("#loginPassword");

    $("#loginNowBtn").on("click", function (event) {

        event.preventDefault();
        // if no email or password is specified, do not make call and let user know
        if ($("#loginEmail").val() === '') {
            $("#loginEmail").addClass("is-danger");
        } else if
            ($("#loginPassword").val() === '') {
            $("#loginPassword").addClass("is-danger");
        } else {

            let userData = {
                email: emailInput.val().trim(),
                password: passwordInput.val().trim()
            };

            if (!userData.email || !userData.password) {
                return;
            }

            logInUser(userData.email, userData.password);
            emailInput.val("");
            password.val("");
        };

    });

    function logInUser(email, password) {
        $.post("/api/login", {
            email: email,
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






