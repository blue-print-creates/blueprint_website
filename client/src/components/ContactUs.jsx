import React, { useState, useRef } from "react";
import emailjs from 'emailjs-com';
import { Button, Box, Grid, TextField, Typography } from '@mui/material'
import FormInput from "./FormInput";

const ContactUs = () => {
  const [values, setValues] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
  })
  const form = useRef();

  const inputs = [
    {
      id: 1,
      name: "subject",
      label: "Subject",
      rows: 1,
    },
    {
      id: 2,
      name: "name",
      label: "Name",
      rows: 1,
    },
    {
      id: 3,
      name: "email",
      label: "Email",
      rows: 1,
    },
    {
      id: 4,
      name: "message",
      label: "Message",
      rows: 5,
    },
  ]

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const sendEmail = (e) => {
    e.preventDefault();

    const YOUR_SERVICE_ID = "service_ts4cz6c";
    const YOUR_TEMPLATE_ID = "template_dt2m4hd";
    const YOUR_USER_ID = "user_HxQRAJXjAqnTBxKfpaq2I"

    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_USER_ID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Box>
      <br /><br />
      <form ref={form} onSubmit={sendEmail}>   {/* Required for emailJS */}
        <Grid container spacing={3} justifyContent="center">
          {inputs.map(input => (
            <FormInput 
              key={input.id}
              {...input} 
              value={values[input.name]} 
              onChange={onChange} 
            />
          ))}
          <Grid item xs={11} sm={9} md={7}>
            <Button onClick={sendEmail}  align="center" size="large" color="secondary" variant="contained">Send</Button>
          </Grid>
        </Grid>
      </form>
      <br /><br />
    </Box>
  )
}

export default ContactUs;