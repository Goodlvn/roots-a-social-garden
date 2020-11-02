// direct to plant post when user clicks on plant button inside modal ========================
$("#createBtn").on("click", function () {
    $("#createModal").addClass("is-active");    
 })

 $("#createModal").on("click", "#close", function () {
    $("#createModal").removeClass("is-active");  
 })

 $("#createModal").on("click", ".modal-background", function () {
    $("#createModal").removeClass("is-active");  
 })

$("#plant").on("click", (event) => {
   renderPost();
   $("#createModal").removeClass("is-active");   
});

function renderPost() {
    let box = $("<div>");
    box.attr("class", "box");
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
    // postContent.text("Week 1");

    let userInfo = $("<p>");
    let userName = $("<strong>");
    userName.text("John Smith");
    let userHandle = $("<small>");
    userHandle.text("@johnsmith");
    let userText = $("<p>");
    userText.text("Week 1")
    let br = $("<br>");


// container.append(figure));
// figure.append(imgCont.append(img)), content.append(postContent.append(post, strong, small, small, br)
//create new frow for colmun to append to
$('#plantPost').append(box);
box.append(container);
container.append(figure);
figure.append(imgCont);
imgCont.append(img);
container.append(userInfo)
userInfo.append(userName);
userInfo.append(userHandle);
container.append(content);
content.append(br, userText);
}



