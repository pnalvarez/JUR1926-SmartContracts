pragma solidity ^0.4.0;

contract Prazo {
    
    uint prazo;
    uint maxPrazo;
    address owner;
    address contratante;
    
    event Erro(string);
    
    constructor (uint maxPrazoDefinido, address newContratante) public {
        owner = msg.sender;
        maxPrazo = maxPrazoDefinido;
        contratante = newContratante;
    }
    
    function setPrazo(uint novoPrazo) soDono public {
        if(novoPrazo < maxPrazo) {
            prazo = novoPrazo;
        } else {
            emit Erro('Novo prazo é maior que o prazo máximo!');
        }
    }
    
    function dobraPrazo() soDono public {
        uint newValue = 2*prazo;
        if(newValue < maxPrazo) {
            prazo = newValue;
        } else {
            emit Erro('Novo prazo é maior que o prazo máximo!');
        }
    }
    
    function getPrazo() public view returns(uint) {
        return prazo;
    }
    
    modifier soDono() {
        require(owner == msg.sender);
        _;
    }
    
    modifier soDonoEContratante(address outraParte) {
        require(owner == msg.sender);
        require(contratante == outraParte);
        _;
    }
    
}