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
            });

        $("#plantPostModal").removeClass("is-active");
    });

    $("#mainContainer").on("click", ".postComment", event => {
        let postTo = event.target.closest("article");
        let postText = event.target.closest("article").querySelector("textarea");
        let postid = event.target.closest(".postOrigin").querySelector(".post").dataset.postid;

        if (postText.value.trim() === "") {
            console.log("no dice.");
            return
        } else {
            $.post("/api/comment", {
                text: postText.value.trim(),
                postId: postid
            })
                .then(data => {
                    postText.value = "";
                    postComment(postTo, data.text);
                });
        };
    });

     function renderPost() {
        $("#mainContainer").empty();

        $.get("/api/user_data", (res) => {
            let fullName = "@" + res.username;
            let uHandle = res.first_name + " " + res.last_name;

            $.get("/posts", (data) => {

                for (i = data.length - 1; i >= 0; i--) {
                 
                    let postNcom = $("<div>");
                    postNcom.attr("class", "full postOrigin");
                    $("#mainContainer").append(postNcom);

                    createPost(postNcom, data[i].body, fullName, uHandle, data[i].id);
                    addCommentBox(postNcom);

                    $.get("/api/comments/" + data[i].id, info => {

                       let addComment = postNcom.children("article.commentBox")[0];
                
                        info.forEach(comment => {
                            $.get("api/user_data/" + comment.userId, cashe => {
                                persistComments(cashe[0].first_name, cashe[0].last_name, cashe[0].username, addComment, comment.text);
                            });
                
                        });  
                    });
                };
            });
        });
    };

    function createPost(appendMe, iterateMe, name, handle, postTag) {
        let postContainer = $("<article>");
        postContainer.attr("class", "media full p-4 post");
        postContainer.attr("data-postid", postTag);

        let profileImg = $("<figure>");
        profileImg.attr("class", "media-left");

        let imgCont = $("<p>");
        imgCont.attr("class", "image is-64x64");

        let img = $("<img>");
        img.attr("src", "../images/profilePlant.jpg");

        let postContent = $("<div>");
        postContent.attr("class", "media-content");

        let contentWrapper = $("<div>");
        contentWrapper.attr("class", "content");

        let content = $("<p>");
        content.text(iterateMe);
        content.attr("class", "pb-3")

        let userName = $("<strong>");
        userName.text(name + " ");

        let userHandle = $("<small>");
        userHandle.text(handle);

        let lineBreak = $("<br>");

        appendMe.append(postContainer);
        postContainer.append(profileImg);
        profileImg.append(imgCont);
        imgCont.append(img);
        postContainer.append(postContent);
        postContent.append(contentWrapper);
        contentWrapper.append(content);
        content.prepend(lineBreak);
        content.prepend(userHandle);
        content.prepend(userName);

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

    function addCommentBox(appendMe) {
        let comContainer = $("<article>");
        comContainer.attr("class", "media full mt-4 pb-4 hide commentBox commentFunc");
        let profileImgCom = $("<figure>");
        profileImgCom.attr("class", "media-left");
        let imgContCom = $("<p>");
        imgContCom.attr("class", "image is-64x64");
        let imgCom = $("<img>");
        imgCom.attr("src", "../images/profilePlant.jpg");

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
        submit.attr("class", "button is-info block m-3 postComment");
        submit.text("Submit");

        appendMe.append(comContainer);
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
    };

    function postComment(appendMe, comment) {

        $.get("/api/user_data", data => {

            let postContainer = $("<article>");
            postContainer.attr("class", "media full p-4 commentFunc");

            let profileImg = $("<figure>");
            profileImg.attr("class", "media-left");

            let imgCont = $("<p>");
            imgCont.attr("class", "image is-64x64");

            let img = $("<img>");
            img.attr("src", "../images/profilePlant.jpg");

            let postContent = $("<div>");
            postContent.attr("class", "media-content");

            let contentWrapper = $("<div>");
            contentWrapper.attr("class", "content");

            let content = $("<p>");
            content.text(comment);
            content.attr("class", "pb-3")

            let userName = $("<strong>");
            userName.text(data.first_name + " " + data.last_name + " ");

            let userHandle = $("<small>");
            userHandle.text("@" + data.username);

            let lineBreak = $("<br>");

            postContainer.insertBefore(appendMe);
            postContainer.append(profileImg);
            profileImg.append(imgCont);
            imgCont.append(img);
            postContainer.append(postContent);
            postContent.append(contentWrapper);
            contentWrapper.append(content);
            content.prepend(lineBreak);
            content.prepend(userHandle);
            content.prepend(userName);
        });
    };

    function persistComments(firstName, lastName, username, appendMe, commentCreate) {

        let postContainer = $("<article>");
        postContainer.attr("class", "media full p-4 hide commentFunc");

        let profileImg = $("<figure>");
        profileImg.attr("class", "media-left");

        let imgCont = $("<p>");
        imgCont.attr("class", "image is-64x64");

        let img = $("<img>");
        img.attr("src", "../images/profilePlant.jpg");

        let postContent = $("<div>");
        postContent.attr("class", "media-content");

        let contentWrapper = $("<div>");
        contentWrapper.attr("class", "content");

        let content = $("<p>");
        content.text(commentCreate);
        content.attr("class", "pb-3")

        let userName = $("<strong>");
        userName.text(firstName + " " + lastName + " ");

        let userHandle = $("<small>");
        userHandle.text("@" + username);

        let lineBreak = $("<br>");

        postContainer.insertBefore(appendMe);
        postContainer.append(profileImg);
        profileImg.append(imgCont);
        imgCont.append(img);
        postContainer.append(postContent);
        postContent.append(contentWrapper);
        contentWrapper.append(content);
        content.prepend(lineBreak);
        content.prepend(userHandle);
        content.prepend(userName);
    };
});

