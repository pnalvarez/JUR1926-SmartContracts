
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "newValue",
				"type": "uint256"
			}
		],
		"name": "set",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get",
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

function set() {
	contractInstance.set()
}

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
const contractAddress = '0x8a448d99743cd68c8475a887a802adff07d5fce7';

// Instância do contrato
const contractInstance = web3.eth.contract(abi).at(contractAddress);

console.log(contractInstance)