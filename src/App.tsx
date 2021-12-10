import { useState } from 'react'
import { Divider } from '@mui/material'
import Form, { defaultTheme, FormProps, ThemeData } from './components/Form'
import System from './components/System'

function App() {
  const [themeData, setThemeData] = useState<ThemeData>({ ...defaultTheme });

  const handleSave: FormProps['onSave'] = (data) => {
    console.log(data)
    setThemeData(data);
  }

  return (
    <div>
      <Form initialValues={{}} onSave={handleSave} />
      <Divider />
      <System themeData={themeData} />
    </div>

  )
}

export default App
