// full API documentation 

function setup() {
  createCanvas(600, 400);
  noStroke();
  var country = 'france';
  var url = 'https://restcountries.eu/rest/v2/name/'+ country;
  loadJSON(url, getNumbers); 
}

function getNumbers(countryData) {

  // Get the loaded JSON data
  console.log(countryData); // inspect the JSON
  var countryPopulation = countryData[0].population;
  console.log(countryPopulation);
  

  background(40, 90, 200);
  fill(0, 255, 255, countryPopulation);
  
  for (var i = 0; i < countryPopulation/10000; i++) {
    ellipse(random(width), random(height), 1, 1);
  }
}
