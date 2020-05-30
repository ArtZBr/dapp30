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

/* Crud Smart Contract *********************************************************/
contract Crud {

    /* DATA VARIABLES ******************************************************************/
    struct User {
        uint id;
        string name;
    }
    User[] public users;
    uint public nextId = 1;

    /* EVENT DEFINITIONS ***************************************************************/
    event CreateUser(string name, uint id, string _message);
    event UpdateUser(string name, string _message);
    event DeleteUser(string name, string _message);

    /* FUNCTION MODIFIERS **************************************************************/

    /* CONSTRUCTOR *********************************************************************/
    constructor() public {
        users.push(User(nextId, 'Admin'));
        nextId++;
    }

    /* UTILITY FUNCTIONS ***************************************************************/
    function find(uint _id) view internal returns(uint){
        for(uint i = 0; i < users.length; i++) {
            if(users[i].id == _id) {
                return i;
            }
        }
        revert('User does not exist!');
    }

    /* SMART CONTRACT FUNCTIONS ********************************************************/
    function create(string memory _name) public {
        users.push(User(nextId, _name));
        emit CreateUser(_name, nextId, "User has been created.");
        nextId++;
    }

    function read(uint _id) view public returns(uint, string memory) {
        uint i = find(_id);
        return(users[i].id, users[i].name);
    }

    function update(uint _id, string memory _name) public {
        uint i = find(_id);
        users[i].name = _name;
        emit UpdateUser(users[i].name, "User has been updated.");
    }

    function destroy(uint _id) public {
        uint i = find(_id);
        delete users[i];
        emit DeleteUser(users[i].name, "User has been deleted.");
        users.push(User(_id, 'BLANK'));
    }

    /** DATA CONTRACT INTERFACE ************************************************************/
}

/* FlightSurety Smart Contract *********************************************************/
/* DATA VARIABLES ******************************************************************/
/* EVENT DEFINITIONS ***************************************************************/
/* FUNCTION MODIFIERS **************************************************************/
/* CONSTRUCTOR *********************************************************************/
/* UTILITY FUNCTIONS ***************************************************************/
/* SMART CONTRACT FUNCTIONS ********************************************************/
/** DATA CONTRACT INTERFACE ************************************************************/
