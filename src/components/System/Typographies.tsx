import React from 'react';
import { Box, Grid, Theme, Typography } from '@mui/material';
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
        <Panel>
            <Grid container spacing={2}>
                {typographies.map((typography, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box className={classes.typography}>
                            <Typography style={{
                                fontSize: typography.fontSize + 'px',
                                fontWeight: typography.fontWeight,
                            }}>
                                {typography.name}
                            </Typography>
                            <Typography>{themeData.fontFamilyPrimary.name.toUpperCase()}</Typography>
                            <Typography>{typography.fontSize + 'px'}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Panel>
    );
};

const useStyles = makeStyles<Theme, any>(theme => ({

}));
export default Typographies;