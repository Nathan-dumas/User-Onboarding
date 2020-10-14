import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string().required('Name is required.').min(3, 'Name must be at least 3 characters.'),
    password: yup.string().required('Please enter a password!').min(6, 'Password must be at least 6 characters.'),
    email: yup.string().email('Must be a valid Email address').required('Email is required.'),
    TOS: yup.boolean().oneOf([true], 'Must accept terms and conditions.')
})