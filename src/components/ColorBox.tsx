import React from 'react';
import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export interface ColorBoxProps {
    color: string;
    width?: number;
}
const ColorBox: React.FC<ColorBoxProps> = (props) => {
    const { color, width = '100%' } = props;
    const classes = useStyles({});

    return (
        <Box style={{ backgroundColor: color, width: width, aspectRatio: '3/2' }}>
        </Box>
    );
};

const useStyles = makeStyles<Theme, any>(theme => ({

}));
export default ColorBox;