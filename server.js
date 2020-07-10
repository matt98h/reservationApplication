var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var reservations = [
    {
        name: "Emilee",
        phoneNumber: "1234567890",
        email: "emileejo@yahoo.com",
        uniqueID: "1"
    },
    {
        name: "Kyle Rudderforth",
        phoneNumber: "0987654321",
        email: "kyle123@gmail.com",
        uniqueID: "2"
    },
    {
        name: "Matthew Huus",
        phoneNumber: "1234567123",
        email: "MatthewHuus@gmail.com",
        uniqueID: "3"
    },
    {
        name: "Kent Schollmeier",
        phoneNumber: "0980980987",
        email: "Kent098@gmail.com",
        uniqueID: "4"
    }
];
var waitingList = [];

//basic route to our homepage index.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
//   basic route to our tables.html page
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
//   basic route to our reservation.html page
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });



app.post("/reserve", function(req, res){
    var newCustomer = req.body;
    reservations.push(newCustomer);
    console.log(newCustomer)
    res.json(newCustomer);
    
    
});
// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });