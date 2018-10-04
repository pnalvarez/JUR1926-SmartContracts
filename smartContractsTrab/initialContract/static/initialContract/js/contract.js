
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
	},
	{
		"constant": false,
		"inputs": [],
		"name": "autoriarDobrarPrazo",
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
			},
			{
				"name": "_contratado",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]



// Código rodado no momento de carregamento da página
window.addEventListener('load', function() {

  // Check if Web3 has been injected by the browser:
  if (typeof web3 !== 'undefined') {
    // You have a web3 browser! Continue below!
    console.log(web3);
  } else {
     // Warn the user that they need to get a web3 browser
     // Or install MetaMask, maybe with a nice graphic.
     console.log("Not a web3 browser!");
  }

})

// Endereço do contrato criado
const contractAddress = '0x164519f58eb945e4afdaf556532e46854334afd2';

// Instância do contrato
const contractInstance = web3.eth.contract(abi).at(contractAddress);

console.log("Contrato: ");
console.log(contractInstance);
console.log("END");

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
	console.log(retorno);
	updateLabel(retorno);
}

// Função chamando o método definePrazo
async function definePrazo() {
	const novoPrazo = $('#setNewValue').val();
	const retorno = await contractInstance.methods.definePrazo(novoPrazo, function(error, result){
		if(!error){
			console.log(JSON.stringify(result));
		} else {
			console.error(error);
		}
	}).send({
		from: '0xbaDa32e4D994C6D3f75884FE9116746893889310',
		gas: 1500000,
		gasPrice: '3000000'
	});
	console.log(retorno);
	getPrazo();
}

// Função chamando o método dobrarLimite
async function dobrarLimite() {
	const retorno = await contractInstance.methods.dobrarLimite(function(error, result){
		if(!error){
			console.log(JSON.stringify(result));
		} else {
			console.error(error);
		}
	}).send({
		from: '0xbaDa32e4D994C6D3f75884FE9116746893889310',
		gas: 1500000,
		gasPrice: '300000000000'
	});
	console.log(retorno);
	// getPrazo();
}