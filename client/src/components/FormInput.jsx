import { TextField, Grid } from '@mui/material';
import React, { useState } from 'react';

const FormInput = (props) => {
  const [focussed, setFocussed] = useState(true);
  const { label, name, rows, pattern, errorMessage, onChange, value } = props;
  const regex = new RegExp(pattern);

  const handleFocus = (e) => {
    setFocussed(false);
  }

  return (
    <Grid item xs={11} sm={9} md={7}>
      <TextField
        onChange={onChange}
        onBlur={handleFocus}
        multiline
        rows={rows}
        name={name}
        value={value}
        size="medium"
        variant="outlined"
        label={label}
        color="secondary"
        fullWidth
        required
        error={regex.test(value) || focussed ? false : true}
        helperText={regex.test(value) || focussed ? null : errorMessage}
      />
    </Grid>
  )
}

export default FormInput;
