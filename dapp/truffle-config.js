const HDWalletProvider = require('@truffle/hdwallet-provider');

const path = require('path')
const secrets = require('./.secrets.json');
const contracts = path.join(__dirname, "./src/contracts");

module.exports = {
    contracts_build_directory: contracts,
    networks: {
        develop: {
            host: "0.0.0.0",
            port: 8545,
            network_id: "*",
            accounts: 10,
            websockets: true
        },
        rinkeby: {
            provider: () => new HDWalletProvider(
                secrets.mnemonic, 
                `wss://rinkeby.infura.io/ws/v3/${secrets.infuraKey}`,
                0,
                1
            ),
            network_id: 4,
            from: "0x55466Fc7CD33E6791d7E2246fE7496783cc6ED4f", 
            gas: 5500000,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        }
    },
    mocha: {
        // timeout: 100000
    },

    // Configure your compilers
    compilers: {
        solc: {
            // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            // settings: {          // See the solidity docs for advice about optimization and evmVersion
            //  optimizer: {
            //    enabled: false,
            //    runs: 200
            //  },
            //  evmVersion: "byzantium"
            // }
        }
    }
}
