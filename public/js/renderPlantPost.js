$(document).ready(() => {

    renderPost();

    $("#postBtn").on("click", event => {
        event.preventDefault();
        let postBody = $("#postBody").val().trim();


        $.post("/api/post", {
            body: postBody,
        })
            .then(data => {
                renderPost();
            })

        $("#plantPostModal").removeClass("is-active");

    });



    function renderPost() {

        $("#mainContainer").empty();

        $.get("/api/user_data", (data) => {
            let fullName;
            let handle;

            handle = "@" + data.username;
            fullName = data.first_name + " " + data.last_name;

            $.get("/posts", (data) => {


                for(i = data.length - 1; i >= 0; i--) {

                    let postNcom = $("<div>");
                    postNcom.attr("class", "full")


                    let postContainer = $("<article>");
                    postContainer.attr("class", "media full p-4");
                    let profileImg = $("<figure>");
                    profileImg.attr("class", "media-left");
                    let imgCont = $("<p>");
                    imgCont.attr("class", "image is-64x64");
                    let img = $("<img>");
                    img.attr("src", "../images/jdsface.png");

                    let postContent = $("<div>");
                    postContent.attr("class", "media-content");

                    let contentWrapper = $("<div>");
                    contentWrapper.attr("class", "content");

                    let content = $("<p>");
                    content.text(data[i].body);
                    let userName = $("<strong>");
                    userName.text(fullName + " ");
                    let userHandle = $("<small>");
                    userHandle.text(handle);
                    let lineBreak = $("<br>");


                    $("#mainContainer").append(postNcom);
                    
                    postNcom.append(postContainer);
                    postContainer.append(profileImg);
                    profileImg.append(imgCont);
                    imgCont.append(img);


                    postContainer.append(postContent);
                    postContent.append(contentWrapper);
                    contentWrapper.append(content);

                    content.prepend(lineBreak);
                    content.prepend(userHandle);
                    content.prepend(userName);


                    let comContainer = $("<article>");
                    comContainer.attr("class", "media full mt-6 pb-4 hide");
                    let profileImgCom = $("<figure>");
                    profileImgCom.attr("class", "media-left");
                    let imgContCom = $("<p>");
                    imgContCom.attr("class", "image is-64x64");
                    let imgCom = $("<img>");
                    imgCom.attr("src", "../images/jdsface.png");


                    let comContent = $("<div>");
                    comContent.attr("class", "media-content");

                    let comWrapper = $("<div>");
                    comWrapper.attr("class", "field");
                    let comControl = $("<p>");
                    comControl.attr("control");
                    let comText = $("<textarea>")
                    comText.attr("class", "textarea");
                    comText.attr("placeholder", "Add a comment...");

                    let level = $("<nav>");
                    level.attr("class", "level");
                    let lvlLeft = $("<div>");
                    lvlLeft.attr("class", "level-left");
                    let lvlItem = $("<div>");
                    lvlItem.attr("class", "level-item");
                    let lineBreakCom = $("<br>");
                    let submit = $("<a>");
                    submit.attr("class", "button is-info block");
                    submit.text("Submit");



                    postNcom.append(comContainer);
                    comContainer.append(profileImgCom);
                    profileImgCom.append(imgContCom);
                    imgContCom.append(imgCom);

                    comContainer.append(comContent);
                    comContent.append(comWrapper);
                    comWrapper.append(comControl);
                    comControl.append(comText);


                    comContainer.append(lineBreakCom);
                    
                    comContainer.append(level);
                    level.append(lvlLeft);
                    lvlLeft.append(lvlItem);
                    lvlItem.append(submit);

                    let commentIcon = $("<i>")
                    commentIcon.attr("class", "fas fa-caret-down comment showCom");

                    let commentTag = $("<p>");
                    commentTag.attr("class", "showCom");
                    commentTag.attr("id", "commentTag");
                    commentTag.text("comments");


                    let line = $("<hr>");
                    line.attr("class", "full m-0")


                    postContainer.append(commentIcon);
                    postContainer.append(commentTag);
                    $("#mainContainer").append(line);
                   

                };

            });
        });
    };

});

