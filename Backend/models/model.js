
/* model.js
   This file defines the model for interacting with the no-SQL tournament database.
   Per Node.js's model-view-routes paradigm for RESTful APIs, it defines JavaScript
   classes for addding to and updating the SQL players and holes tables. 
   
   It creates class methods for handling each type of RESTful API request supporrted. 
   In this case we support four API requests:
     --Add a new player to the tournament database (POST)
     --Retrieve a player's data (GET)
     --Update a player's data (PUT)
     --Get all players' data (GET)
*/

'user strict';
//var noSql = require('./noSqlDb.js');

//Used to create and map Id for mongoDB since mongoDB requires _id key
var ObjectId = require('mongodb').ObjectId;

//Constructor for Player classs

var Player = function(player){
    this.playerName = player.name;
    this.PointsPerGame = player.ppg;
    this.StealsPerGame = player.spg;
    this.AssistPerGame = player.apg;
    this.ReboundsPerGame= player.rpg;

}

/*addPlayer -- Given a player name, checks if name is
  valid and does not already exist in the database. If so, add player to 
  database and return object with success = true. If not, 
  do not add player to database and return object with success = false.
 
*/
Player.addPlayer = function(playerDb, newPlayer,result){

}


/*getPlayer -- Given a player id, attempt to locate player in players db.
  If player could be found, return object with success = true and 
  all data associated with player. If player could not be found,
  return object with success = false. 
  
*/
Player.getPlayer = function (playerId, players, result) {

}

Player.loginPlayer = function (player, userCollection, result){
  resultObj = {success: false}

  var query = {email: player.username, password: player.password}
  console.log(query)
 // console.log(userCollection)

  userCollection.find(query).toArray(function(err,res){
    //console.log(res,res.length)
    if(err){throw err;}

    else if(res.length == 1){
      resultObj.success = true;
      resultObj.statusMsg = "Player Found";
      resultObj.data = res[0];
      result(resultObj,null)
    }
    else{
      resultObj.statusMsg = "Player does not exist";
      result(resultObj,null)

    }

    

  })
}

/*getAllPlayers -- Retrieve data on all players in tournament,
  using orderBy to sort appropriately. 
  If data could be retrieved, return object with success = true. 
  Otherwise, return object wtih success = false.
  
*/
Player.getAllPlayers = function (orderBy,players, result) {

}


module.exports = {Player};
