import { Grid } from "@mui/material";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";
// import "./App.css";
function App() {
  return (

    <>
    <Header />
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <List />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Map />
      </Grid>
    </Grid>
  </>
    
  );
}

export default App;
