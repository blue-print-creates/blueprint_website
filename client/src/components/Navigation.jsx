import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Divider, Box, useMediaQuery, Button, ButtonGroup, FormControl, Select, MenuItem } from "@mui/material";

const Navigation = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [page, setPage] = React.useState('Home');

  const handleChange = (event) => {
    setPage(event.target.value);
  };

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
        <Button size="large">Home</Button>
        <Divider orientation="vertical" flexItem />
        <Button size="large">Gallery</Button>
        <Divider orientation="vertical" flexItem />
        <Button size="large">Contact Us</Button>
      </Box>
      }
    </>
  )
}

export default Navigation;