var tj = require('@mapbox/togeojson'),
    fs = require('fs'),
    DOMParser = require('xmldom').DOMParser;

var kml = new DOMParser().parseFromString(fs.readFileSync('level_1.kml', 'utf8'));

var converted = tj.kml(kml);

console.log(converted.features.length)

fs.writeFile('level_2.geojson', JSON.stringify(converted), "utf8", (err) => {
    console.log(err)
})