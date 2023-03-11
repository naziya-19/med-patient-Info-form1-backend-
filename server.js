import express, { json, urlencoded } from "express";
import cors from "cors";
import bodyParser from "body-parser"
import "./server/database/db.js";
import patientInfoRoute from "./server/routes/patientInfo.js";
import form1Route from "./server/routes/form1.js";


var app = express();

app.use(urlencoded({extended:false}));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.send(
        `<h1> Welcome .. <\h1>`
    );
});

app.use("/patientInfo",patientInfoRoute);
app.use("/form1",form1Route);

app.listen(3000, () => {
    console.log("Server started in port 3000");
});
