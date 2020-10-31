// direct to user profile page when user clicks login now button
$("#loginNowBtn").on("click", function (event) {
    event.preventDefault();
    // if no email or password is specified, do not make call and let user know
    if ($("#loginEmail").val() === '') {
        $("#loginEmail").addClass("is-danger");
    } else if 
        ($("#loginPassword").val() === '') {
        $("#loginPassword").addClass("is-danger");
    } else {
        //redirect to user profile page
        window.location = "profilePage.html";
    };
})


// direct to home  "signup page" when user clicks on roots logo ========================
 $("#rootsBtn").on("click", function (event) {
    event.preventDefault();
    // redirect to next user profile page
    window.location = "signup.html";
})


