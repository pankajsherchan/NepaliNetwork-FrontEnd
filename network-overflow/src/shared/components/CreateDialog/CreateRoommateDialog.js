import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import defaultImage from '../../../views/home/imagee.jpg';
import axios from 'axios';
import SimpleDialog from '../dialog/SimpleDialog';


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

    if (!values.roomName) {
      errors.roomName = 'Required';
    }

    if (!values.roomLocation) {
      errors.roomLocation = 'Required';
    }
    
    if (!values.roomPhone) {
      errors.roomPhone = 'Required';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      roomName: '',
      roomDescription: '',
      roomLocation: '',
      roomPhone:'',
      roomEmail:'',
      roomImage: '',
      roomfirstName:'',
      roomlastName:'',
    },
    validate,
    onSubmit: async (roommate) => {
      console.log(roommate);
      createRoommate(roommate);
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

  const handleImage = (roommate) => {
    const data = new FormData();
    if (roommate.target.files) {
      data.append('profileImage', roommate.target.files[0]);
    }
    imageUpload(data);
  };


  const createRoommate = async (data) => {
    data = {
      ...data,
      roomImage: image.location !== '' ? image.location : defaultImage,
    };
    console.log(data);
    const data1 = {
      listingType: data.roomName, 
      email: data.roomEmail,
      listingAddress: data.roomLocation,
      phoneNumber: data.roomPhone,
      summary: data.roomDescription,
      firstName: data.roomfirstName,
      lastName: data.roomlastName,
      image: data.roomImage,
    };
    console.log(data1);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios
        .post(`http://localhost:5000/api/roommates`, data1, config)
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
    try {
      await axios
        .post(`http://localhost:5000/api/profile/profile-img-upload`, file)
        .then((res) => {
          console.log(JSON.stringify(res.data));
          console.log(res.data.location);

          setImage({ location: res.data.location });
        })
        .then((resData) => {
          console.log('Success ');
        })        
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
        Create Room Listing
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
            Room Info
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='fname'
            label='First Name'
            name='firstName'
            type='text'
            fullWidth
            variant='outlined'
            InputProps={{
              className: classes.textBox
            }}
            onChange={formik.handleChange}            
          />
          <TextField
          autoFocus
          margin='dense'
          id='lname'
          label='Last Name'
          name='lastName'
          type='text'
          fullWidth
          variant='outlined'
          InputProps={{
            className: classes.textBox
          }}
          onChange={formik.handleChange}            
        />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Room Type'
            name='roomName'
            type='text'
            fullWidth
            variant='outlined'
            InputProps={{
              className: classes.textBox
            }}
            onChange={formik.handleChange}            
          />

          {formik.errors.roomName ? (
              <div className={classes.multilineColor}>
                {formik.errors.roomName}
              </div>
            ) : null}

          <TextField
            margin='dense'
            id='location'
            label='Room Location'
            name= 'roomLocation'
            type='text'
            fullWidth
            variant='outlined'
            InputProps={{
              className: classes.textBox
            }}
            onChange={formik.handleChange}

          />
          
          {formik.errors.roomLocation ? (
              <div className={classes.multilineColor}>
                {formik.errors.roomLocation}
              </div>
            ) : null}

          <TextField
            margin='dense'
            id='summary'
            label='Room Details'
            name= 'roomDescription'
            multiline
            rows='2'
            type='text'
            fullWidth
            variant='outlined'
            InputProps={{
              className: classes.textBox
            }}
            onChange={formik.handleChange}

          />
          <TextField
            margin='dense'
            id='email'
            label='Contact Email'
            name='roomEmail'
            multiline
            rows='2'
            type='text'
            fullWidth
            variant='outlined'
            InputProps={{
              className: classes.textBox
            }}
            onChange={formik.handleChange}

          />
          <TextField
            margin='dense'
            id='phone'
            label='Phone Number'
            name='roomPhone'
            multiline
            rows='2'
            type='text'
            fullWidth
            variant='outlined'
            InputProps={{
              className: classes.textBox
            }}
            onChange={formik.handleChange}
          />
              {formik.errors.roomPhone ? (
              <div className={classes.multilineColor}>
                {formik.errors.roomPhone}
              </div>
            ) : null}

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
