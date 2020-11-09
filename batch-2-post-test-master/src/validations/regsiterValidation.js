import Joi from 'joi'

const registerValidation = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }),
  password: Joi.string(),
})

export default registerValidation
