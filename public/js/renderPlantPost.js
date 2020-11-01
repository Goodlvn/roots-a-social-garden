
$("#garden").on("click", (event) => {
   renderPost();
});

function renderPost() {
    let container = $("<article>");
    container.attr("class", "media");
    let figure = $("<figure>");
    figure.attr("class", "media-left");
    let imgCont = $("<p>");
    imgCont.attr("class", "image is-64x64");
    let img = $("<img>");
    img.attr("src", "https://versions.bulma.io/0.7.4/images/placeholders/128x128.png");

    let content = $("<div>");
    content.attr("class", "media-content");
    let postContent = $("<div>");
    postContent.attr("class", "content");
    postContent.text("Week 1");

    let userInfo = $("<p>");
    let userName = $("<strong>");
    userName.text("John Smith");
    let userHandle = $("<small>");
    userHandle.text("@johnsmith")
    let br = $("<br>");


// container.append(figure));
// figure.append(imgCont.append(img)), content.append(postContent.append(post, strong, small, small, br)
//create new frow for colmun to append to
$('#plantPost').append(container);
container.append(figure);
figure.append(imgCont);
imgCont.append(img);
container.append(userInfo)
userInfo.append(userName);
userInfo.append(userHandle);
container.append(content);
content.append(postContent);
}


