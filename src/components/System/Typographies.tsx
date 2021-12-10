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
                        <Box className={classes.typography}>
                            <Typography style={{
                                fontSize: typography.fontSize + 'px',
                                fontWeight: typography.fontWeight,
                            }}>
                                {typography.name}
                            </Typography>
                            <Typography variant='caption' color='GrayText'>{typography.fontSize + 'px'}</Typography>
                        </Box>
                    </Grid>
                ))}
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