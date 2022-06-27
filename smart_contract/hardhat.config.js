// require("@nomiclabs/hardhat-waffle");

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// // You need to export an object to set up your config
// // Go to https://hardhat.org/config/ to learn more

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
// module.exports = {
//   solidity: "0.8.4",
// };

// https://eth-goerli.alchemyapi.io/v2/fjSNbKAbSSo1QFsglV0NEFLi90YQIUKQ

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/fjSNbKAbSSo1QFsglV0NEFLi90YQIUKQ',
      accounts: [ '42726260050f4d5e4ce4c4dfee6d90230a000c882ec6a2cf564e6d6916e14dfc' ]
    }
  }
}



