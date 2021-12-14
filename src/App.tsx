import { useState } from 'react'
import { Button, Divider, Drawer, Fab, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles';
import Form, { defaultTheme, FormProps, ThemeData } from './components/Form'
import System from './components/System'

function App() {
  const classes = useStyles({});
  const [themeData, setThemeData] = useState<ThemeData>({ ...defaultTheme });
  const [open, setOpen] = useState(false);

  const handleSave: FormProps['onSave'] = (data) => {
    console.log(data)
    setThemeData(data);
  }

  return (
    <div>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Form initialValues={{}} onSave={handleSave} />
      </Drawer>
      <System themeData={themeData} />
      <Button variant='contained' className={classes.button} onClick={() => setOpen(true)}>
        EDIT THEME
      </Button>
    </div>

  )
}

const useStyles = makeStyles<Theme, any>({
  button: {
    position: 'fixed !important',
    bottom: '60px',
    right: '60px',
  }
});


export default App
