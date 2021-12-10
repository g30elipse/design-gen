import React from 'react';
import { Box, Paper, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export interface PanelProps {

}
const Panel: React.FC<PanelProps> = (props) => {
    const classes = useStyles({});

    return (
        <Paper square className={classes.root}>
            {props.children}
        </Paper>
    );
};

const useStyles = makeStyles<Theme, any>(theme => ({
    root: {
        padding: theme.spacing(2),
        width: theme.breakpoints.values.lg,
        margin: 'auto',
    }
}));
export default Panel;