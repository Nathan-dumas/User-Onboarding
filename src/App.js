import React, { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import * as Yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  password: '',
  TOS: false,
}

const initialErrors = {
  name: '',
  email: '',
  password: '',
  TOS: '',
}

const initialUsers = []
const initialDisabled = true


function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    })
  }

  const submitForm = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      TOS: ['TOS'].filter(TOS => formValues[TOS])
    }
    setUsers(...users, newUser)
    setFormValues(initialValues)
  }

  return (
    <div className="App">
      <Form 
        values={formValues}
        submit={submitForm}
        update={updateForm}
      />
    </div>
  )
}

export default App
