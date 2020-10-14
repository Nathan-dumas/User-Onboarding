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

            </div>
            <label htmlFor='name'>Name:
            <br />
                <input
                    name='name'
                    value={values.name}
                    onChange={onChange}
                    placeholder='Name'
                    type='text' />
            </label>
            <div>{errors.name}</div>
            <br />

            <label htmlFor='email'>Email:
            <br />
                <input
                    name='email'
                    value={values.email}
                    onChange={onChange}
                    placeholder='Email'
                    type='email' />
            </label>
            <div>{errors.email}</div>
            <br />

            <label htmlFor='password'>Password:
            <br />
                <input
                    name='password'
                    value={values.password}
                    onChange={onChange}
                    placeholder='Password'
                    type='password' />
            </label>
            <div>{errors.password}</div>
            <br />
            <label>TOS:
            <br />
                <input
                    name='TOS'
                    checked={values.TOS}
                    onChange={onChange}
                    type='checkbox' />
            </label>
            <div>{errors.TOS}</div>
            <br />
            <button disabled={disabled}>Submit</button>
        </form>
    )
}