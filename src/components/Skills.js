import React from 'react';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#282c34",
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    top: {
        marginTop: "30px"
    },

    card: {
        marginBottom: "20px"
    },

    text: {
        textAlign: "center",
        marginBottom: "10px",
        color: "White"
    }
    
});

export default function Skills() {
    const classes = useStyles();
    return (
        <div className={`Skills ${classes.root}`}>
            <Grid container spacing={3} >
                <Grid item xs />
                <Grid item xs={6}>
                    <Typography variant="h3" className={classes.text}>Skills (section in development)</Typography>
                    <Paper>
                        <Typography>Programming: HTML, JS, CSS, SQL, PHP, Java, Python, R, C++</Typography>
                        <Typography>Frameworks: Angular, Bootstrap, D3, Flask, React</Typography>
                        <Typography>Tools: Git, MySQL, Firebase, Android Studio, Unreal Engine, WordPress, SPSS</Typography>
                    </Paper>

                </Grid>
                <Grid item xs />
            </Grid>
        </div>
    );
}