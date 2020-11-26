import { Typography, AppBar, Toolbar } from '@material-ui/core';

function Header() {
  return (
    <AppBar color="primary" position="static" style={{ height: '64px' }}>
      <Toolbar>
        <Typography color="inherit">TODOS</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
