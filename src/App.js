import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './Components/Form'
import * as yup from 'yup'
import SiteUsers from './Components/SiteUsers'
import schema from './Components/FormSchema'
import axios from 'axios'


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

  const postUsers = newUser => {
    axios
      .post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([...users, res.data])
      })
      .catch(err => console.log(err))
  }

  const changeForm = (inputName, inputValue) => {
    yup.reach(schema, inputName)
      .validate(inputValue)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [inputName]: '',
        })
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [inputName]: err.errors[0]
        })
      })
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

    postUsers(newUser)
  }



  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <Form
        values={formValues}
        submit={submitForm}
        change={changeForm}
        disabled={disabled}
        errors={formErrors}
      />
      {
        users.map(user => {
          return (
            <SiteUsers details={user} />
          )
        })
      }
    </div>
  )
}

export default App
