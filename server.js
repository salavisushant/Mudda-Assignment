const app = require("./index");

const connect = require("./configs/db");

//connecting the database and we will get the data from 4000 port number.

app.listen(process.env.PORT||4000, async () => {
    await connect();
    console.log("listening on port 4000");
})