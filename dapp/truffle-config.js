const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "fj4jll3k.....";

const path = require('path')
const fs = require('fs');

const contracts = path.join(__dirname, "./src/contracts");

module.exports = {
    contracts_build_directory: contracts,
    networks: {
        develop: {
            host: "0.0.0.0",
            port: 8545,
            network_id: "*",
        },

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
