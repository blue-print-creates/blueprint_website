import React, { useState } from "react";
import { Paper, Button, Box, Grid, TextField, Typography } from '@mui/material'

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Paper>
      <br />
      <br />
      {/* <Typography width="100%" variant="h5" align="center" color="secondary:dark">
        Please fill the following form to message us :
      </Typography> */}
      <br /><br />
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={11} sm={9} md={7}>
          <TextField value={name} onChange={e => setName(e.target.value)} size="medium" variant="outlined" label="Name" color="secondary" fullWidth />
        </Grid>
        <Grid item xs={11} sm={9} md={7}>
          <TextField value={email} onChange={e => setEmail(e.target.value)} size="medium" variant="outlined" label="Email" color="secondary" fullWidth />
        </Grid>
        <Grid item xs={11} sm={9} md={7}>
          <TextField value={message} onChange={e => setMessage(e.target.value)}  multiline rows={5} size="large" variant="outlined" label="Message" color="secondary" fullWidth />
        </Grid>
        <Grid item xs={11} sm={9} md={7}>
          <Button align="center" size="large" color="secondary" variant="contained">Send</Button>
        </Grid>
      </Grid>
      <br /><br /><br /><br />
    </Paper>
  )
}

export default ContactUs;