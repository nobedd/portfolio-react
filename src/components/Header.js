import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white"
    },
    greet:{
        textAlign: "center"
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
    },
    icon: {
        padding: "20px 15px 0px 15px",
        color: "white"
    }
});

function Content() {
    const classes = useStyles();
    return (
        <div className={`Content ${classes.root}`}>
            <Greeting greet={classes.greet}/>
            <Social list_css={classes.list} icon_css={classes.icon} />
        </div>
    );
};

function Greeting(props) {
    return (
        <div className={`Greeting ${props.greet}`}>
            <Typography variant="h5">WELCOME TO</Typography>
            <Typography variant="h1">QUAN</Typography>
            <Typography variant="h1">CHONG</Typography>
            <Typography variant="h5">WEBSITE, I'M A FRONT-END WEB DEVELOPER</Typography>
        </div>
    );
}

function Social(props) {
    return (
        <div className={`Social ${props.list_css}`}>
            <Link href="https://github.com/nobedd" className={props.icon_css}>
                <FontAwesomeIcon icon={faGithub} size="3x" />
            </Link>
            <Link href="https://www.linkedin.com/in/quanchong/" className={props.icon_css}>
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </Link>
            <Link href="mailto:yquanchong@gmail.com" className={props.icon_css}>
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
            </Link>
        </div>
    );
}

export default function Header() {
    return (
        <div className="Header" >
            <Content />
        </div>
    );
}