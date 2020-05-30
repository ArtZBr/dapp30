import Web3 from 'web3';
import HelloWorld from './contracts/HelloWorld.json';
import SimpleStorage from './contracts/SimpleStorage.json';
import AdvancedStorage from './contracts/AdvancedStorage.json';
import Crud from './contracts/Crud.json';

// "ws://0.0.0.0:8545"
const options = {
    contracts: [
        HelloWorld,
        SimpleStorage,
        AdvancedStorage,
        Crud
    ],
    events: { 
        SimpleStorage: ['DataSet'],
        AdvancedStorage: ['AddId'],
        Crud: ['CreateUser', 'UpdateUser']
    },
    web3: {
        block: false,
        fallback: {
            type: 'ws',
            url: 'ws://0.0.0.0:8545'
        }
    }
}

export default options
