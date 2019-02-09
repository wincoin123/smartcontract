var express = require('express');
var app = express();
var fs = require("fs");
const JSON = require('circular-json');
Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

app.get('/getAllIps', function (req, res) {
	accounts = web3.eth.accounts
	var defaultAccount = web3.eth.accounts[0];
	var _address = '';
        var ipContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"num","type":"uint256"}],"name":"getIpList","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ipAddress","type":"string"},{"name":"currenttime","type":"uint256"}],"name":"updateIpList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"ipArray","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ipList","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getListLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);


var ip = ipContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x6080604052600060035534801561001557600080fd5b5061083f806100256000396000f3fe608060405260043610610067576000357c0100000000000000000000000000000000000000000000000000000000900480635776466a1461006c5780636537e7db146101275780636b6d6c92146101f95780639558ef58146102ad578063b65c531b1461033d575b600080fd5b34801561007857600080fd5b506100a56004803603602081101561008f57600080fd5b8101908080359060200190929190505050610368565b6040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156100eb5780820151818401526020810190506100d0565b50505050905090810190601f1680156101185780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561013357600080fd5b506101f76004803603604081101561014a57600080fd5b810190808035906020019064010000000081111561016757600080fd5b82018360208201111561017957600080fd5b8035906020019184600183028401116401000000008311171561019b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506104b4565b005b34801561020557600080fd5b506102326004803603602081101561021c57600080fd5b810190808035906020019092919050505061060b565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610272578082015181840152602081019050610257565b50505050905090810190601f16801561029f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102b957600080fd5b506102c26106c6565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103025780820151818401526020810190506102e7565b50505050905090810190601f16801561032f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561034957600080fd5b50610352610764565b6040518082815260200191505060405180910390f35b6060600060028381548110151561037b57fe5b90600052602060002001600060028581548110151561039657fe5b9060005260206000200160405180828054600181600116156101000203166002900480156103fb5780601f106103d95761010080835404028352918201916103fb565b820191906000526020600020905b8154815290600101906020018083116103e7575b5050915050908152602001604051809103902054818054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104a45780601f10610479576101008083540402835291602001916104a4565b820191906000526020600020905b81548152906001019060200180831161048757829003601f168201915b5050505050915091509150915091565b81600190805190602001906104ca92919061076e565b50600080836040518082805190602001908083835b60208310151561050457805182526020820191506020810190506020830392506104df565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902054141561059057600360008154809291906001019190505550600282908060018154018082558091505090600182039060005260206000200160009091929091909150908051906020019061058d92919061076e565b50505b806000600160405180828054600181600116156101000203166002900480156105f05780601f106105ce5761010080835404028352918201916105f0565b820191906000526020600020905b8154815290600101906020018083116105dc575b50509150509081526020016040518091039020819055505050565b60028181548110151561061a57fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106be5780601f10610693576101008083540402835291602001916106be565b820191906000526020600020905b8154815290600101906020018083116106a157829003601f168201915b505050505081565b60018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561075c5780601f106107315761010080835404028352916020019161075c565b820191906000526020600020905b81548152906001019060200180831161073f57829003601f168201915b505050505081565b6000600354905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106107af57805160ff19168380011785556107dd565b828001600101855582156107dd579182015b828111156107dc5782518255916020019190600101906107c1565b5b5090506107ea91906107ee565b5090565b61081091905b8082111561080c5760008160009055506001016107f4565b5090565b9056fea165627a7a72305820a5ac1362883280758b05bceb1cbd02b92216de711694b8c4e6483ee86f860a940029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
   
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
	 _address = contract.address;
    }
 });

var contractInstance = ipContract.at('0x26dc1682ce637658a8ccf0143b78a9a5aa2e8c1a');

len = contractInstance.getListLength.call();
var results =  []
for(var i=0;i<len;i++){
   results[i] = contractInstance.getIpList.call(i)
}

     res.send({
	"blockedIps":results
     });

});

var server = app.listen(8081,'0.0.0.0', function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});
