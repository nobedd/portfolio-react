import React from 'react';
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white"
    }
});

function Content() {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <Typography variant="h5">HELLO, I AM</Typography>
            <Typography variant="h1">QUAN</Typography>
            <Typography variant="h1">CHONG</Typography>
            <Typography variant="h5">I'M A FRONT-END WEB DEVELOPER</Typography>
        </div>
    );
};

export default function Header() {
    return (
        <div className="Header" >
            <Content />
        </div>

    );
}