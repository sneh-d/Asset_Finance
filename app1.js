const express = require('express')
const app = express()
const con = require('mysql')

var connect = con.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	port : "3306",
	database: "world"
})

app.get('/', function(req,res) {
	res.send('Hello from node!')
})

app.get('/page/', function(req,res) {
	var cin = req.query.cin
	var query = 'select * from city where Id=' + cin
	connect.query(query, function(error, results, fields) {
		if(error) {
			console.log(error0)
		} else {
			res.send(JSON.stringify(results))
		}
	})
})

app.listen(8080, () =>
	console.log(`listening to the port 3000`))

//module.exports = app
