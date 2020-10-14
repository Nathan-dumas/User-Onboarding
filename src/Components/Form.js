import React from 'react'


export default function Form(props) {
    const { values, submit, change, disabled, errors } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }


    return (
        <form onSubmit={onSubmit}>
            <div>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.TOS}</div>
                <div>{errors.password}</div>
            </div>
            <label htmlFor='name'>Name:
                <input
                    name='name'
                    value={values.name}
                    onChange={onChange}
                    placeholder='Name'
                    type='text' />
            </label>

            <label htmlFor='email'>Email:
                <input
                    name='email'
                    value={values.email}
                    onChange={onChange}
                    placeholder='Email'
                    type='email' />
            </label>

            <label htmlFor='password'>Password:
                <input
                    name='password'
                    value={values.password}
                    onChange={onChange}
                    placeholder='Password'
                    type='password' />
            </label>
            <br />
            <label>TOS:
            <br />
                <input
                    name='TOS'
                    checked={values.TOS}
                    onChange={onChange}
                    type='checkbox' />
            </label>
            <br />
            <button disabled={disabled}>Submit</button>
        </form>
    )
}