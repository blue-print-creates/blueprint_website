import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Divider, Box, useMediaQuery, Button, FormControl, Select, MenuItem } from "@mui/material";
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
      <FormControl color="primary" size="large" variant="standard">
        <Select
          color="primary"
          variant="outlined"
          value={page}
          onChange={handleChange}
        >
          <MenuItem value={"Home"}>Home</MenuItem>
          <MenuItem value={"Gallery"}>Gallery</MenuItem>
          <MenuItem value={"Contact Us"}>Contact Us</MenuItem>
        </Select>
      </FormControl>
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