function main(req, res, client) {

    // client.connect((err) => {
    //     if (err) {
    //         console.log(err); 
    //         res.status(400).send(`Error while connecting to the database => ${err}`);
    //         return;
    //     }

        let { first_name, last_name, mobile, email, role } = req.body;

        const insertQuery = `
        Insert into users(user_name,mobile,email,role,password) values($1,$2,$3,$4,$5);
      `;

        let user_name = first_name.trim() + "@" + mobile;

        let password=first_name.trim().toLowerCase() + '@123';

        let values= [user_name,mobile,email,role,password];


        client.query(insertQuery, values, (err) => {
            if (err) {
                console.log(err);
                // res.status(400).send("Error while inserting data");
                res.status(400).send(err);
                return;
            }
            console.log("Data inserted successfully");

            res.status(200).send("Data inserted successfully");
        });
    // });
}

module.exports = {
    main: main
}