import { Autocomplete } from "@react-google-maps/api/";
import { AppBar, Toolbar, Typography, Box, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from "./Styles";
function Header() {
  const classes =useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
          <Box display="flex"></Box>
        </Typography>

        <Typography variant="h5" className={classes.title}>
          Explore new places
          <Box display="flex"></Box>
        </Typography>
        <Autocomplete>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
            <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            ></InputBase>
          </div>
        </Autocomplete>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
