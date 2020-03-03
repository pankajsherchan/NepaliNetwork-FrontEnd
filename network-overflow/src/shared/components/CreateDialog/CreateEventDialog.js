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
        Create Event
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.dialogHeader}>
            Event Info
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Title'
            type='text'
            fullWidth
            variant='outlined'
            InputProps={{
              className: classes.textBox
            }}
          />
          <TextField
            margin='dense'
            id='description'
            label='Description'
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
            id='venue'
            label='Venue'
            type='text'
            fullWidth
            variant='outlined'
            InputProps={{
              className: classes.textBox
            }}
          />
          <TextField
            id='datetime-start'
            label='Start Date-Time'
            type='datetime-local'
            defaultValue='2017-05-24T10:30'
            variant='outlined'
            margin='dense'
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              className: classes.timeBox
            }}
          />
          <TextField
            margin='dense'
            id='datetime-end'
            label='End Date'
            type='datetime-local'
            defaultValue='2017-05-24T10:30'
            variant='outlined'
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              className: classes.timeBox
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
