import React from 'react';
import { Box, Button, Divider, Paper, Theme, ThemeProvider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as htmlToImage from 'html-to-image';
import theme from '../../theme';

export interface PanelProps {
    title: string
    id: string
}
const Panel: React.FC<PanelProps> = (props) => {
    const { title, id } = props;
    const classes = useStyles({});

    const saveAsImage = () => {
        const el = document.getElementById(id);
        let elDownloadBtn = document.getElementById(`${id}-btn`);
        if (!el) return;
        if (elDownloadBtn)
            elDownloadBtn.style.display = 'none';

        htmlToImage.toPng(el).then(function (dataUrl) {
            let a = document.createElement('a');
            console.log(dataUrl);
            a.href = dataUrl;
            a.download = title + '.png';
            a.click();
            if (elDownloadBtn)
                elDownloadBtn.style.display = 'block';
        })
    }


    return (

        <div id={id}>
            <Paper square className={classes.root}>
                <ThemeProvider theme={theme}>
                    <Box py={1} display='flex' justifyContent='space-between'>
                        <Typography variant='h3' color='gray'>{title}</Typography>
                        <Button id={`${id}-btn`} onClick={saveAsImage} disableRipple>Save PNG</Button>
                    </Box>
                </ThemeProvider>
                <Divider />
                {props.children}
            </Paper>
        </div >

    );
};

const useStyles = makeStyles<Theme, any>(theme => ({
    root: {
        padding: theme.spacing(4, 6, 6, 6),
        width: theme.breakpoints.values.lg,
        margin: 'auto',
    }
}));
export default Panel;