import React from 'react';
import { Textfield, Button, Typography, Paper } from '@material-ui/core';

import useStyles from './styles';


const Form = () => {
    const classes = useStyles();
    const handleSubmit = () => {

    }
    return (
      <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography variant="h6"> Creating a memory</Typography>
            <Textfield 
                name="creator" 
                variant="outlined" 
                label="Creator" 
                fullWidth
                value={postData.creator}
                onChange={}
            />
        </form>
      </Paper>
    ) 
}

export default Form;