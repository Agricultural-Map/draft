// var fs = require('fs');
// var data = require('./split.json').features;

// var provinces = [];
// var districts = [];
// var totalCommunes = 0;

// for (let i = 0; i < data.length; i++) {

//     if (provinces.indexOf(data[i].properties.NAME_1) == -1 || districts.indexOf(data[i].properties.NAME_1 + '/' + data[i].properties.NAME_2) == -1) {

//         provinces.push(data[i].properties.NAME_1);
//         districts.push(data[i].properties.NAME_1 + '/' + data[i].properties.NAME_2);

//         let communesFeatures = [];

//         for (let k = 0; k < data.length; k++) {

//             if (data[k].properties.NAME_1 == data[i].properties.NAME_1 && data[k].properties.NAME_2 == data[i].properties.NAME_2) {
//                 communesFeatures.push(data[k]);
//                 totalCommunes++;
//             }
//         }

//         let fileContent = {
//             "type": "FeatureCollection",
//             "features": communesFeatures
//         }

//         fs.mkdir('export/' + data[i].properties.NAME_1, { recursive: true }, (err) => {
//             if (err) throw err;
//             fs.writeFile('export/' + data[i].properties.NAME_1 + '/' + data[i].properties.NAME_2 + '.json', JSON.stringify(fileContent), 'utf8', () => { });
//         });

//     }
// }

// console.log(totalCommunes); //688

// var fs = require('fs');
// var data = require('./administrative.json');
// var result = [];

// for (var i = 0; i < data.length; i++) {
//     data[i] = {
//         "value": data[i].value,
//         "label": data[i].value,
//         "children": data[i].children
//     };
//     for (var j = 0; j < data[i].children.length; j++) {
//         data[i].children[j] = {
//             "value": data[i].children[j].value,
//             "label": data[i].children[j].value,
//             "children": data[i].children[j].children
//         }
//         for (var k = 0; k < data[i].children[j].children.length; k++) {
//             data[i].children[j].children[k] = {
//                 "value": data[i].children[j].children[k].value,
//                 "label": data[i].children[j].children[k].value
//             }
//         }
//     }
// }

// console.log(data[0])

// fs.writeFile('_________.json', JSON.stringify(data), 'utf8', () => { });
