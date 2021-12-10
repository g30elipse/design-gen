import React, { useEffect } from 'react';
import { Box, Button, Container, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ThemeWrapper from './ThemeWrapper';
import { ThemeData } from '../Form';
import Typographies from './Typographies';
import { setFontFamilyImport } from './utils';

export interface SystemProps {
    themeData: ThemeData
}
const System: React.FC<SystemProps> = (props) => {
    const { themeData } = props;

    useEffect(() => {
        setFontFamilyImport(themeData.fontFamilyPrimary.url);
    }, [themeData])

    return (
        <ThemeWrapper themeData={themeData}>
            <Box bgcolor="#e0e6fc" minHeight="100vh">
                <Box py={4}>
                    <Typographies themeData={themeData} />
                </Box>
            </Box>
        </ThemeWrapper>
    );
};

const useStyles = makeStyles<Theme, any>({

});
export default System;