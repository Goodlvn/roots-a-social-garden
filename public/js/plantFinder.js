$("#modal").hide();

$("#plantFinderBtn").on("click", function (event) {
  event.preventDefault();
  $("#instructions").empty();

  var plantSearch = $("#searchPlant").val().trim();

  $.get("/api/plant_data/" + plantSearch, (response) => {

    console.log(response);
    if (response.data.length === 0) {
      $("#modal").show();
      $("#instructions").empty();
    }
    else if (response.data[0].common_name === null) {
      $("#modal").show();
      $("#instructions").empty();

    } else {
      $("#modal").hide();
      var plantName = response.data[0].common_name;
      var familyName = response.data[0].family_common_name;
      var scientificName = response.data[0].scientific_name;
      var image = response.data[0].image_url;

      $("#cardImage").attr("src", image)
      $("#plantName").text("Plant Name: " + plantName);
      $("#familyName").text("Family Common Name: " + familyName);
      $("#scientificName").text("Scientific Name: " + scientificName);
    }

  });
});