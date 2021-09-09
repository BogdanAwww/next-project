import { Button, Container, Box } from '@material-ui/core';

import Posts from '../components/Posts';

export default function Home() {
  return (
    <Box m={5}>
      <Container>
        <Posts />
      </Container>
    </Box>
  );
}
