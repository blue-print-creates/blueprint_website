import { TextField, Grid } from '@mui/material';
import React from 'react';

const FormInput = (props) => {
  const {id, label, name, rows, onChange, ...inputProps} = props;

  return (
    <Grid item xs={11} sm={9} md={7}>
      <TextField onChange={onChange} multiline rows={rows} name={name} size="medium" variant="outlined" label={label} color="secondary" fullWidth />
    </Grid>
  )
}

export default FormInput;
