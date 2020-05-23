import Web3 from 'web3';
import HelloWorld from './contracts/HelloWorld.json';
import SimpleStorage from './contracts/SimpleStorage.json';
import AdvancedStorage from './contracts/AdvancedStorage.json';

// "ws://0.0.0.0:8545"
const options = {
    contracts: [ HelloWorld, SimpleStorage, AdvancedStorage ],
    events: { 
        SimpleStorage: ['DataSet'],
        AdvancedStorage: ['AddId']
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
