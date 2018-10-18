var Web3 = require('web3');

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_dias",
				"type": "uint256"
			}
		],
		"name": "definePrazo",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "dobrarLimite",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_dias",
				"type": "uint256"
			},
			{
				"name": "_limite",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "obtemPrazo",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

let totalAccounts;

// Código rodado no momento de carregamento da página
if (typeof web3 !== 'undefined') {
	web3 = new Web3(web3.currentProvider);
} else {
	// set the provider you want from Web3.providers
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

// Endereço do contrato criado
const contractAddress = '0xf61dd764318a6f135eb521d08e2bfcbc9c74f27e';

// Instância do web3
console.log(web3)

// Instância do contrato
var contractInstance = new web3.eth.contract(abi, contractAddress);

console.log(102,contractInstance);

async function getPrazo(){
	const retorno = await contractInstance.obtemPrazo().call({
		from: '0xbaDa32e4D994C6D3f75884FE9116746893889310'
	}, function(error, result){
		if(!error){
			console.log(JSON.stringify);
		} else {
			console.error(error);
		}
	});
	console.log("Retorno do GET: " + retorno);
	updateLabel(retorno);
}

// Função chamando o método definePrazo
async function definePrazo() {
	const novoPrazo = $('#setNewValue').val();
	const retorno = await contractInstance.definePrazo(novoPrazo);
	console.log("Retorno do DEFINE: " + retorno);
	getPrazo();
}

// Função chamando o método dobrarLimite
async function dobrarLimite() {
	const retorno = await contractInstance.methods.dobrarLimite().send({
		from: '0xbaDa32e4D994C6D3f75884FE9116746893889310',
		gas: 1500000,
		gasPrice: '300000000000'
	}, function(error, result){
		if(!error){
			console.log(JSON.stringify(result));
		} else {
			console.error(error);
		}
	});
	console.log(retorno);
	// getPrazo();
}