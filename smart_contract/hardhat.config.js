require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/gtrVVlA3Xveieb-XFvcPaMV2xtNKk96I",
      accounts: [
        "4b50af30a5199bbd974a83f987ea53dbd8a67605e5ff2ffeb4930fe22bbc14b9",
      ],
    },
  },
};
