// import necessary libraries
// create const express to hold require express
// create const http to hold require http
// create const bodyParser to hold require body-parser
// create const morgan to hold require morgan
// create const app to hold instance of express()

// Setup App
// call app.use() passing it middleware morgan('combined') - any incoming request will pass through these two
// call app.use() passing it middleware bodyParser.json() passing that an object with prop type set to */*

// Setup Server
// create const port set to process.env.PORT or || 3090
// create const server set to http.createServer(app)
// tell server to listen to port declared above
// console log server listenging message

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on port:', port);