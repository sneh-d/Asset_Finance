const express = require('express')
const app = express()
const con = require('mysql')

var connect = con.createConnection({
	host : "mydatabase.c6evz5qrum9p.us-east-2.rds.amazonaws.com",
	user : "snehil97",
	password : "auror8588",
	port : "3306",
	database: "mydatabase"
})

app.get('/', function(req,res) {
	res.send('Hello from node!')
})

app.get('/page/', function(req,res) {
	var cin = req.query.cin
	var query = 'select * from assets where cin=' + cin
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
