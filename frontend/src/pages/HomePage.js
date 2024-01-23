import { Link } from "react-router-dom";

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

const HomePage = () => {

  return (
    <Container>
      <h1>Scapegoat</h1>
      <Stack spacing={2}>
        <Tooltip
          arrow
          placement="top"
          title="Join an existing game by providing a code."
        >
          <Button variant="contained" fullWidth color="primary">
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
              Join Lobby
            </Typography>
          </Button>
        </Tooltip>
        <Tooltip
          arrow
          placement="bottom"
          title="Create a new game where you will be able to invite your friends."
        >
          <Link to="/lobby">
            <Button variant="contained" fullWidth color="secondary">
              Create Lobby
            </Button>
          </Link>
        </Tooltip>
      </Stack>
    </Container>
  )
}

export default HomePage