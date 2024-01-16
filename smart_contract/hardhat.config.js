require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/GlNUVUIPO6etYqH2rb67nTH2yNEutnIv",
      accounts: [
        "0fa1554716f2c85205ce0838d0f3901970ee6aab1e4c068f22dba8618af6ad4d",
      ],
    },
  },
};
