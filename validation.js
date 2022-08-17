const Joi = require('@hapi/joi');

const registerValidation = data => {
    const schema = Joi.object({
        firstName: Joi.required(),
        lastName: Joi.required(),
        age: Joi.number(),
        email: Joi.string().min(6).required(),
        password: Joi.string().min(6).required(),
    });

    return schema.validate(data);
}

const loginValidation = data => {
    const schema = Joi.object({
        // firstName: Joi.required(),
        // lastName: Joi.required(),
        // age: Joi.number(),
        email: Joi.string().min(6).required(),
        password: Joi.string().min(6).required(),
    });

    return schema.validate(data);
}

module.exports = { registerValidation, loginValidation }