import Web3 from 'web3';
import Hello from './contracts/HelloWorld.json'

const options = {
    web3: {
        block: false,
        customProvider: new Web3("ws://0.0.0.0:8545")
    },
    contracts: [ Hello ],
    events: {
        Hello: [ 'HelloWorld' ]
    }
}

export default options
