import { Box, Theme, ThemeProvider, createTheme } from '@mui/material';
import React, { FC } from 'react';
import { makeStyles } from '@mui/styles';
import { ThemeData } from '../Form';


export interface ThemeWrapperProps {
    themeData: ThemeData
}

const ThemeWrapper: FC<ThemeWrapperProps> = (props) => {
    const { themeData } = props;
    const classes = useStyles({});

    const theme = createTheme({
        palette: {
            primary: {
                main: themeData.primaryColor,
            },
            secondary: {
                main: themeData.secondaryColor,
            },
            background: {
                default: themeData.backgroundColor,
            },
            text: {
                primary: themeData.textColorPrimary,
            },
        },
        typography: {
            fontFamily: themeData.fontFamilyPrimary.name,
            fontWeightMedium: themeData.fontFamilyPrimary.fontWeightMedium,
            fontWeightRegular: themeData.fontFamilyPrimary.fontWeightRegular,
            fontWeightBold: themeData.fontFamilyPrimary.fontWeightBold,
        }
    });

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}



const useStyles = makeStyles<Theme, any>({

});



export default ThemeWrapper;