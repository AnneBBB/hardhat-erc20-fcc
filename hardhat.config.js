require("hardhat-deploy")
require("dotenv").config()
//require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("@nomicfoundation/hardhat-chai-matchers")

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "https://eth-goerli"
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || "https://eth-sepolia"
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL || "https://weth"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key"

module.exports = {
    solidity: {
        compilers: [
            { version: "0.8.15" },
            { version: "0.8.8" },
            { version: "0.6.0" },
            { version: "0.6.6" },
            { version: "0.6.12" },
            { version: "0.4.19" },
        ],
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            forking: {
                url: MAINNET_RPC_URL,
            },
            blockConfirmations: 1,
        },
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
            blockConfirmations: 6,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        user: {
            default: 1,
        },
    },
    gasReporter: {
        enabled: false,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        //coinmarketcap: COINMARKETCAP_API_KEY,
        //token: "MATIC",
    },
    mocha: {
        timeout: 150000, //300 seconds max
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
}
