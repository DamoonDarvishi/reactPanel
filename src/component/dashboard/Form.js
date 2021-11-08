import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DatePick from './date';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="outlined-full-width"
          label="Title"
          style={{ margin: 8 }}
          placeholder="Placeholder"
        //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
         <TextField
          id="outlined-multiline-static"
          label="Body"
          fullWidth
          style={{ margin: 8 }}
          multiline
          rows={4}
          placeholder="Placeholder"
          variant="outlined"
        />
        <DatePick style={{ margin: 8 }} fullWidth />
        <Button style={{ margin: 8 }} variant="contained" color="primary">
            Primary
        </Button>
      </div>
    </div>
  );
}
