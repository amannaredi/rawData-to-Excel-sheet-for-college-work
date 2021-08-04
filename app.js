const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/formDB", { useNewUrlParser: true , useUnifiedTopology: true } );

const dataSchema = {
  Member1 : {
    name1 : String,
    roll1: String
  },
  Member2 : {
    name2 : String,
    roll2: String
  },
  Member3 : {
    name3 : String,
    roll3: String
  },
  Member4 : {
    name4 : String,
    roll4: String
  },
  Member5 : {
    name5 : String,
    roll5: String
  }
}

const Data = new mongoose.model("Data", dataSchema)

mongoose.set('useFindAndModify', false);


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
})

app.post("/",  function(req, res){

  const name1 = req.body.name1 ;
  const name2 = req.body.name2;
  const name3 = req.body.name3;
  const name4 = req.body.name4 ;
  const name5 = req.body.name5 ;
  const roll1 = req.body.roll1;
  const roll2 = req.body.roll2 ;
  const roll3 = req.body.roll3 ;
  const roll4 = req.body.roll4 ;
  const roll5 = req.body.roll5 ;

  const data = new Data ({
    Member1 :{
      name1:name1,
      roll1:roll1
    },
    Member2 :{
      name2:name2,
      roll2:roll2
    },
    Member3 :{
      name3:name3,
      roll3:roll3
    },
    Member4 :{
      name4:name4,
      roll4:roll4
    },
    Member5 :{
      name5:name5,
      roll5:roll5
    },
  })
 data.save()
res.redirect("/success");
})

app.get("/success", function(req,res){
  res.sendFile(__dirname + "/success.html")
})

app.listen(3000, function(){
  console.log("Server at port 3000")
})
