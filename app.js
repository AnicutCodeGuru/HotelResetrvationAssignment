
//import mongodb from "mongodb";

const express=require("express"); ;
const mongodb=require("mongodb"); ;
const bodyParser=require("body-parser"); ;
 
app = express();
app.set('port', process.env.port || 3000);
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));

//DB Connection
const MongoClient =mongodb.MongoClient;
const dbUrl ="mongodb://localhost:27017/blue";

MongoClient.connect(dbUrl, function(err,database){
    if(err){
        console.log(err)
    }else{
        app.listen(3000, () => console.log('app listening on port 3000!'))
        routes = require('./routes')(app,database);
    }
})



