import React from 'react'


export default function Form(props) {
    const { values, submit, change, disabled, errors } = props

    


    return (
        <form>
            <label htmlFor="name">Name:
                <input
                    name="name"
                    type="text" />
            </label>

            <label htmlFor="email">Email:
                <input
                    name="email"
                    type="email" />
            </label>

            <label htmlFor="password">Password:
                <input
                    name="password"
                    type="password" />
            </label>
            <br />
            <label>TOS:
            <br />
                <input
                    name="TOS"
                    type="checkbox" />
            </label>
            <br />
            <button>Submit</button>
        </form>
    )
}