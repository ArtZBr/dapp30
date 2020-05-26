with import <nixpkgs> {};

# with pkgs;

stdenv.mkDerivation {
  name = "ethenv";

  buildInputs = [python37 nodejs-12_x git];
  shellHook = ''
    npm i truffle ganache-cli serve create-react-app firebase-tools
  '';
}

/*
  npm i truffle create-react-app ganache-cli web3
  @openzeppelin/contracts web3 webpack webpack-dev-server @truffle/hdwallet-provider
*/
