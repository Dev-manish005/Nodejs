function main(req, res, client){
    const fs = require('fs');
    fs.appendFileSync("write_data_stream.txt", "hello World, this is manish......");
    fs.renameSync("write_data_stream.txt","test_file.txt");
    res.send("append data successfully");
}

module.exports={
    main : main
}