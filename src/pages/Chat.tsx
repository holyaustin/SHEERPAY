import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded'
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
import HDKeys from 'src/components/hd-keys/hdkeys'
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

const Chat = () => {
  const [formInput, updateFormInput] = useState({ email: "" });
  
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
  
  const sendInvite= async () => {
    // waiting for the Lit protocol relayers API
    console.log("Send invite loading")

    const { email } = formInput;
    if (!email ) return;

    toast("Invite send to recipient!");
    // HDKeys()
  }
  
 
  return (
    <>
      <Typography variant="h2" component="h1">
        Invite Friends / Chat
      </Typography>

      <Typography marginTop="16px">
        Web3 enabled Chat Powered by XMTP.
        Onboard new users by sending them claimables
      </Typography>
      <Typography marginTop="16px">

        Onboard new users by sending them claimables by Lit Protocol
      </Typography>

      <Divider sx={{ margin: '32px 0 28px 0' }} />

      {!isAuthenticated ? (
        <AuthenticateMessage
          message="To use the Relay Kit you need to be authenticated"
          onConnect={loginWeb3Auth}
        />
      ) : (
        <Box display="flex" gap={3}>
          {/* safe Account 
            <SafeAccount flex={1} />
            */}

            {/* Open XMTP for chat */}
            <ConnectedContainer
            display="flex"
            flex={2}
            flexDirection="column"
            gap={2}
              alignItems="center"
              // alignItems="end"
            flexShrink={0}
          >
            <Link href="https://web3chat-holyaustin.vercel.app/" target="_blank" flex={2}>
                <Button
                  startIcon={<SendIcon />}
                  variant="contained"
                  // disabled={!hasNativeFunds}
                  //onClick={openXMTP}
                >
                  Chat with other Users
                </Button>

                <Stack gap={2} display="flex" flexDirection="column">
                  <Typography fontWeight="700">
                      Click button to start chatting
                  </Typography>
                </Stack>
              </Link>
              </ConnectedContainer>

            

          {/* Relay Transaction */}
          <ConnectedContainer
            display="flex"
            flex={2}
            flexDirection="column"
            gap={2}
            alignItems="flex-start"
            flexShrink={0}
            >
              
              <Stack gap={0.5} display="flex" flexDirection="column">
              <Typography>
              Enter an Email to send an invite
              </Typography>

            </Stack>

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
                  Invite friends and loved ones through email
                  </Typography>

                  <TextField
                    id="outlined-basic"
                    variant="outlined"
            placeholder="Enter Email to Invite"
            onChange={(e) => updateFormInput({ ...formInput, email: e.target.value })}
            
              />

                {/* send fake transaction to Gelato relayer */}
                <Button
                  startIcon={<SendIcon />}
                  variant="contained"
                  disabled={!hasNativeFunds}
                  onClick={sendInvite}
                >
                  Send an Invite
                  </Button>
                  <ToastContainer />

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
                send an invite
              </Typography>

            </Stack>
          </ConnectedContainer>
        </Box>
      )}

    </>
  )
}

export default Chat
