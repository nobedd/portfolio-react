import React from 'react';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    text: {
        
    },

    paper:{
        height: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    }
});

export default function Footer(){
    const classes = useStyles();
    return(
        <div className="Footer">
            <Paper className={classes.paper}>
                <Typography variant="body2">Created by: Quan Chong</Typography>
            </Paper>
            
        </div>
    );
}