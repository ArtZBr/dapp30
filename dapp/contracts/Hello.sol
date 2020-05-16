pragma solidity >=0.4.21 <0.7.0;

contract HelloWorld {
    event HelloWorld(string _message);

    function hello() public returns (string memory){
        emit HelloWorld("Hello has been said");
        return 'Hello Dapp30 World';
    }
}

