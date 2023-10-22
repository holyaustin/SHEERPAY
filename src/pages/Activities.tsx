import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
//import Link from '@mui/material/Link'
//import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
//import Code from 'src/components/code/Code'

import ConnectedWalletLabel from 'src/components/connected-wallet-label/ConnectedWalletLabel'
import SafeAccount from 'src/components/safe-account/SafeAccount'
import { ConnectContainer, ConnectedContainer } from 'src/components/styles'
import { useAccountAbstraction } from 'src/store/accountAbstractionContext'
//import { WEB3AUTH_SNIPPET } from 'src/utils/snippets'

const Activities = () => {
  const { loginWeb3Auth, isAuthenticated } = useAccountAbstraction()

  return (
    <>
      <Typography variant="h2" component="h1">
        SheerPay Explorer
      </Typography>

      <Typography marginTop="16px">
      This page generates list of transactions on Sheerpay. All activities as they go out are listed below
      </Typography>

      <Divider style={{ margin: '32px 0 28px 0' }} />

      {/* Auth Demo */}
      <Typography variant="h4" component="h2" fontWeight="700" marginBottom="16px">
       Transaction History
      </Typography>

      {isAuthenticated ? (
        <Box display="flex" gap={3}>
          {/* safe Account 
          <SafeAccount flex={1} />
          */}
          {/* owner ID */}
          <ConnectedContainer flex={2}>
            <Typography fontWeight="700">Owner ID</Typography>

            <Typography fontSize="14px" marginTop="8px" marginBottom="32px">
              Your Owner account signs transactions to unlock your assets.
            </Typography>

            {/* Owner details */}
            <ConnectedWalletLabel />
            <Typography variant="h4" component="h2" fontWeight="700" marginTop="36px" marginBottom="16px">
            Coming soon
            </Typography>
          </ConnectedContainer>


        </Box>
      ) : (
        <ConnectContainer display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Typography variant="h4" component="h3" fontWeight="700">
            Create your keyless account
          </Typography>

          <Button variant="contained" onClick={loginWeb3Auth}>
            Sign in
          </Button>
        </ConnectContainer>
      )}

      <Divider style={{ margin: '40px 0 30px 0' }} />

    </>
  )
}

export default Activities
