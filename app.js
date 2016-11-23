const http = require('http');
const express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


/*====================
    YOUR CODE
====================*/

let todolist = require('./todolist');
const db = require('./db.js');
var fs = require('fs');

// testing
app.use(function(req, res, next) {
  console.log('Running');
  next();
})

//sending data to client side
app.get('/tasks', function(req,res, next){
	res.json(db.getList());
	let tasks = db.getList();
  next();
});

//sending ids.
app.get('/tasks/:task_id', function(req,res,next){
	let id=req.params.task_id;
	let task = db.getTask(id);
	if(task)
	res.json(task);
});

//receive request and post to body
app.post('/tasks', function(req,res, next){
	db.getList(req.body);
	console.log(req.body);
	todolist.push(req.body);
});

/*====================*/

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running and listening at http://localhost:${port}/`);
});