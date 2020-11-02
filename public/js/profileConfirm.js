$(document).ready(() => {

    let firstName = $("#firstName");
    let lastName = $("#lastName");
    let bio = $("#bio");

    $("#confirmProfile").on("click", (event) => {

        let userData = {
            firstname: firstName.val().trim(),
            lastname: lastName.val().trim(),
            bio: bio.val().trim()
        }

        if (!userData.firstname || !userData.lastname || !userData.bio) {
            return;
        }

        confirmUser(userData.firstname, userData.lastname, userData.bio);
        firstName.val("");
        lastName.val("");
        bio.val("");
    });

    function confirmUser(firstName, lastName, bio) {

        $.ajax({
            method: "PUT",
            url: "/api/createprofile",
            data: {
              first_name: firstName,
              last_name: lastName,
              bio: bio
            }
          })
            .then((data) => {
                window.location.replace("/login");
            })
            .catch(handleLoginErr);
    };

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    };
});