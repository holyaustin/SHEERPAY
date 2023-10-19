import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'

import introVideo from 'src/assets/crpto3.webm'
import introImage from 'src/assets/intro-chip.png'

const SafeCoreInfo = () => {
  return (
    <div>
      {/* video loop */}
      <video autoPlay loop muted height="450px" width="500px">
        <source src={introVideo} />
        <img src={introImage} alt="safe core img" />
      </video>

      {/* Chains */}
            <Typography variant="h1" fontSize="28px" marginLeft={'42px'} marginTop={'24px'}>
        Multi-Chain Payment Platform
      </Typography>

      {/* Links */}
      <Typography marginLeft={'42px'} marginTop={'44px'}>
        More information about SheerPay:
      </Typography>

      <Stack direction="row" alignItems="center" spacing={2} marginTop={'8px'} marginLeft={'42px'}>
        <Link href="https://github.com/holyaustin/SHEERPAY" target="_blank">
          Github 
        </Link>

        <Link href="https://docs.safe.global/safe-core-aa-sdk/safe-core-sdk" target="_blank">
          Twitter (X)
        </Link>

        <Link href="https://discord.gg/TQdJk2hN" target="_blank">
          Discord
        </Link>

        <Link href="https://web3chat-holyaustin.vercel.app/" target="_blank">
          Web3 Chat
        </Link>
      </Stack>
    </div>
  )
}

export default SafeCoreInfo
