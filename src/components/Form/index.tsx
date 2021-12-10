import { Button } from '@mui/material';
import React from 'react';

export interface FormProps {
    initialValues: Partial<ThemeData>;
    onSave: (data: ThemeData) => void;
}

export interface ThemeData {
    primaryColor: string;
    secondaryColor: string;
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
    primaryColor: '#00ff00',
    secondaryColor: '#0a00d0',
    backgroundColor: '#ffffff',

    fontFamilyPrimary: {
        name: 'Poppins',
        url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap',
        fontWeightBold: 700,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },

    textColorPrimary: '#111111',
    // textColorSecondary: '#333333',

    typographies: [
        {
            // fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: 64,
            name: 'Heading 1'
        }
    ],
}

const Form: React.FC<FormProps> = (props) => {
    const { initialValues, onSave } = props;

    const [formData, setFormData] = React.useState<ThemeData>({
        ...defaultTheme,
        ...initialValues
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSave(formData);
    }


    return (
        <form onSubmit={handleSubmit} className="Form">
            <Button type='submit'>SAVE</Button>
        </form>
    );
};

export default Form;