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
