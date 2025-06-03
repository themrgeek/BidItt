/*
Keyword	Scope	Reassignable	Redeclarable	  Use Case
var	Function	 ✅ Yes	        ✅ Yes	         ❌ Avoid for new code
let	Block	     ✅ Yes	        ❌ No	         Use if value will change
const	Block	 ❌ No	        ❌ No	         ✅ Use if value won't change

*/
// const http = require('http');

// http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Welcome to BidItt\n');
// }).listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });

const https = require('https');
const fs = require('fs');
require('dotenv').config(); // Load environment variables from .env file
// Loading SSL Certificate and Key
const sslOptions = {
  key: fs.readFileSync(process.env.SSL_KEY_PATH),
  cert: fs.readFileSync(process.env.SSL_CERT_PATH)
};
// Common Request Handler
const requestHandler = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Welcome to BidItt\n');
};
// Creating HTTPS Server
const server = https.createServer(sslOptions, requestHandler);
// Starting the Server
server.listen(3000, () => {
  console.log('Server running at https://localhost:3000/');
});