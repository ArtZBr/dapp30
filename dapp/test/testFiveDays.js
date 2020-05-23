/*
 * https://kalis.me/check-events-solidity-smart-contract-test-truffle/
 */
const HelloWorld = artifacts.require('HelloWorld');
const SimpleStorage = artifacts.require('SimpleStorage');
const AdvancedStorage = artifacts.require('AdvancedStorage');

const truffleAssert = require('truffle-assertions');
const assert = require("chai").assert;


contract('HelloWorld', async accounts => {
    let helloWorld;
    const acctOne = accounts[0];

    beforeEach(async () => {
        helloWorld = await HelloWorld.new({ from: acctOne });
        assert(helloWorld.address !== '');
    });

    it("Should output Hello Dapp30 World", async () => {
        const hello = await helloWorld.hello();
        assert.equal(hello, 'Hello Dapp30 World')
    });

});

contract('SimpleStorage', async accounts => {
    let simpleStorage;
    const acctOne = accounts[0];

    beforeEach(async () => {
        simpleStorage = await SimpleStorage.new({ from: acctOne });
        assert(simpleStorage.address !== '');
    });

    it("Should set data SIMPLESETDATA", async () => {
        const data = 'SIMPLESETDATA'
        let result = await simpleStorage.set(data);
        truffleAssert.eventEmitted(result, 'DataSet', (ev) => {
            return ev.data === data && ev._message === 'Data has been saved';
        });
    });

});

contract('AdvancedStorage', async accounts => {
    let advancedStorage;
    const acctOne = accounts[0];

    beforeEach(async () => {
        advancedStorage = await AdvancedStorage.new({ from: acctOne });
        assert(advancedStorage.address !== '');
        const ids = [10, 20];

        for (let i = 0; i < ids.length; i++) {
            const result = await advancedStorage.add(ids[i]);
            truffleAssert.eventEmitted(result, 'AddId', (ev) => {
                return ev.id == ids[i] && ev._message == 'ID has been saved';
            });
        }
    });

    it("Should get id with index 1", async () => {
        const idx = 1;
        const result = await advancedStorage.get(idx);
        assert(result == 20);
    });

    it("Should get all ids", async () => {
        const result = await advancedStorage.getAll();
        const ids = result.map(id => id.toNumber());
        assert(ids[0] == 10);
    });

    it("Should return length of 2", async () => {
        let result = await advancedStorage.length();
        //console.log(await web3.utils.isBN(result));
        //console.log(result.toString());
        assert(result == 2);
    });

})
