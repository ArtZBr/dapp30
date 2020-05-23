pragma solidity >=0.4.21 <0.7.0;

contract HelloWorld {

    function hello() pure public returns (string memory){
        return 'Hello Dapp30 World';
    }
}

contract SimpleStorage {
    string public data;

    event DataSet(string data, string _message);

    function set(string memory _data) public {
        data = _data;
        emit DataSet(data, "Data has been saved");

    }

    function get() view public returns(string memory) {
        return data;
    }

}

contract AdvancedStorage {

    /* DATA VARIABLES ******************************************************************/
    uint[] public ids;

    /* EVENT DEFINITIONS ***************************************************************/
    event AddId(uint id, string _message);

    /* CONSTRUCTOR *********************************************************************/
    constructor() public {
        ids.push(10);
    }

    function add(uint _id) public {
        ids.push(_id);
        emit AddId(_id, "ID has been saved");
    }

    function get(uint _idx) view public returns(uint) {
        return ids[_idx];
    }
    function getAll() view public returns(uint[] memory) {
        return ids;
    }
    function length() view public returns(uint) {
        return ids.length;
    }
}
