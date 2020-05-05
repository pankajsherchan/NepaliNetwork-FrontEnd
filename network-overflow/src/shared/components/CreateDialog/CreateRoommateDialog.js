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
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import CitySelect from '../../../views/dashboard/components/locationSearch';
import jwt_decoded from 'jwt-decode';

const useStyles = makeStyles((theme) => ({
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
  multilineColor1: {
    color: 'black',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function FormDialog(props) {
  const classes = useStyles();
  const [showDialog, setShowDialog] = React.useState(false);
  const [dialogMessage, setDialogMessage] = React.useState('');
  const [dialogTitle, setDialogTitle] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState({ location: '' });
  const [petChecked, setPetChecked] = React.useState(false);
  const [roomType, setRoomType] = React.useState(1);
  const [userState, setUser] = React.useState({});
  const [address, setAddress] = React.useState({});

  const validate = (values) => {
    const errors = {};

    if (!values.roomDescription) {
      errors.roomDescription = 'Required';
    }

    if (!values.roomPhone) {
      errors.roomPhone = 'Required';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      roomDescription: '',
      roomPhone: '',
    },
    validate,
    onSubmit: async (roommate) => {
      printRoommate(roommate);
    },
  });

  const printRoommate = async (roommate) => {
    await getUser();
    await createAddress();
    createRoommate(roommate);
    //console.log(roommate);
    // console.log(userState);
    // console.log(address);
  };

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

  const handleChange = () => {
    setPetChecked(!petChecked);
  };

  const handleImage = (roommate) => {
    const data = new FormData();
    if (roommate.target.files) {
      data.append('profileImage', roommate.target.files[0]);
    }
    imageUpload(data);
  };

  const handleRoomTypeChange = (event) => {
    setRoomType(event.target.value);
  };

  const handleStreetAddress = (event) => {
    const street = event.target.value;
    setAddress((prevState) => {
      return {
        ...prevState,
        street: street,
      };
    });
  };

  const handleCity = async (value) => {
    await setAddress((prevState) => {
      return {
        ...prevState,
        city: value.city,
        state: value.state,
      };
    });
  };

  const createRoommate = async (data) => {
    data = await {
      ...data,
      roomImage: image.location !== '' ? image.location : defaultImage,
      user: _uid,
      address: _aid,
    };
    // console.log(data);
    const data1 = await {
      listingType: roomType,
      contactNumber: data.roomPhone,
      description: data.roomDescription,
      image: data.roomImage,
      user: data.user,
      address: data.address,
      petsAllowed: petChecked,
    };
    // console.log(data1);
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
          setImage({ location: res.data.location });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error.response);
    }
  };

  let _aid;
  //get Address ID after creating address
  const createAddress = async () => {
    const data = address;
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios
        .post(`http://localhost:5000/api/addresses`, data, config)
        .then((res) => {
          const a = res.data.address;
          setAddress((prevState) => {
            return {
              ...prevState,
              addressId: a.id,
            };
          });
          _aid = a.id;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error.response);
    }
  };

  // React.useEffect(() => {
  //   console.log(address);
  // }, [address]);
  let _uid;
  //get user Id
  const getUser = async (roommate) => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      const decoded = jwt_decoded(token);

      const data = decoded.email;

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        await axios
          .get(`http://localhost:5000/api/users/${data}`, config)
          .then((res) => {
            const user = res.data.user;
            setUser({
              email: user.email,
              id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
            });
            _uid = user._id;
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error.response);
      }
    }
  };
  // React.useEffect(() => {
  //   createAddress();
  // }, [userState]);

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

            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel>Room Type</InputLabel>
              <NativeSelect
                defaultValue={1}
                inputProps={
                  ({
                    name: 'roomType',
                  },
                  {
                    className: classes.multilineColor1,
                  })
                }
                onChange={handleRoomTypeChange}
              >
                <option className={classes.multilineColor1} value={1}>
                  1 bedroom
                </option>
                <option className={classes.multilineColor1} value={2}>
                  2 bedroom
                </option>
                <option className={classes.multilineColor1} value={3}>
                  3 bedroom
                </option>
              </NativeSelect>
            </FormControl>
            <br />

            <FormControl variant='outlined'>
              <TextField
                margin='dense'
                id='street'
                label='Street Address'
                name='street'
                type='text'
                fullWidth
                variant='outlined'
                InputProps={{
                  className: classes.textBox,
                }}
                onChange={handleStreetAddress}
              />
              <div style={{ alignSelf: 'center' }}>
                <CitySelect setAddress={(address) => handleCity(address)} />
              </div>
            </FormControl>

            <TextField
              margin='dense'
              id='summary'
              label='Room Details'
              name='roomDescription'
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
                className: classes.textBox,
              }}
              onChange={formik.handleChange}
            />
            {formik.errors.roomPhone ? (
              <div className={classes.multilineColor}>
                {formik.errors.roomPhone}
              </div>
            ) : null}
            <div>
              <Switch
                checked={petChecked}
                onChange={handleChange}
                name='roomPetChecked'
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />{' '}
              <h5 className={classes.multilineColor1}>Allow Pets</h5>
            </div>
            <br />
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
