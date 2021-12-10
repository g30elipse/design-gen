import React from 'react';
import { Box, Button, Divider, Paper, Theme, ThemeProvider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../theme';

export interface PanelProps {
    title: string
}
const Panel: React.FC<PanelProps> = (props) => {
    const { title } = props;
    const classes = useStyles({});


    return (
        <ThemeProvider theme={theme}>
            <Paper square className={classes.root}>
                <Box my={1} display='flex' justifyContent='space-between'>
                    <Typography variant='h3' color='gray'>{title}</Typography>
                    <Button >Save PNG</Button>
                </Box>
                <Divider />
                {props.children}
            </Paper>
        </ThemeProvider>
    );
};

const useStyles = makeStyles<Theme, any>(theme => ({
    root: {
        padding: theme.spacing(4, 8, 8, 8),
        width: theme.breakpoints.values.lg,
        margin: 'auto',
    }
}));
export default Panel;