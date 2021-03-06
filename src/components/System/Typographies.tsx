import React from 'react';
import { Box, Divider, Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Panel from '../Panel';
import { ThemeData, TTypography } from '../Form';

export interface TypographiesProps {
    themeData: ThemeData
}
const Typographies: React.FC<TypographiesProps> = (props) => {
    const { themeData } = props;
    const { typographies } = themeData;
    const classes = useStyles({});

    return (
        <Panel title='TYPOGRAPHY' id='typographies'>
            <Typography variant='h5' marginBottom={5}><span className={classes.tag}>{themeData.fontFamilyPrimary.name}</span></Typography>
            <Grid container spacing={6}>
                {typographies.map((typography, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index}>
                        <Typography style={{
                            fontSize: typography.fontSize + 'px',
                            fontWeight: typography.fontWeight,
                        }}>
                            {typography.name}
                        </Typography>
                        <Typography variant='caption' color='GrayText'>{typography.fontSize + 'px'}</Typography>
                    </Grid>
                ))}
                <Grid item xs={12} sm={6} md={6} >
                    <Typography variant='body2' color='primary'>BUTTON TEXT</Typography>
                    <Typography variant='caption' color='GrayText'>{14 + 'px'}</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                    <Typography variant='caption' color='GrayText'>{16 + 'px'} Paragraph</Typography>
                    <Typography variant='body1'>
                        Est incididunt reprehenderit incididunt aliquip eiusmod sunt. Minim mollit ea deserunt laboris sunt nisi tempor quis magna excepteur exercitation. Quis mollit laboris ut sint sint id exercitation qui occaecat id veniam. Non est eu duis quis qui dolor officia cillum dolor in.
                    </Typography>
                    <br />
                    <Typography variant='body1'>
                        Id consectetur ad aliqua voluptate ex sit. Incididunt irure dolore et voluptate consequat duis. Excepteur voluptate ad ea sint Lorem id. Nulla pariatur amet exercitation veniam et et do voluptate consectetur. Non do reprehenderit nisi tempor anim id dolore sunt esse ad dolore. Non in est incididunt minim Lorem ullamco adipisicing nisi eiusmod.
                    </Typography>
                </Grid>

            </Grid>
        </Panel>
    );
};

const useStyles = makeStyles<Theme, any>(theme => ({
    tag: {
        padding: '0px 4px',
        backgroundColor: '#a92222',
        color: '#f5f5f5',
    }
}));
export default Typographies;