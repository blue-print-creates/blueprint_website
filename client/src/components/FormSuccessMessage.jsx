import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from '@mui/material';

const FormErrorMessage = ({ setSuccess }) => {
  const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setSuccess(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const vertical = "bottom";
  const horizontal = "right"

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message="Note archived"
        action={action}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert autoHideDuration={6000} variant="filled" onClose={handleClose} severity="success">
          Successfully Sent
        </Alert>
      </Snackbar>
    </div>
  );
}

export default FormErrorMessage;