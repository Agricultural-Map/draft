// var data = require('./new_getfulldata.json');
// var finalResult = require('./getfulldata.json');
// var fs = require('fs');

// //console.log(data.length);

// let total = 0;
// let backup = [];
// for (let i = 0; i < finalResult.length; i++) {

//     for (let k = 0; k < data.length; k++) {
//         if (finalResult[i].value == data[k].NAME_1) {
//             if (backup.indexOf(data[k].NAME_1 + '/' + data[k].NAME_2) == -1) {
//                 backup.push(data[k].NAME_1 + '/' + data[k].NAME_2);

//                 finalResult[i].children.push({
//                     "value": data[k].NAME_2,
//                     "children": []
//                 });
//                 total++;
//             }

//         }
//     }

// }
// console.log("Total: " + total);
// fs.writeFile('getfulldata_2.json', JSON.stringify(finalResult), 'utf8', () => { });

var data = require('./new_getfulldata.json');
var finalResult = require('./getfulldata_2.json');
var fs = require('fs');

//console.log(data.length);

let total = 0;
let backup = [];
for (let i = 0; i < finalResult.length; i++) {

    for (let k = 0; k < finalResult[i].children.length; k++) {
        
        for (let r = 0; r < data.length; r++) {
            if (finalResult[i].value == data[r].NAME_1 && finalResult[i].children[k].value == data[r].NAME_2) {
                if (backup.indexOf(data[r].NAME_1 + '/' + data[r].NAME_2 + '/' + data[r].NAME_3) == -1) {
                    backup.push(data[r].NAME_1 + '/' + data[r].NAME_2 + '/' + data[r].NAME_3);

                    finalResult[i].children[k].children.push({
                        "value": data[r].NAME_3
                    });
                    total++;
                }
            }
        }

    }

}
console.log("Total: " + total);
fs.writeFile('getfulldata_3.json', JSON.stringify(finalResult), 'utf8', () => { });
