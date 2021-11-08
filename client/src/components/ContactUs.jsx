import React, { useState, useRef } from "react";
import emailjs from 'emailjs-com';
import { Button, Box, Grid, Alert } from '@mui/material'
import FormInput from "./FormInput";
import FormErrorMessage from "./FormErrorMessage";

const ContactUs = () => {
  const [values, setValues] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
  })
  const [error, setError] = useState(false);
  const form = useRef();

  const inputs = [
    {
      id: 1,
      name: "subject",
      label: "Subject",
      rows: 1,
      errorMessage: "Shouldn't be empty.",
      pattern: "^(?!\s*$).+",
    },
    {
      id: 2,
      name: "name",
      label: "Name",
      rows: 1,
      errorMessage: "Name should be 3-16 characters & shouldn't include any special characters.",
      pattern: "^[a-zA-Z0-9]{3,16}$",
    },
    {
      id: 3,
      name: "email",
      label: "Email",
      rows: 1,
      errorMessage: "It should be a valid email.",
      pattern: "^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
    },
    {
      id: 4,
      name: "message",
      label: "Message",
      rows: 5,
      errorMessage: "Shouldn't be empty.",
      pattern: "^(?!\s*$).+",
    },
  ]

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let isError = false;

    inputs.map(input => {
      const regex = new RegExp(input.pattern);

      if (!regex.test(values[input.name])) {
        isError = true;
      }
    })

    if (isError)
      setError(true);
    else
      sendEmail(e);
  }

  return (
    <Box>
      <br />
      {error ? <FormErrorMessage setError={setError} /> : null}
      <br />
      <form noValidate ref={form} onSubmit={handleSubmit}>
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
            <Button
              type="submit" 
              align="center" 
              size="large" 
              color="secondary" 
              variant="contained"
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
      
      <br /><br />
    </Box>
  )
}

export default ContactUs;