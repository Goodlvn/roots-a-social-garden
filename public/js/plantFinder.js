$("#modal").hide();

$("#plantFinderBtn").on("click", function(event){
event.preventDefault();
$("#instructions").empty();
// $("#plantName").text("Plant Name:")
// $("#familyName").text("Family Common Name:")
// $("#scientificName").text("Scientific Name:")
var plant = $("#searchPlant").val();
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

          var plantName = response.data[0].common_name;
          var familyName = response.data[0].family_common_name;
          var scientificName = response.data[0].scientific_name;
          var image = response.data[0].image_url;
        //   var x = response.data[0]
          $("#cardImage").attr("src", image)
          $("#plantName").text("Plant Name: " + plantName);
          $("#familyName").text("Family Common Name: " + familyName);
          $("#scientificName").text("Scientific Name: " + scientificName);

          // var ingArray = [response.data[0].strIngredient1,response.drinks[0].strIngredient2,response.drinks[0].strIngredient3,response.drinks[0].strIngredient4,response.drinks[0].strIngredient5,response.drinks[0].strIngredient6,response.drinks[0].strIngredient7,response.drinks[0].strIngredient8,response.drinks[0].strIngredient9,response.drinks[0].strIngredient10]
          // var qtyArray = [x.strMeasure1,x.strMeasure2,x.strMeasure3,x.strMeasure4,x.strMeasure5,x.strMeasure6,x.strMeasure7,x.strMeasure8,x.strMeasure9,x.strMeasure10,]
          // for(var i = 0; i <= 10; i++){
          //   if(qtyArray[i] !== null){
          //     $("#ingredients").append(qtyArray[i] + " ")
          //   }
          //   if(ingArray[i] !== null){
          //     $("#ingredients").append(ingArray[i]+", ")
          //   } else {
          //     return;
          //   }
          // }

          
  })


})