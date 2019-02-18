var express = require('express');
var app = express();
var fs = require("fs");
const JSON = require('circular-json');
Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse an application/json
app.use(bodyParser.json())

//Create the Ip contract to deploy into ethereum network
var ipContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"num","type":"uint256"}],"name":"getIpList","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ipAddress","type":"string"},{"name":"currenttime","type":"uint256"}],"name":"updateIpList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"ipArray","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ipList","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getListLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);

address = '0xf7e4f6c9af4a9b30ffc574e7c438bd8c8aab1c46'
//Get the all blocked Ips from ethereum network
app.get('/getBlockedIps', function (req, res) {
  accounts = web3.eth.accounts
  var defaultAccount = web3.eth.accounts[0];

  var contractInstance = ipContract.at(address);

  len = contractInstance.getListLength.call();
  var results =  []
  for(var i=0;i<len;i++){
     results[i] = contractInstance.getIpList.call(i)
  }
  res.send({
	"blockedIps":results
     });

});

app.post('/blockIp', function (req, res) {
   data = req.body;
   balance = web3.eth.getBalance(web3.eth.accounts[0]);
   console.log(balance)
   var contractInstance = ipContract.at(address);
   console.log(contractInstance);
   console.log(contractInstance.updateIpList.sendTransaction(data.ip,data.timestamp,{from:web3.eth.accounts[1],gas:3000000}));
   console.log( data );
   res.end( JSON.stringify(data));
})
//Run the server on port 8081
var server = app.listen(8081,'0.0.0.0', function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});
