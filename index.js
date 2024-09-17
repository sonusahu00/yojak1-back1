

// app.use(express.json());


const express = require("express");
const app = express();


const path = require("path");

const ejsMate = require("ejs-mate");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true })); // to parse the  data coming from request

app.engine("ejs", ejsMate);


app.get("/listings", (req, res) => {
    //const allListings = await Listing.find({});
    //res.render("index.ejs");
   // res.redirect("www.google.com");
    res.send("https://yojak1-st1.onrender.com");
});

app.post("/listings", (req, res) => {
    //const allListings = await Listing.find({});
   // res.render("index.ejs");
   // res.redirect("www.google.com");
     res.send(https://yojak1-st1.onrender.com);
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});
