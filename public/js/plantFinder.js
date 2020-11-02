$("#modal").hide();

$("#plantFinderBtn").on("click", function(event){
event.preventDefault();
// $("#instructions").empty();
// $("#plantName").text("Plant Name:")
// $("#familyName").text("Family Common Name:")
// $("#scientificName").text("Scientific Name:")
// var plant = $("#searchPlant").val();
var queryURL = "https://trefle.io/api/v1/plants/search?token=sAe0dDZyCrVdJe9k1ePcwrjgedscCASoJiMBAh3wRic&q=coconut";
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    alert("test")
    // if(response.plant == null){
    //   $("#modal").show();
    // } else {$("#modal").hide();}



          
  })


})