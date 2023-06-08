import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import ReviewsIcon from '@mui/icons-material/Reviews';
import Rating from "@mui/material/Rating";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import useStyles from "./Styles";
function Map() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact>
        bootstrapURLKeys={{ Key: "AIzaSyBJxas06fNxFXJ2Xn1i_zfnhJVJ7ZzINHE" }}
        defaultCenter={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={null}
        onchange={null}
        onChildClick={null}
      </GoogleMapReact>

    </div>
  );
}
export default Map;
