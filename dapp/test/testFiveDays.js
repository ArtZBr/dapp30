/*
 * https://kalis.me/check-events-solidity-smart-contract-test-truffle/
 */
const HelloWorld = artifacts.require('HelloWorld');
const SimpleStorage = artifacts.require('SimpleStorage');
const AdvancedStorage = artifacts.require('AdvancedStorage');
const Crud = artifacts.require('Crud');

const truffleAssert = require('truffle-assertions');
const assert = require('chai').assert;


contract('HelloWorld', async accounts => {
    let helloWorld;
    const acctOne = accounts[0];

    beforeEach(async () => {
        helloWorld = await HelloWorld.new({ from: acctOne });
        assert(helloWorld.address !== '');
    });

    it('Should output Hello Dapp30 World', async () => {
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

    it('Should set data SIMPLESETDATA', async () => {
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

    it('Should get id with index 1', async () => {
        const idx = 1;
        const result = await advancedStorage.get(idx);
        assert(result, 20);
    });

    it('Should get all ids', async () => {
        const result = await advancedStorage.getAll();
        const ids = result.map(id => id.toNumber());
        assert(ids[0], 10);
    });

    it('Should return length of 2', async () => {
        let result = await advancedStorage.length();
        //console.log(await web3.utils.isBN(result));
        //console.log(result.toString());
        assert(result, 2);
    });

});

contract('Crud', async accounts => {
    let crud;
    const acctOne = accounts[0];

    beforeEach(async () => {
        crud = await Crud.new({ from: acctOne });
        assert(crud.address !== '');

        const name = 'Inky';
        const result = await crud.create(name);

        truffleAssert.eventEmitted(result, 'CreateUser', (ev) => {
            return ev.name == name && ev._message == 'User has been created.';
        });
    });

    it('Should create new user', async () => {
        const name = 'Pinky';
        const result = await crud.create(name);

        truffleAssert.eventEmitted(result, 'CreateUser', (ev) => {
            return ev.name == name && ev._message == 'User has been created.';
        });
    });

    it('Should get user by id', async () => {
        const result = await crud.read(1);
        assert(result[0], 1);
        assert(result[1], 'Inky');
    });

    it('Should update user name by id', async () => {
        const result = await crud.update(1, 'Blinky');
        truffleAssert.eventEmitted(result, 'UpdateUser', (ev) => {
            return ev.name == 'Blinky' && ev._message == 'User has been updated.';
        });
    });

    it('Should not update nonexistent user', async () => {
        try {
            await crud.update(2, 'Stinky');
        } catch(e) {
            assert(e.message.includes('User does not exist!'));
            return;
        }
        asset(false);
    });

    it('Should delete user by id', async () => {
        await crud.destroy(1);

        try {
            await crud.read(1);
        } catch(e) {
            assert(e.message.includes('User does not exist!'));
            return;
        }
        assert(false);
    });

    it('Should not delete a nonexistent user', async () => {
        try {
            await crud.destroy(2);
        } catch(e) {
            assert(e.message.includes('User does not exist!'));
            return;
        }
        asset(false);
    });

});
