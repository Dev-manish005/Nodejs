function main(req, res, client){
    const fs = require('fs');
    // var readData = fs.readFileSync("write_data.txt",{encoding:'utf8'});
    var readData = fs.readFileSync("write_data_stream.txt");
    //another way to read data in console in string format
    console.log(String(readData));
    res.send(readData);
    // res.send(readData);
}

module.exports={
    main: main
}