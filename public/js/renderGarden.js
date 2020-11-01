$("#garden").on("click", (event) => {
    renderGarden();
 });
 
 function renderGarden() {
     
    let card = $("<div>");
    card.attr("class", "column is-one-third");
    let img = $("<img>");
    img.attr("src", "https://bulma.io/images/placeholders/1280x960.png");
 
    $('.gardenContainer').append(card);
    card.append(img);



 }