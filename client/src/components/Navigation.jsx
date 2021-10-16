import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Button, ButtonGroup, FormControl, Select, MenuItem } from "@mui/material";

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
      <ButtonGroup
        size={isSmall ? "small" : "large"}
        variant="text"
        aria-label="text button group"
        color="primary"
      >
        <Button>Home</Button>
        <Button>Gallery</Button>
        <Button>Contact Us</Button>
      </ButtonGroup>
      }
    </>
  )
}

export default Navigation;