pragma solidity ^0.4.0;
 
contract SmartContractDoPrazo {
    uint prazoEmDias;
    uint limitePrazo;
    address contratante;
    address contratado;
    bool autoriza = false;

    constructor (uint _dias, uint _limite, address _contratado) public
    {
        contratante = msg.sender;
        contratado = _contratado;
        prazoEmDias = _dias;
        limitePrazo = _limite;

    }

    function autoriarDobrarPrazo() public
    {
        require(msg.sender == contratante, "Somente o dono pode autorizar dobrar prazo");
        autoriza = true;
    }
   
    function definePrazo(uint _dias) public {
        require(msg.sender == contratante, "Somente o dono do contrato pode alterar o prazo");
        require(autoriza == true, "O contratante não autorizou.");
        if(_dias < limitePrazo)
        {
            prazoEmDias = _dias;
        }
        else
        {
            prazoEmDias = limitePrazo;
        }
        autoriza = false;
    }
   
    function dobrarLimite() public
    {
        require(contratante == msg.sender, "Somente o dono do contrato pode dobrar o limite");
        require(autoriza == true, "O contratante não autorizou.");
        uint _aux = prazoEmDias * 2;
        if(_aux < limitePrazo)
        {
            prazoEmDias = _aux;
        }
        else
        {
            prazoEmDias = limitePrazo;
        }
	    autoriza = false;
    }
   
    function obtemPrazo() public view returns (uint) {
        return prazoEmDias;
    }
}