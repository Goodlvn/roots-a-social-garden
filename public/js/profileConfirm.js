$(document).ready(() => {

    firstName = $("#firstName");
    lastName = $("#lastName");
    bio = $("#bio");

    $("#confirmProfile").on("click", (event) => {
        console.log(firstName.val().trim(), lastName.val().trim(), bio.val().trim());
    })
})