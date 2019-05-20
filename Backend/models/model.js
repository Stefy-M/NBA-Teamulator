
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
    this.ReboundsPerGame= playerrpg;

}

/*addPlayer -- Given a player name, checks if name is
  valid and does not already exist in the database. If so, add player to 
  database and return object with success = true. If not, 
  do not add player to database and return object with success = false.
  See assignment prompt for further details on required content of 
  return object.
*/
Player.addPlayer = function(playerDb, newPlayer,result){

}


/*getPlayer -- Given a player id, attempt to locate player in players db.
  If player could be found, return object with success = true and 
  all data associated with player. If player could not be found,
  return object with success = false. 
  See assignment prompt for further details on required content of 
  return object.  
*/
Player.getPlayer = function (playerId, players, result) {

}

/*getAllPlayers -- Retrieve data on all players in tournament,
  using orderBy to sort appropriately. 
  If data could be retrieved, return object with success = true. 
  Otherwise, return object wtih success = false.
  See assignment prompt for further details on  what player data to
  include, how to sort player data, and warequired content of 
  return object.  
*/
Player.getAllPlayers = function (orderBy,players, result) {

}


module.exports = {Players};