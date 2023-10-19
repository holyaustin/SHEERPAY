import Chain from 'src/models/chain'

export const gnosisChain: Chain = {
  id: '0x64',
  token: 'xDai',
  shortName: 'gno',
  label: 'Gnosis Chain',
  rpcUrl: 'https://rpc.gnosischain.com',
  blockExplorerUrl: 'https://gnosisscan.io',
  color: '#3e6957',
  transactionServiceUrl: 'https://safe-transaction-gnosis-chain.safe.global',
  isStripePaymentsEnabled: false,
  isMoneriumPaymentsEnabled: false
}

export const MantleChain: Chain = {
  id: '0x1388',
  token: 'MNT',
  shortName: 'mnt',
  label: 'Mantle',
  rpcUrl: 'https://rpc.mantle.xyz',
  blockExplorerUrl: 'https://gnosisscan.io',
  color: '#3e6957',
  transactionServiceUrl: 'https://safe-transaction-gnosis-chain.safe.global',
  isStripePaymentsEnabled: false,
  isMoneriumPaymentsEnabled: false,
  faucetUrl:"0x69f4D1788e39c87893C980c06EdF4b7f686e2938"
}

export const goerliChain: Chain = {
  id: '0x5',
  token: 'gETH',
  label: 'Göerli Testnet',
  shortName: 'gor',
  rpcUrl: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  blockExplorerUrl: 'https://goerli.etherscan.io',
  color: '#fbc02d',
  transactionServiceUrl: 'https://safe-transaction-goerli.safe.global',
  isStripePaymentsEnabled: false,
  isMoneriumPaymentsEnabled: true
}

export const mainnetChain: Chain = {
  id: '0x1',
  token: 'ETH',
  label: 'Ethereum',
  shortName: 'eth',
  rpcUrl: 'https://cloudflare-eth.com',
  blockExplorerUrl: 'https://etherscan.io',
  color: '#DDDDDD',
  transactionServiceUrl: 'https://safe-transaction-mainnet.safe.global',
  isStripePaymentsEnabled: false,
  isMoneriumPaymentsEnabled: false
}

export const polygonChain: Chain = {
  id: '0x89',
  token: 'matic',
  shortName: 'matic',
  label: 'Polygon',
  rpcUrl: 'https://polygon-rpc.com',
  blockExplorerUrl: 'https://polygonscan.com',
  color: '#8248E5',
  transactionServiceUrl: 'https://safe-transaction-polygon.safe.global',
  isStripePaymentsEnabled: false,
  isMoneriumPaymentsEnabled: false
}

export const mumbaiChain: Chain = {
  id: '0x13881',
  token: 'matic',
  shortName: 'matic',
  label: 'Mumbai Testnet',
  rpcUrl: 'https://rpc-mumbai.maticvigil.com/',
  blockExplorerUrl: 'https://mumbai.polygonscan.com',
  color: '#8248E5',
  isStripePaymentsEnabled: true,
  isMoneriumPaymentsEnabled: false,
  faucetUrl: 'https://mumbaifaucet.com/'
}

export const MantleTestnet: Chain = {
  id: '0x1389',
  token: 'MNT',
  shortName: 'mnt',
  label: 'Mantle Testnet',
  rpcUrl: 'https://rpc-mumbai.maticvigil.com/',
  blockExplorerUrl: 'https://mumbai.polygonscan.com',
  color: '#DDDDDD',
  isStripePaymentsEnabled: true,
  isMoneriumPaymentsEnabled: false,
  faucetUrl: '0x69f4D1788e39c87893C980c06EdF4b7f686e2938'
}

export const ScrollTestnet: Chain = {
  id: '0x8274f',
  token: 'ETH',
  shortName: 'scr',
  label: 'Scroll Testnet',
  rpcUrl: 'https://rpc-mumbai.maticvigil.com/',
  blockExplorerUrl: 'https://mumbai.polygonscan.com',
  color: '#fbc02d',
  isStripePaymentsEnabled: true,
  isMoneriumPaymentsEnabled: false,
  faucetUrl: '0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552'
}

const chains: Chain[] = [gnosisChain, polygonChain, mainnetChain, MantleChain, goerliChain, MantleTestnet, ScrollTestnet, mumbaiChain  ]

export const initialChain = mumbaiChain

export default chains
