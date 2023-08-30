// import express module
const express = require("express");
// import body-parser
const bodyparser = require("body-parser")
//import mongoose moduel 
const mongoose = require("mongoose");
//install Bcryt
const Bcrypt = require("bcrypt");
//install multer 
const multer = require("multer");
//importaion axios module 
const axios = require("axios"); 
//imortation of jwt 
const jwt = require("jsonwebtoken");
// impotation of express session 
const session = require("express-session");
//install path (already with node not with npm i )
const path = require("path");
// connect express application with data base via mongoose
mongoose.connect('mongodb://127.0.0.1:27017/arrafehaDB');
//create express application 
const app = express();
//configuration
// send JSON responses
app.use(bodyparser.json())
//get object from request
app.use(bodyparser.urlencoded({ extended: true }));
// make app importable from another files 
module.exports = app;
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
//configuration (always with use)
app.use("images", express.static(path.join("backend/images")));
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
      extension;
    cb(null, imgName);
  }
});
//
const secretKey = 'croco2023';
app.use(session({
secret: secretKey,
}));
//models importation 
const MatchModel = require("./models/match");
const UserModel = require("./models/user");

/////////////////////////////////////////////////////////////////
let T = [
  { id: 1, scoreone: 3, scoretwo: 1, teamone: "FCB", teamtwo: "RMD", TeamOneScored: "neymar (11)", TeamTwoScorrd: "cristiano (7) " },
  { id: 2, scoreone: 3, scoretwo: 2, teamone: "inter", teamtwo: "milan", TeamOneScored: "Lautaro Martinez (10)", TeamTwoScorrd: "zlatan (11) " },
  { id: 3, scoreone: 3, scoretwo: 6, teamone: "man united", teamtwo: "man city", TeamOneScored: "hannibal mj (11)", TeamTwoScorrd: "jack grilish (7) " },
  { id: 4, scoreone: 2, scoretwo: 2, teamone: "CA", teamtwo: "EST", TeamOneScored: "hannibal mj (11)", TeamTwoScorrd: "jack grilish (7) " },
  { id: 5, scoreone: 3, scoretwo: 1, teamone: "css", teamtwo: "ESS", TeamOneScored: "hannibal mj (11)", TeamTwoScorrd: "jack grilish (7) " }

];
let TeamsT = [
  { id: 1, name: "FCB", owner: "messi", stadium: "campnou" },
  { id: 2, name: "PSG", owner: "neymar", stadium: "parc de princes" },
  { id: 3, name: "RMD", owner: "criss", stadium: "santiago" }

];

let playersTab = [
  { id: 1, Name: "neymar", Age: 29, Position: "attack", },
  { id: 2, Name: "messi", Age: 33, Position: "attack", },
  { id: 3, Name: "suarez", Age: 33, Position: "attack", }];


function generateId(t) {
  if (t.length == 0) {
    return 0;
  }
  else {
    var max = t[0].id;
    for (let i = 1; i < t.length; i++) {
      if (t[i].id > max) {
        max = t[i].id;
      }
    }
    return max + 1;
  }
}
//busniss logic : get all matches
app.get("/matches", (req, res) => {
  //traitement de request 
  console.log("here into BL : get all matches");
  MatchModel.find().then(
    (data) => {
      res.json({ allMatches: data })
    }
  )
  // res.json({ allMatches: T })
})
//busniss logic : get matche by id
app.get("/matches/:id", (req, res) => {
  //traitement de request 
  console.log("here into BL : matche by id");
  let id = req.params.id;
  MatchModel.findOne({ _id: id }).then(
    (data) => {
      res.json({ match: data });
    }
  )
  // let findedMatch = T.find(
  //   (elt) => {
  //     return elt.id == id;
  //   });
  // findedMatch
  //   ?
  //   res.json({ match: findedMatch }) :
  //   res.json({ msg: "not found" });
  // if (findedMatch) {
  //   res.json({match : findedMatch});
  // } else {
  //   res.json({msg : "not found"});
  // }


})
//busniss logic : delete matche by id
app.delete("/matches/:id", (req, res) => {
  //traitement de request 
  let id = req.params.id;
  MatchModel.deleteOne({ _id: id }).then((data) => {
    console.log("here data after delete", data);
    (data.deletedCount == 1) ?
      res.json({ msg: "match is deleted" }) :
      res.json({ msg: "not deleted" });
  });
});
//   isDeleted = false;
//   for (let i = 0; i < T.length; i++) {
//     if (T[i].id == id) {
//       T.splice(i, 1);
//       isDeleted = true;
//       break;
//     }
//   }
//   isDeleted
//     ?
//     res.json({ msg: "match is deleted " }) :
//     res.json({ msg: "match not found " });
// })
//busniss logic : add matche
app.post("/matches", (req, res) => {
  console.log("here is BL add match ", req.body);
  let matchObj = new MatchModel(req.body);
  // let match = req.body;
  // match.id = generateId(T);
  // T.push(match);
  matchObj.save((err, doc) => {
    console.log("here err,", err);
    console.log("here doc,", doc);
    err ? res.json({ msg: "error" }) : res.json({ msg: "add wiith succes" });
  });

})
//busniss logic : update matche
app.put("/matches", (req, res) => {
  //traitement de request 
  console.log("here into bl : edit match")
  let newMatch = req.body;
  MatchModel.updateOne({ _id: newMatch._id }, newMatch).then(
    (data) => {
      console.log("here data after update", data);
      data.nModified == 1 ?
        res.json({ msg: "eddited with succes " }) :
        res.json({ msg: "not edited " })
    }
  )
})


//   for (let i = 0; i < T.length; i++) {
//     if (T[i].id == newMatch.id) {
//       T[i] = newMatch;
//       break;
//     }
//   }
//   res.json({ msg: "edited with succes" });
// })
/////////////////////// tessssssting ////////////////////
app.post("/matches/search", (req, res) => {
  console.log("search match by score ");
  let obj = req.body;
  console.log("here obj", obj);
  let findedMatches = T.filter((elt) => {
    return elt.scoreone == obj.scoreone || elt.scoretwo == obj.scoretwo
  });
  res.json({ tab: findedMatches });

});








//busniss logic : add player
app.post("/players", (req, res) => {
  console.log("here is bl add match ", req.body);
  let player = req.body;
  s.id = generateId(playersTab);
  playersTab.push(player);
  res.json({ msg: "add with succes " })

})
//busniss logic : update player
app.put("/players", (req, res) => {

})
//busniss logic : delete player by id
app.delete("/players/:id", (req, res) => {

})
//busniss logic : get all players
app.get("/players", (req, res) => {
  //busniss logic : get player by id
})
app.get("/players/:id", (req, res) => {

})
//busniss logic : add team
app.post("/teams", (req, res) => {

})
//busniss logic : update team
app.put("/teams", (req, res) => {

})
//busniss logic : delete team by id
app.delete("/teams/:id", (req, res) => {

})
//busniss logic : all teams
app.get("/teams", (req, res) => {

})
//busniss logic : get team by id
app.get("/teams/:id", (req, res) => {

})

app.post("/players/searchPlayer", (req, res) => {
  console.log("here Bl: search player ", req.body);
  let p = req.body;
  let findedPlayers = playersTab.filter((obj) => {
    return obj.name == p.Name || obj.Age == p.Age;
  })
  res.json({ players: findedPlayers });
})
//business logique : sign up
app.post("/user/signup", multer({ storage: storage }).single('img'), (req, res) => {
  console.log("here into bl sign up", req.body);
  Bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
    console.log("here crypted pwd", cryptedPwd);
    req.body.pwd = cryptedPwd;
    req.body.avatar = "http://localhost:3000/images/" + req.file.filename;
    let user = new UserModel(req.body);
    user.save((err, doc) => {
      console.log("here error", err);
      console.log("here doc", doc);
      if (err) {
        if (err.errors.email) {
          res.json({ msg: "email exist" });
        }
      }
      else { res.json({ msg: "add with succes" }); }

    })
  })
})
//bl : login
app.post("/user/login", (req, res) => {
  let user;
  console.log("login", req.body);
  UserModel.findOne({ email: req.body.email }).then((doc) => {
    if (!doc) {
      res.json({ msg: "please check ur email" });
    }
    else {
      user = doc;
      return Bcrypt.compare(req.body.pwd, doc.pwd);
    }
  }).then((pwdResult) => {
    console.log("here pwdResult", pwdResult);
    if (!pwdResult) {
      res.json({ msg: "please check your pwd" });
    } else {
      let UserToSend = {
        id: user._id,
        fName: user.firstName,
        lName: user.lastName,
        lName: user.lastName,
        role: user.role,
      };
      const token = jwt.sign(UserToSend, secretKey, { expiresIn:'1h' });
      res.json({ result: token });
    }
  });

});
app.post("/weather", (req, res) => {
  console.log("here city", req.body);
  const key = "98ee516ec5ded260ef40f413390ace6c";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.City}&appid=${key}`;
  axios.get(weatherUrl).then((apiResponse) => {
      // console.log("THIS TEMP", apiResponse.data.weather.icon);
    // console.log("THIS TEMP", apiResponse.data.wind.speed);
    // console.log("THIS TEMP", apiResponse.data.main.temp);
    // console.log("humidity", apiResponse.data.main.humidity);
    // console.log("pressure" ,apiResponse.data.main.pressure);
    // console.log("speed" , apiResponse.data.wind.speed);
    let result= {
      temp: apiResponse.data.main.temp,
      humidity: apiResponse.data.main.humidity,
      pressure: apiResponse.data.main.pressure,
      windSpeed: apiResponse.data.wind.speed,
      icon :`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      
    }

    res.json({result : result })
  })

});