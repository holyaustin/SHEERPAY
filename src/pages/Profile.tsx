import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded'
import SendIcon from '@mui/icons-material/SendRounded'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider'
import LinearProgress from '@mui/material/LinearProgress'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { utils } from 'ethers'
import { useState } from 'react'

import AddressLabel from 'src/components/address-label/AddressLabel'
import AuthenticateMessage from 'src/components/authenticate-message/AuthenticateMessage'
import GelatoTaskStatusLabel from 'src/components/gelato-task-status-label/GelatoTaskStatusLabel'
import SafeAccount from 'src/components/safe-account/SafeAccount'
import { ConnectedContainer } from 'src/components/styles'
import { useAccountAbstraction } from 'src/store/accountAbstractionContext'

import { Database } from "@tableland/sdk";
import { Wallet, getDefaultProvider } from "ethers";
require('dotenv').config();


const privateKey = process.env.REACT_APP_PRIVATE_KEY; // Your private key
const rpc = process.env.REACT_APP_ALCHEMY_RPC;
const wallet = new Wallet(privateKey);
// To avoid connecting to the browser wallet (locally, port 8545),
// replace the URL with a provider like Alchemy, Infura, Etherscan, etc.
const provider = getDefaultProvider(rpc); // For example: "https://polygon-mumbai.g.alchemy.com/v2/${process.env.YOUR_ALCHEMY_KEY}"
const signer = wallet.connect(provider);


const transferAmount = 0.01

const Profile = () => {
  const [formInput, updateFormInput] = useState({ name: "SheerPay User" });
  
  const {
    chainId,
    chain,

    safeSelected,
    safeBalance,

    isRelayerLoading,
    relayTransaction,
    gelatoTaskId,

    isAuthenticated,
    loginWeb3Auth
  } = useAccountAbstraction()

  const [transactionHash, setTransactionHash] = useState<string>('')

  // TODO: ADD PAY FEES USING USDC TOKEN

  const hasNativeFunds =
    !!safeBalance && Number(utils.formatEther(safeBalance || '0')) > transferAmount
  
  const addProfile = async () => {

    let x = Math.floor((Math.random() * 1000000000) + 1);
    const { name } = formInput;
    if (!name ) return;

    // Connect to the database
    const db = new Database({ signer });
    let myDate = Date()
  
    // Insert a row into the table
    const { meta: insert } = await db
      .prepare(`INSERT INTO profile2_80001_8037 (id, username, date_created, wallet) VALUES (?, ?, ?, ?);`)
      .bind({ x }, "SheerPay User", myDate.toString(), {safeSelected}  )
        .run();
  
      // Wait for transaction finality
      await insert.txn?.wait();
    }
  

  return (
    <>
      <Typography variant="h2" component="h1">
        User Profile
      </Typography>

      <Typography marginTop="16px">
        Update your Profile.
      </Typography>

      <Divider sx={{ margin: '32px 0 28px 0' }} />

      {!isAuthenticated ? (
        <AuthenticateMessage
          message="To use the Relay Kit you need to be authenticated"
          onConnect={loginWeb3Auth}
        />
      ) : (
        <Box display="flex" gap={3}>
          {/* safe Account */}
          <SafeAccount flex={1} />

          {/* Relay Transaction */}
          <ConnectedContainer
            display="flex"
            flex={2}
            flexDirection="column"
            gap={2}
            alignItems="flex-start"
            flexShrink={0}
          >
            <Typography fontWeight="700">User Profile</Typography>

            {/* Gelato status label */}
            {gelatoTaskId && (
              <GelatoTaskStatusLabel
                gelatoTaskId={gelatoTaskId}
                chainId={chainId}
                setTransactionHash={setTransactionHash}
                transactionHash={transactionHash}
              />
            )}

            {isRelayerLoading && <LinearProgress sx={{ alignSelf: 'stretch' }} />}

            {!isRelayerLoading && !gelatoTaskId && (
              <>
                <Typography fontSize="14px">
                  Add a profile to your safe account
                  </Typography>

                  <TextField
                    id="outlined-basic"
                    variant="outlined"
            placeholder="Enter User Name"
            className="mt-5 border rounded p-4 text-xl"
            onChange={(e) => updateFormInput({ ...formInput, name: e.target.value })}
            
              />

                {/* send fake transaction to Gelato relayer */}
                <Button
                  startIcon={<SendIcon />}
                  variant="contained"
                  disabled={!hasNativeFunds}
                  onClick={addProfile}
                >
                  Create new profile
                </Button>

                {!hasNativeFunds && (
                  <Typography color="error">
                    Insufficient funds. Send some funds to the Safe Account
                  </Typography>
                )}

                {!hasNativeFunds && chain?.faucetUrl && (
                  <Link href={chain.faucetUrl} target="_blank">
                    Request 0.5 {chain.token}.
                  </Link>
                )}
              </>
            )}

            {/* Transaction details */}
            <Stack gap={0.5} display="flex" flexDirection="column">
              <Typography>
                Create new profile 
              </Typography>

            </Stack>
          </ConnectedContainer>
        </Box>
      )}

    </>
  )
}

export default Profile
