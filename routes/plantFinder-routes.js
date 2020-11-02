const fetch = require('node-fetch');

module.exports = (app) => {
  app.get("/api/plant_data/:plant", async (req, res) => {
    let plant = req.params.plant;
    const response = await fetch('https://trefle.io/api/v1/plants/search?token=sAe0dDZyCrVdJe9k1ePcwrjgedscCASoJiMBAh3wRic&q=' +plant);
    const json = await response.json();
    res.json(json);
  });
}
