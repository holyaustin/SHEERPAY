# SheerPay app

[The Safe{Core} SDK](https://github.com/safe-global/safe-core-sdk) allows builders to add account abstraction functionality into their apps. This demo is an example on how to use our different packages (Auth Kit, OnRamp Kit & Relay Kit).

See the [Safe{Core} Account Abstraction SDK Docs](https://docs.safe.global/learn/safe-core-account-abstraction-sdk) for more details.

## Introduction

Multi Chain Payment Management using AA -> Get paid and Pay with any Crypto Currency seamlessly using SafePay

Features Using this system, companies can easily pay their employees with any cryptocurrency or fiat currency, which could potentially lead to faster, more secure, and cheaper transactions than traditional payroll methods.

Additionally, using smart contracts for payroll management reduces the risk of fraud, errors, and disputes by automating payroll calculations and payments.

Account abstraction could make this system much more efficient and cost-effective. By abstracting the user's account, it separates the user's private key from their on-chain address.

This means the private key could be stored safely and remotely, and only the user can transfer funds from the account. This would increase the security of the system and reduce the risk of a breach.

## Installation

To run this project locally:

Install deps:

```bash
yarn install
```

Create a `.env` file (see `example.env`)

```
# see https://web3auth.io/docs/developer-dashboard/get-client-id
REACT_APP_WEB3AUTH_CLIENT_ID=

REACT_APP_STRIPE_BACKEND_BASE_URL=https://aa-stripe.safe.global

REACT_APP_STRIPE_PUBLIC_KEY=pk_test_51MZbmZKSn9ArdBimSyl5i8DqfcnlhyhJHD8bF2wKrGkpvNWyPvBAYtE211oHda0X3Ea1n4e9J9nh2JkpC7Sxm5a200Ug9ijfoO

```

Run the demo App:

```bash
yarn start
```

IPFS metadata URI : <https://kezayya.infura-ipfs.io/ipfs/QmQDWyu9Myrmain5WjdP5rkuVQbS3rQTdTTrBuLeuYWShD>

npx hardhat verify --network scrollSepolia 0xe078fe7A93017F8e18c1C52E79632d0B94c56c26

Successfully submitted source code for contract
contracts/Minter.sol:Minter at 0xe078fe7A93017F8e18c1C52E79632d0B94c56c26
for verification on the block explorer. Waiting for verification result...

Successfully verified contract Minter on the block explorer.
https://sepolia-blockscout.scroll.io/address/0xe078fe7A93017F8e18c1C52E79632d0B94c56c26#code

## contract link on Explorer 

https://explorer.testnet.mantle.xyz/address/0x4e75D8F85ED40aA3f73fB751b1Dfa07DEFe09C94

https://sepolia.scrollscan.dev/address/0x4e75d8f85ed40aa3f73fb751b1dfa07defe09c94

https://mumbai.polygonscan.com/address/0xa6d6f4556b022c0c7051d62e071c0acece5a1228#tokentxnsErc721
