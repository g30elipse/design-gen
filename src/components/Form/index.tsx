import { Button, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

export interface FormProps {
    initialValues: Partial<ThemeData>;
    onSave: (data: ThemeData) => void;
}

export interface ThemeData {
    primaryColor: string;
    secondaryColor: string;
    otherColors: string[];
    gray: string[];

    backgroundColor: string;

    textColorPrimary: string;
    // textColorSecondary: string;

    fontFamilyPrimary: FontFamily;
    // fontFamilySecondary: string;
    typographies: TTypography[];

}

export type TTypography = {
    name: string;
    // fontFamily: string;
    fontWeight: number;
    fontSize: number;
}

export type FontFamily = {
    name: string;
    url: string;
    fontWeightBold: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
}


export const defaultTheme: ThemeData = {
    primaryColor: '#00872a',
    secondaryColor: '#0a00d0',
    backgroundColor: '#f1f6ff',

    fontFamilyPrimary: {
        // name: 'Dancing Script',
        // url: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;700&display=swap',
        name: 'Allerta Stencil',
        url: 'https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Dancing+Script:wght@400;500;700&display=swap',
        // name: 'Poppins',
        // url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap',
        fontWeightBold: 700,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },

    otherColors: [
        '#a0000d',
        '#aaffdd',
        '#f09f2a',
    ],

    gray: [
        '#000',
        '#222',
        '#444',
        '#666',
        '#888',
        '#aaa',
        '#ccc',
        '#eee',
    ],

    textColorPrimary: '#111111',
    // textColorSecondary: '#333333',

    typographies: [
        {
            // fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: 64,
            name: 'Heading 1'
        },
        {
            fontWeight: 700,
            fontSize: 32,
            name: 'Heading 2'
        },
        {
            fontWeight: 700,
            fontSize: 24,
            name: 'Heading 3'
        },
        {
            fontWeight: 400,
            fontSize: 16,
            name: 'Body 1'
        },
        {
            fontWeight: 400,
            fontSize: 14,
            name: 'Body 2'
        },
        {
            fontWeight: 400,
            fontSize: 12,
            name: 'Caption'
        },
    ],
}

const Form: React.FC<FormProps> = (props) => {
    const { initialValues, onSave } = props;
    const classes = useStyles({});

    const [formData, setFormData] = React.useState<ThemeData>({
        ...defaultTheme,
        ...initialValues
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSave(formData);
    }


    return (
        <form onSubmit={handleSubmit} className={classes.root}>
            <Button type='submit'>SAVE</Button>
        </form>
    );
};

const useStyles = makeStyles<Theme, any>(theme => ({
    root: {
        width: 600
    }
}));

export default Form;