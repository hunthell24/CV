const Express = require("Express");
require("./models/db");
const Ejs = require("body-parser");
const bodyparser = require("body-parser");
const routes = require("./routes/routes")
const app = Express();

app.set("view engine", Ejs);

app.use(Express.static("public"));

app.use(bodyparser.urlencoded({extended:true}));

app.use(routes);

app.listen(3000, () =>{
    console.log("Server is running on port 3000");
})