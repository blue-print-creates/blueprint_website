import React from 'react';
import { useTheme } from '@mui/material/styles';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, Divider, Box, useMediaQuery, Button, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navigation = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [page, setPage] = React.useState('Home');

  const handleChange = (event) => {
    setPage(event.target.value);
  };

  const buttonVariant = "text"

  return (
    <>
      {isSmall ?
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button variant="text" size="large" {...bindTrigger(popupState)}>
                <MenuIcon fontSize="large" />
              </Button>
              <Menu {...bindMenu(popupState)} color="primary">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={popupState.close}>
                    <Typography variant="body2" color="primary" align="center">
                      Home
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="/gallery" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={popupState.close}>
                    <Typography variant="body2" color="primary">
                      Gallery
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="/contact-us" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={popupState.close}>
                    <Typography variant="body2" color="primary">
                      Contact Us
                    </Typography>
                  </MenuItem>
                </Link>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        :
        <Box sx={{
          flexGrow: "0.1",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}>
          <Link to="/">
            <Button size="large" variant={buttonVariant}>Home</Button>
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/gallery">
            <Button size="large" variant={buttonVariant}>Gallery</Button>
          </Link>
          <Divider orientation="vertical" flexItem />
          <Link to="/contact-us">
            <Button size="large" variant={buttonVariant}>Contact Us</Button>
          </Link>
        </Box>
      }
    </>
  )
}

export default Navigation;