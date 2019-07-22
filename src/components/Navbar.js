import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        backgroundColor: "#282c34",
        display: "flex"
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    }
});

export default function Navbar() {
    const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = React.useState(4);

    function handleListItemClick(event, index) {
        setSelectedIndex(index);
      }

    return (
        <AppBar position="fixed" className={classes.header}>
            <List component="nav" aria-label="nav" className={classes.list}>
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    onClick={event => handleListItemClick(event, 0)}
                >
                    <ListItemText primary="Projects" />
                </ListItem>

                <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={event => handleListItemClick(event, 1)}
                >
                    <ListItemText primary="Skills" />
                </ListItem>
                
                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={event => handleListItemClick(event, 2)}
                >
                    <ListItemText primary="About" />
                </ListItem>
            </List>
        </AppBar >
    )
}