
'use strict';
const path = require('path')

const {Player} = require('../models/model.js')


exports.addPlayer = function (req,res){
    
    




}


exports.getPlayer = function (req,res){

   

    
}

exports.loginPlayer = function (req,res){

    const newPlayer = req.body;
    const userCollection  =req.app.locals.users;

   // console.log(newPlayer)
    
    ////console.log(userCollection)

    Player.loginPlayer(newPlayer,userCollection,function(result,err){
        //console.log(result)
        if(err){

            res.send(err)
        }
        else{
            
            
            if(result.success == true){

                console.log("Successfully Logged In")

                res.sendFile(path.resolve(__dirname+'/../../Frontend/html/mainPage.html'))
            }

            else{
                res.json(result)
            }



            
            //res.json(results)
        }

    })

    
}

exports.getAllPlayers = function (req,res){



    
}