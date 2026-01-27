function main(req, res, client) {
    const fs = require('fs');
    fs.appendFile("write_data_2.txt", "hello World, this is sanket......", (err, data) => {
        console.log(err, data);
        fs.rename("write_data_2.txt", "async_file_test.txt",
            (err, data) => {
                fs.readFile("async_file_test.txt",
                    (err, data) => {
                        console.log(err,String(data));
                        res.send(data.toString());
                    }
                )
        });
    });
}

module.exports = {
    main: main
}