import React from 'react';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    paper:{
        height: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        display: 'flex',
        flexDirection: 'row',
    },
    icon: {
        padding: "0px 10px 0px 10px",
        color: "black"
    }
});

export default function Footer(){
    const classes = useStyles();
    return(
        <div className="Footer">
            <Paper className={classes.paper}>
                <Typography variant="body2">Quan Chong 2019</Typography>

                <div className={`Social ${classes.list}`}>
                    <Link href="https://github.com/nobedd" className={classes.icon}>
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/quanchong/" className={classes.icon}>
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </Link>
                    <Link href="mailto:yquanchong@gmail.com" className={classes.icon}>
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    </Link>
                </div>
            </Paper>
            
        </div>
    );
}