import Joi from 'joi'

const postValidation = Joi.object({
  title: Joi.string(),
  author: Joi.string(),
})

export default postValidation
