import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useFormik } from 'formik';
import defaultImage from '../../../views/home/imagee.jpg';
import SimpleDialog from '../dialog/SimpleDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'black',
  },
  textBox: {
    color: 'black',
    height: 60,
    fontSize: '1.5em',
  },
  timeBox: {
    color: 'black',
    height: 60,
    marginTop: '2px',
  },
  dialogHeader: {
    fontWeight: 'bold',
    fontSize: '24px',
    color: 'black',
  },
  multilineColor: {
    color: 'red',
  },
}));

export default function FormDialog(props) {
  const classes = useStyles();
  const [showDialog, setShowDialog] = React.useState(false);
  const [dialogMessage, setDialogMessage] = React.useState('');
  const [dialogTitle, setDialogTitle] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState({ location: '' });

  const validate = (values) => {
    const errors = {};

    if (!values.eventName) {
      errors.eventName = 'Required';
    }
    // else if (
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    // ) {
    //   errors.email = 'Invalid email address';
    // }

    if (!values.eventVenue) {
      errors.eventVenue = 'Required';
    }
    // } else if (values.eventVenue.length < 3) {
    //   errors.eventVenue = 'Password must be at least 6 character long';
    // }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      eventName: '',
      eventSummary: '',
      eventVenue: '',
      eventStartDate: '2017-05-24T10:30',
      eventEndDate: '2017-05-24T10:30',
      eventImage: '',
    },
    validate,
    onSubmit: async (event) => {
      createEvent(event);
    },
  });

  const hideDialogBox = (title) => {
    setShowDialog(false);
    if (title === 'Success') {
      handleClose();
      props.render();
    }
  };

  const showDialogBox = (title, message) => {
    setShowDialog(true);
    setDialogMessage(message);
    setDialogTitle(title);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = (event) => {
    const data = new FormData();
    if (event.target.files) {
      data.append('profileImage', event.target.files[0]);
    }
    imageUpload(data);
  };

  const createEvent = async (data) => {
    data = {
      ...data,
      eventImage: image.location !== '' ? image.location : defaultImage,
    };
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios
        .post(`http://localhost:5000/api/events`, data, config)
        .then((res) => {
          if (res.data.message) {
            return showDialogBox(res.data.code, res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
          return showDialogBox('Warning', 'Something went wrong!');
        });
    } catch (error) {
      console.log(error.response);
    }
  };

  const imageUpload = async (file) => {
    //console.log(file);
    try {
      await axios
        .post(`http://localhost:5000/api/profile/profile-img-upload`, file)
        .then((res) => {
          // console.log(JSON.stringify(res.data));
          // console.log(res.data.location);
          setImage({ location: res.data.location });
        })
        // .then((resData) => {
        //   console.log('Success ');
        // })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error.response);
    }
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
        <form noValidate onSubmit={formik.handleSubmit}>
          <DialogContent>
            <DialogContentText className={classes.dialogHeader}>
              Event Info
            </DialogContentText>
            <TextField
              required
              autoFocus
              margin='dense'
              id='name'
              label='Title'
              name='eventName'
              type='text'
              fullWidth
              variant='outlined'
              InputProps={{
                className: classes.textBox,
              }}
              onChange={formik.handleChange}
            />
            {formik.errors.eventName ? (
              <div className={classes.multilineColor}>
                {formik.errors.eventName}
              </div>
            ) : null}

            <TextField
              required
              margin='dense'
              id='description'
              label='Description'
              name='eventSummary'
              multiline
              rows='2'
              type='text'
              fullWidth
              variant='outlined'
              InputProps={{
                className: classes.textBox,
              }}
              onChange={formik.handleChange}
            />
            <TextField
              required
              margin='dense'
              id='venue'
              label='Venue'
              name='eventVenue'
              type='text'
              fullWidth
              variant='outlined'
              InputProps={{
                className: classes.textBox,
              }}
              onChange={formik.handleChange}
            />
            {formik.errors.eventVenue ? (
              <div className={classes.multilineColor}>
                {formik.errors.eventVenue}
              </div>
            ) : null}
            <TextField
              required
              id='datetime-start'
              label='Start Date-Time'
              name='eventStartDate'
              type='datetime-local'
              defaultValue='2017-05-24T10:30'
              variant='outlined'
              margin='dense'
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                className: classes.timeBox,
              }}
              onChange={formik.handleChange}
            />
            <TextField
              required
              margin='dense'
              id='datetime-end'
              label='End Date'
              name='eventEndDate'
              type='datetime-local'
              defaultValue='2017-05-24T10:30'
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                className: classes.timeBox,
              }}
              onChange={formik.handleChange}
            />
            <TextField type='file' onChange={handleImage} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Cancel
            </Button>
            <Button type='submit' color='primary'>
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <div>
        {showDialog ? (
          <SimpleDialog
            open={showDialog}
            message={dialogMessage}
            title={dialogTitle}
            hide={() => hideDialogBox(dialogTitle)}
          ></SimpleDialog>
        ) : null}
      </div>
    </div>
  );
}
