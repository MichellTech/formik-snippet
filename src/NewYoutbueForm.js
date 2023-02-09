import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comment: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['', ''],
  PhNumbers: [''],
  selectOption: '',
  radioOption: '',
  checkboxOption: [],
  birthDate: null,
}
const onSubmit = (values, onSubmitProps) => {
  // setTimeout(() => {

  // }, 3000)
  onSubmitProps.setSubmitting(false)
  // reset
  onSubmitProps.resetForm()
  console.log(values)
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
  // comment: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  selectOption: Yup.string().required('Required'),
  radioOption: Yup.string().required('Required'),
  checkboxOption: Yup.array().required('Required'),
  birthDate: Yup.date().required('Required').nullable(),
})

// for password and conformin passwor auth
// const validationSchema = Yup.object({
//   email: Yup.string().email('Invalid email format').required('Required'),
//   password: Yup.string().required('Required'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), ''], 'Passwords must match')
//     .required('Required'),
//   modeOfContact: Yup.string().required('Required'),
//   phone: Yup.string().when('modeOfContact', {
//     is: 'telephonemoc',
//     then: Yup.string().required('Required'),
//   }),
// })

// manual validation
const validateComments = (value) => {
  let error
  if (!value) {
    error = 'Required ooo'
  }
  return error
}

const NewYoutubeForm = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen font-sans py-10 md:py-20'>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        // validateOnMount
      >
        {(formik) => {
          return (
            <Form action='' className='space-y-8 w-2/3 md:w-2/6'>
              {/* name */}
              <div className='flex flex-col space-y-2'>
                <label htmlFor='name'>Name</label>
                <Field
                  type='text'
                  name='name'
                  className=' px-6 py-1 border border-blue'
                  placeholder='Put in your name'
                />
                <ErrorMessage name='name' />
              </div>
              {/* email */}
              <div className='flex flex-col space-y-2'>
                <label htmlFor='email'>Email</label>
                <Field
                  type='email'
                  name='email'
                  className=' px-6 py-1 border border-blue'
                  placeholder='Put in your email'
                />
                <ErrorMessage name='email' />
              </div>
              {/* Select option */}
              <div className='flex flex-col space-y-2'>
                <label htmlFor='select'>Select Language</label>
                <Field
                  as='select'
                  type='selectOption'
                  name='selectOption'
                  className=' px-6 py-1 border border-blue'
                >
                  <option value=''>select option</option>
                  <option value='Python'>Python</option>
                  <option value='Javascript'>Javascript</option>
                  <option value='Java'>Java</option>
                </Field>
                <ErrorMessage name='selectOptions' />
              </div>

              {/* radio Button */}
              <div className='flex flex-col space-y-2'>
                <label htmlFor='radioOption'>Radio Select Language</label>
                <Field name='radioOption' as='radio' className=' px-6 py-1'>
                  {({ field }) => {
                    return (
                      <div>
                        {/* one */}
                        <div className='space-x-4'>
                          <input
                            type='radio'
                            id='Pyton'
                            {...field}
                            value='pyton'
                            checked={field.value === 'pyton'}
                          />
                          <label htmlFor='pyton'>Pyton</label>
                        </div>
                        {/* two */}
                        <div className='space-x-4'>
                          <input
                            type='radio'
                            id='java'
                            {...field}
                            value='java'
                            checked={field.value === 'java'}
                          />
                          <label htmlFor='java'>java</label>
                        </div>
                        {/* three */}
                        <div className='space-x-4'>
                          <input
                            type='radio'
                            id='rubbie'
                            {...field}
                            value='rubbie'
                            checked={field.value === 'rubbie'}
                          />
                          <label htmlFor='rubbie'>rubbie</label>
                        </div>
                      </div>
                    )
                  }}
                </Field>
                <ErrorMessage name='radioOption' />
              </div>

              {/* checkbox Button */}
              <div className='flex flex-col space-y-2'>
                <label htmlFor='radioOption'>Check box select food </label>
                <Field
                  name='checkboxOption'
                  as='checkbox'
                  className=' px-6 py-1'
                >
                  {({ field }) => {
                    return (
                      <div>
                        {/* one */}
                        <div className='space-x-4'>
                          <input
                            type='checkbox'
                            id='amala'
                            {...field}
                            value='amala'
                            checked={field.value.includes('amala')}
                          />
                          <label htmlFor='amala'>amala</label>
                        </div>

                        {/* two */}
                        <div className='space-x-4'>
                          <input
                            type='checkbox'
                            id='eba'
                            {...field}
                            value='eba'
                            checked={field.value.includes('eba')}
                          />
                          <label htmlFor='eba'>eba</label>
                        </div>
                        {/* one */}
                        <div className='space-x-4'>
                          <input
                            type='checkbox'
                            id='ewedu'
                            {...field}
                            value='ewedu'
                            checked={field.value.includes('ewedu')}
                          />
                          <label htmlFor='ewedu'>ewedu</label>
                        </div>
                      </div>
                    )
                  }}
                </Field>
                <ErrorMessage name='radioOption' />
              </div>
              {/* date picker */}
              <div className='flex flex-col space-y-2'>
                <label htmlFor=' birthDate'>Pick your Birthday</label>
                <Field name='birthDate'>
                  {({ form, field }) => {
                    const { setFieldValue } = form
                    const { value } = field
                    return (
                      <DateView
                        id='birthDate'
                        {...field}
                        className=' px-6 py-1 border text-veryLightGray border-blue'
                        selected={value}
                        onChange={(val) => setFieldValue('birthDate', val)}
                      />
                    )
                  }}
                </Field>
              </div>
              {/* youtube handle */}
              <div className='flex flex-col space-y-2'>
                <label htmlFor='name'>Youtube Channel</label>
                <Field
                  type='text'
                  name='channel'
                  className=' px-6 py-1 border border-blue'
                  placeholder='Put in your youtbube Channel'
                />
                <ErrorMessage name='channel' />
              </div>
              {/* comment */}
              <div className='flex flex-col space-y-2'>
                <label htmlFor='name'>Comment</label>
                <Field
                  as='textarea'
                  type='text'
                  id='comment'
                  name='comment'
                  validate={validateComments}
                  className=' px-6 py-1 border border-blue'
                  placeholder='Put in your comments here'
                />
                <ErrorMessage name='comment' />
              </div>
              {/* address */}
              <div className='flex flex-col space-y-2'>
                <label htmlFor='name'>Address</label>
                <Field
                  type='text'
                  name='address'
                  className=' px-6 py-1 border border-blue'
                  placeholder='Put in your comments here'
                >
                  {(props) => {
                    const { field, meta } = props
                    return (
                      <div>
                        <input
                          type='text'
                          id='address'
                          className=' px-6 py-1 border border-blue w-full'
                          {...field}
                        />
                        {meta.touched && meta.error ? (
                          <div>{meta.error}</div>
                        ) : (
                          ''
                        )}
                      </div>
                    )
                  }}
                </Field>
              </div>
              {/* Facebook handle */}
              <div className='flex flex-col space-y-2'>
                <label htmlFor='name'>Facebook</label>
                <Field
                  type='text'
                  name='social.facebook'
                  className=' px-6 py-1 border border-blue'
                  placeholder='Put in your facebook handle'
                />
                <ErrorMessage name='channel' />
              </div>
              {/* Facebook handle */}
              <div className='flex flex-col space-y-2'>
                <label htmlFor='name'>Twitter</label>
                <Field
                  type='text'
                  name='social.twitter'
                  className=' px-6 py-1 border border-blue'
                  placeholder='Put in your twitter handle'
                />
                <ErrorMessage name='channel' />
              </div>
              {/* Phone Nubmber1 */}
              <div className='flex flex-col space-y-2'>
                <label htmlFor='name'>Phone Number</label>
                <Field
                  type='number'
                  name='phoneNumber[0]'
                  className=' px-6 py-1 border border-blue'
                  placeholder='Put in your twitter handle'
                />
              </div>
              {/* Alternative Nubmber1 */}
              <div className='flex flex-col space-y-2'>
                <label htmlFor='name'>Alternative Phone Number</label>
                <Field
                  type='number'
                  name='phoneNumber[1]'
                  className=' px-6 py-1 border border-blue'
                  placeholder='Put in your twitter handle'
                />
              </div>
              {/* List Nubmber1 */}
              <div className='flex flex-col space-y-2'>
                <label htmlFor='name'>List all ALternative Phone Numbers</label>
                <FieldArray name='phNumbers'>
                  {(fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps
                    const { values } = form
                    const { phNumbers } = values

                    return (
                      <div className=' flex flex-col justify-start items-start gap-2'>
                        {phNumbers?.map((phNumber, index) => (
                          <div key={index} className=' flex gap-2'>
                            <Field
                              name={`phNumbers[${index}]`}
                              className=' px-6 py-1 border border-blue'
                            />

                            {index > 0 && (
                              <button
                                type='button'
                                onClick={() => remove(index)}
                              >
                                Remove
                              </button>
                            )}
                            {index < 0 && (
                              <button
                                type='button'
                                onClick={() => remove(index)}
                              >
                                Remove
                              </button>
                            )}
                          </div>
                        ))}
                        <button type='button' onClick={() => push('')}>
                          Add
                        </button>
                      </div>
                    )
                  }}
                </FieldArray>
                <ErrorMessage name='channel' />
              </div>
              {/* submit */}
              <button
                disabled={
                  !(formik.dirty && formik.isValid) || formik.isSubmitting
                }
                type='submit'
                className={` ${
                  !(formik.dirty && formik.isValid) || formik.isSubmitting
                    ? ' bg-veryLightGray text-white px-6 py-1 rounded-sm flex justify-center items-center mx-auto'
                    : 'bg-softRed text-white px-6 py-1 rounded-sm flex justify-center items-center mx-auto'
                }`}
              >
                Submit
              </button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default NewYoutubeForm
