import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const Header = () => {
  const s = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Container className={s.container}>
          <Typography variant="h6">
            LOGO
          </Typography>
          <Button color="inherit">Login</Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
