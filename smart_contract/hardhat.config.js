require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/XuFkIAiLP5tqu7IE5e9Xa85vmT954qqM',
      accounts: ['e3e6f21d9ab6910994a0d0d94fcd67e476b723b50e903908706d4fc6abf2a981'],
    },
  },
};