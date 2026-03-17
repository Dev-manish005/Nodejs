function main(req, res, client, appEnv) {

    // client.connect((err) => {
    //     if (err) {
    //         console.log(err); 
    //         res.status(400).send(`Error while connecting to the database => ${err}`);
    //         return;
    //     }

        let { first_name, last_name, mobile, email, role } = req.body;
        client.query(`Select email from users where mobile = $1 and is_obsolete = 0; `,[mobile],(err,data) =>{

            if (err) {
                // console.log(err);
                // const response_obj = {
                //     "suceess": false,
                //     "data": null,
                //     "err": err,
                //     "err_id": "100011"
                // }
                // res.status(400).send(response_obj);
                appEnv.responseGenerator.sendResponse(res,true,400,null,err,appEnv.getCurrentLine());
                return;
            }
            if (data.rows.length !=0) {
                // console.log(err);
                // const response_obj = {
                //     "suceess": true,
                //     "data": {
                //         msg : "User Already Exits !!!"
                //     },
                //     "err": err,
                //     "err_id": "null"
                // }
                // res.status(200).send(response_obj);
                appEnv.responseGenerator.sendResponse(res,false,200,{msg:"user already exist"},null,null);
                return;
            }

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
    });
}

module.exports = {
    main: main
}