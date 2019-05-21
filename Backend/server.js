/* server.js -- The code that starts the server and processes incoming server requests. 
*/

const express = require('express')
const app = express();

/*Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional 
HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin.*/
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.port || 3000;
const MongoClient = require('mongodb').MongoClient;
const path = require('path')

//! Need in order to parse/receive body of request
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
app.use(express.static(__dirname + "/../Frontend/"));

const password = '' //Enter password here
const uri = 'mongodb+srv://stefy:'+password+'@cluster0-xhrbw.mongodb.net/test?retryWrites=true'; //This the uri to the remote MongoDb Cluster
const routes = require('./routes/apiRoutes')

routes(app)

MongoClient.connect(uri,{useNewUrlParser:true})
.then(client => {
    const db = client.db('Teamulator');
    const players = db.collection('players')
    app.locals.players = players;
    app.listen(port)
    console.log('Connected to Teamulator DB!')

    //Testing to check if i could insert a collection to the remote DB
    //var myobj = {name: "Stefon", age:"23", language: "English"}
    /*players.insertOne(myobj, function(err,res){
        if(err) throw err;

        console.log("1 document inserted")
    })*/


}).catch(err => console.log(err))


/*
app.get('/', (err,res)=>{

    res.send("hello world")
})*/
