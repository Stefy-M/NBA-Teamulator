'use strict';

const path = require('path')



module.exports = function(app){
    var bPlayer = require('../controllers/apiController')

    app.route('/')
    .get(function(req,res){
        
        res.sendFile(path.resolve(__dirname+'/../../index.html'))
    })

    app.route('/api/login')
    .post(bPlayer.loginPlayer)

    

}