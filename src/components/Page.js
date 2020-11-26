import { Box, Paper } from '@material-ui/core';
import Header from './Header';

function Page({ children }) {
  return (
    <Paper
      style={{ padding: 0, margin: 0, height: '100vh', backgroundColor: '#fafafa' }}
      elevation={0}
    >
      <Header />
      <Box mt={2}>{children}</Box>
    </Paper>
  );
}

export default Page;
