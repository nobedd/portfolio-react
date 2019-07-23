import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    top: {
        marginTop: "30px",    
    },

    card: {
        marginBottom: "20px"
    },

    text: {
        textAlign: "center",
        marginBottom: "10px"
    }
});

function Content() {
    const classes = useStyles();

    return (
        <div className={classes.top}>
            <Typography variant="h3" className={classes.text}>Projects</Typography>

            <Card className={classes.card}>
                <CardHeader
                    title="Visualisation of Urban Mobility Related Wheelchair Data"
                    subheader="HTML, JavaScript, D3, Google Maps API, Python, Flask, MySQL"
                />
                <Divider />
                <CardContent>
                    <Typography>
                        Currently developing a full-stack web app that displays imported wheelchair data (speed, surface-roughness etc.) on Google Maps. It provides users to derive useful data from the visualisations. Also, it lets admin users to import new data to the database.
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small" color="primary" href="https://github.com/Bdhawa123/SEPAB-34">
                        GitHub
                    </Button>
                    <Button size="small" color="primary" className={classes.button} disabled>
                        Web link
                    </Button>
                </CardActions>
            </Card>

            <Card className={classes.card}>
                <CardHeader
                    title="Aussie Climate - Data Visualisation"
                    subheader="HTML, JavaScript, D3, Bootstrap"
                />
                <Divider />
                <CardContent>
                    <Typography>
                        This web project visualises the average temperature and rainfall of Australia for the last 100 years. The data is provided by Bureau of Meteorology of Australia, BOM.
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small" color="primary" href="https://github.com/nobedd/aussie-climate">
                        GitHub
                    </Button>
                    <Button size="small" color="primary" href="https://nobedd.github.io/aussie-climate/">
                        Web link
                    </Button>
                </CardActions>
            </Card>

            <Card className={classes.card}>
                <CardHeader
                    title="Personal Portfolio website"
                    subheader="HTML, JavaScript, React, Material-UI"
                />
                <Divider />
                <CardContent>
                    <Typography>
                        Title is self-explanatory, I built this website to learn React and its UI framework.
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small" color="primary" href="https://github.com/nobedd/portfolio-react">
                        GitHub
                    </Button>
                    <Button size="small" color="primary" href="https://quanchong.dev">
                        Web link
                    </Button>
                </CardActions>
            </Card>

            <Card className={classes.card}>
                <CardHeader
                    title="Multiplayer First-Person-Shooter Game (placeholder name)"
                    subheader="Unreal Engine, C++"
                />
                <Divider />
                <CardContent>
                    <Typography>
                        Personal hobby project, creating a multiplayer FPS game. Development is in early stages.
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small" color="primary" disabled>
                        GitHub
                    </Button>
                    <Button size="small" color="primary" disabled>
                        Web link
                    </Button>
                </CardActions>
            </Card>
        </div>

    );

}

export default function Projects() {
    return (
        <div className="Projects" >
            <Grid container spacing={3} >
                <Grid item xs />
                <Grid item xs={6}>
                    <Content />
                </Grid>
                <Grid item xs />
            </Grid>
        </div>
    );
}