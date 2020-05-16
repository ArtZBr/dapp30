with import <nixpkgs> {};

# with pkgs;

stdenv.mkDerivation {
  name = "ethenv";

  buildInputs = [python37 nodejs-12_x git];
  shellHook = ''
  '';
}

/*
  @openzeppelin/contracts web3 webpack webpack-dev-server @truffle/hdwallet-provider
*/
