module.exports = function(app,database){
	require('./reservation/reservation')(app,database);
}; 