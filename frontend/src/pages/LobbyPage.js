import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import CommentIcon from '@mui/icons-material/Comment'

const LobbyPage = () => {
  return (
    <Container>
      <h1>Scape</h1>
      <Paper style={{ padding: 16 }}>
        <p>lkjfklsj</p>
        <Box p={2} bgcolor="#f5f5f5" boxShadow="none">
          <h2>Players</h2>
          <Stack spacing={1}>
            <div style={{ backgroundColor: "#FFB82F", padding: "10px" }}>Orangutan</div>
            <div style={{ backgroundColor: "#ED5F5F", padding: "10px" }}>Baboon</div>
          </Stack>
        </Box>
      </Paper>
    </Container>
  )
}

export default LobbyPage