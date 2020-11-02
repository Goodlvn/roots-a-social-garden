

$(document).ready(() => {

    renderPost();

    $("#postBtn").on("click", event => {
        event.preventDefault();

        let postTitle = $("#postTitle").val().trim();
        let postBody = $("#postBody").val().trim();

        $.post("/api/post", {
            title: postTitle,
            body: postBody,
        })
            .then(data => {

                res.send("posted")
            })


    });

    function renderPost() {

        $.get("/api/user_data", (data) => {
            let fullName;
            let handle;

            handle = "@" + data.username;
            fullName = data.first_name + " " + data.last_name;

            $.get("/posts", (data) => {

                console.log(data);
    
                data.forEach(post => {
    
                    let postContainer = $("<article>");
                    postContainer.attr("class", "media full");
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
                    content.text(post.body);
                    let userName = $("<strong>");
                    userName.text(fullName + " ");
                    let userHandle = $("<small>");
                    userHandle.text(handle);
                    let lineBreak = $("<br>");
    

                    $("#mainContainer").append(postContainer);
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
            });
            
        });



       

    }

});






// function renderPost() {

//     let box = $("<div>");
//     box.attr("class", "box");
//     let container = $("<article>");
//     container.attr("class", "media");
//     let figure = $("<figure>");
//     figure.attr("class", "media-left");
//     let imgCont = $("<p>");
//     imgCont.attr("class", "image is-64x64");
//     let img = $("<img>");
//     img.attr("src", "https://versions.bulma.io/0.7.4/images/placeholders/128x128.png");

//     let content = $("<div>");
//     content.attr("class", "media-content");
//     let postContent = $("<div>");
//     postContent.attr("class", "content");


//     let userInfo = $("<p>");
//     let userName = $("<strong>");
//     userName.text("John Smith");
//     let userHandle = $("<small>");
//     userHandle.text("@johnsmith");
//     let userText = $("<p>");
//     userText.text("Week 1")
//     let br = $("<br>");



//     $('#plantPost').append(box);
//     box.append(container);
//     container.append(figure);
//     figure.append(imgCont);
//     imgCont.append(img);
//     container.append(userInfo)
//     userInfo.append(userName);
//     userInfo.append(userHandle);
//     container.append(content);
//     content.append(br, userText);
// }



