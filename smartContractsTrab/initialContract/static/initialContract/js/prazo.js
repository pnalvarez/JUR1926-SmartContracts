import web3;
import Prazo from './json/Prazo.json';

export default (address) => {

	return web3.eth.Contract(JSON.parse(Prazo.interface), address);

}