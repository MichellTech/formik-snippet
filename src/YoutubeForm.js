// Render Prop
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  channel: '',
}
const onSubmit = (values) => console.log('form values ', values)

// const validate = (values) => {
//   let errors = {}

//   if (!values.name) {
//     errors.name = 'Required'
//   }

//   if (!values.email) {
//     errors.email = 'Required'
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email format'
//   }

//   if (!values.channel) {
//     errors.channel = 'Required'
//   }

//   return errors
// }

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
})

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  })

  return (
    <div className='flex flex-col justify-center items-center min-h-screen font-sans'>
      <form
        action=''
        onSubmit={formik.handleSubmit}
        className='space-y-8 w-2/3 md:w-2/6'
      >
        {/* name */}
        <div className='flex flex-col space-y-2'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            className=' px-6 py-1 border border-blue'
            placeholder='Put in your name'
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className='text-xs text-softRed'>{formik.errors.name}</div>
          ) : null}
        </div>
        {/* email */}
        <div className='flex flex-col space-y-2'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            className=' px-6 py-1 border border-blue'
            placeholder='Put in your email'
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='text-xs text-softRed'>{formik.errors.email}</div>
          ) : null}
        </div>
        {/* youtube handle */}
        <div className='flex flex-col space-y-2'>
          <label htmlFor='name'>Youtube Channel</label>
          <input
            type='text'
            name='channel'
            className=' px-6 py-1 border border-blue'
            placeholder='Put in your youtbube Channel'
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className='text-xs text-softRed'>{formik.errors.channel}</div>
          ) : null}
        </div>
        {/* submit */}
        <button
          type='submit'
          className='bg-softRed text-white px-6 py-1 rounded-sm flex justify-center items-center mx-auto'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default YoutubeForm
