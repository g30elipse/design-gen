import { useState } from 'react'
import Form, { FormProps } from './components/Form'

function App() {


  const handleSave: FormProps['onSave'] = (data) => {
    console.log(data)
  }

  return (
    <div>
      <Form initialValues={{}} onSave={handleSave} />
    </div>

  )
}

export default App
