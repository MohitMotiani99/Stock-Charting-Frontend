import './App.css';
import { Grid } from '@mui/material';
import SideMenu from './components/home/SideMenu';
import Features from './components/home/Features';
import PageHeader from './components/home/PageHeader';

function App() {
  return (
    <Grid container spacing={10}>
      <Grid item xs={3}>
        <PageHeader></PageHeader>
        <SideMenu></SideMenu>
      </Grid>

      <Grid item xs={8}>
        <Features></Features>
      </Grid>


    </Grid>
    // <div>
    //   <PageHeader></PageHeader>
    //   <SideMenu></SideMenu>
    //   <Features></Features>
    // </div>
  );
}

export default App;
