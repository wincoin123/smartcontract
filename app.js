var express = require('express');
var app = express();
var fs = require("fs");
const JSON = require('circular-json');
Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

app.get('/getAllIps', function (req, res) {
	accounts = web3.eth.accounts
	var defaultAccount = web3.eth.accounts[0];
  var abi = [
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ipAddress",
				"type": "string"
			},
			{
				"name": "currenttime",
				"type": "uint256"
			}
		],
		"name": "updateIpList",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "getIpList",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getListLength",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ipArray",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ipList",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

	var address = '0x01bc8170a35f89ee0ea001f7f7d8a985a71244a4'
        var fromAccount = '0x92f60959dd66b8055b4953e6a50165adfd19f8e3'
	var IpContract = new web3.eth.Contract(abi,address, {
    from: fromAccount, // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});
	
	const MyContract = new web3.eth.Contract(abi, address);
        MyContract.methods.getIpList(1).call()
        .then(console.log);
	res.send({
	"accounts":JSON.stringify(accounts)
	  
	})

});

var server = app.listen(8081,'0.0.0.0', function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
