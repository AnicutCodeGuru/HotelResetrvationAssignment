module.exports = function(app,database){
	var express = require('express'),
		getReserVationList = express.Router({mergeParams: true});
		getReserVationAdd  = express.Router();
	    getReserVationList.use(function(req, res, next) {
                database.db("blue").collection("reservation").find(req.params.id===undefined?{}:{_id:req.params.id}).toArray((err,reservationList)=>{
                res.json({reservationList});
            });
        });
	    getReserVationAdd.use(function(req, res, next) {
                   database.db("blue").collection("reservation").insert({
                    name:req.body.name,
                    arrivalDate:req.body.arrivalDate,
                    departureDate:req.body.departureDate,
                    hotelName:req.body.hotelName
                },(err,resp)=>{
                res.json(resp.id);  
            });
        });
	app.get('/reservation/:id',getReserVationList);
	app.get('/reservation',getReserVationList);
	app.post('/reservation',getReserVationAdd);
};