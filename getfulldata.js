var data = require('./getfulldata.json').features;
var fs = require('fs');

console.log(data.length);

let finalResult = [];

for (let i = 0; i < 5; i++) {

    // if (provinces.indexOf(data[i].properties.NAME_1) == -1) {

    //     provinces.push(data[i].properties.NAME_1);

    //     let childern = [];
    //     for (let k = 0; k < )

    //     finalResult.push({
    //         "value": data[i].properties.NAME_1,
    //         "label": data[i].properties.NAME_1,
    //         "childern": []
    //     });

    // }

}

fs.writeFile('new_getfulldata.json', JSON.stringify(finalResult), 'utf8', () => { });
