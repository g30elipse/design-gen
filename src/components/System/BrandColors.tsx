import React from 'react';
import { Box, Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ThemeData } from '../Form';
import Panel from '../Panel';
import ColorBox from '../ColorBox';

export interface BrandColorsProps {
    themeData: ThemeData
}


const Color: React.FC<{
    color: string,
    name: string,
    width?: number
}> = ({ color, name, width }) => {

    return (
        <>
            <ColorBox width={width} color={color} />
            <Typography variant='body2' >{color}</Typography>
            <Typography variant='body2' color='GrayText'>{name}</Typography>
        </>
    )
}
const BrandColors: React.FC<BrandColorsProps> = (props) => {
    const classes = useStyles({});
    const { themeData } = props;

    return (
        <Panel id='brand-colors' title="BRAND">
            <Box mt={3}>
                <Grid container spacing={12}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={4} md={4}>
                                <Color
                                    color={themeData.primaryColor}
                                    name='PRIMARY'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <Color
                                    color={themeData.secondaryColor}
                                    name='SECONDARY'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <Color
                                    color={themeData.backgroundColor}
                                    name='BACKGROUND'
                                />
                            </Grid>
                            {themeData.otherColors.map((color, index) => (
                                <Grid item xs={12} sm={4} md={4} key={index}>
                                    <Color
                                        color={color}
                                        name={`OTHER ${index + 1}`}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} style={{ flexDirection: 'row' }}>
                        <Box display='flex' flexWrap='wrap'>
                            {themeData.gray.map((color, index) => (
                                <Box key={index} mt={2} mr={1}>
                                    <Color width={100} color={color} name={`GRAY ${index + 1}`} />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Panel>
    );
};

const useStyles = makeStyles<Theme, any>(theme => ({

}));
export default BrandColors;