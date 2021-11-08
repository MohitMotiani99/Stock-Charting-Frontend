import './App.css';
import { Grid } from '@mui/material';
import PersistentDrawerLeft from './components/home/SideMenu2';
import SideMenu from './components/home/SideMenu';

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        {/* <PersistentDrawerLeft></PersistentDrawerLeft> */}
        <SideMenu></SideMenu>
      </Grid>
    </Grid>
  );
}

export default App;
