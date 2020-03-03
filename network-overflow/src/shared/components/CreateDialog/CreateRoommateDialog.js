import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textBox: {
    color: 'black',
    height: 60,
    fontSize: '1.5em'
  },
  timeBox: {
    color: 'black',
    height: 60,
    marginTop: '2px'
  },
  dialogHeader: {
    fontWeight: 'bold',
    fontSize: '24px',
    color: 'black'
  }
}));

export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        Create Room Listing
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.dialogHeader}>
            Room Info
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Room Type'
            type='text'
            fullWidth
            variant='outlined'
            InputProps={{
              className: classes.textBox
            }}
          />
          <TextField
            margin='dense'
            id='location'
            label='Room Location'
            type='text'
            fullWidth
            variant='outlined'
            InputProps={{
              className: classes.textBox
            }}
          />
          
          <TextField
            margin='dense'
            id='summary'
            label='Room Details'
            multiline
            rows='2'
            type='text'
            fullWidth
            variant='outlined'
            InputProps={{
              className: classes.textBox
            }}
          />
          <TextField
            margin='dense'
            id='email'
            label='Contact Email'
            multiline
            rows='2'
            type='text'
            fullWidth
            variant='outlined'
            InputProps={{
              className: classes.textBox
            }}
          />
          <TextField
            margin='dense'
            id='phone '
            label='Phone Number'
            multiline
            rows='2'
            type='text'
            fullWidth
            variant='outlined'
            InputProps={{
              className: classes.textBox
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
