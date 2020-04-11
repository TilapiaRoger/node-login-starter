const { body } = require('express-validator')

const registerValidation = [
	body('name').not().isEmpty().withMessage("Name is required."),
	
	body('email').not().isEmpty().withMessage("Email is required.")
	.isEmail().withMessage("Please provide a valid email."),
	
	body('password').isLength({min: 6}).withMessage("Password must be at least 6 characters long."),

	body('confirmPass').isLength({min: 6}).withMessage("Password must be at least 6 characters long.")
	.custom((value, {req}) =>{
		if(value !== req.body.password){
			throw new Error("Passwords must match.");
		}
		return true;
	})
];

const loginValidation = [
	body('email').not().isEmpty().withMessage("Email is required.")
	.isEmail().withMessage("Please provide a valid email."),
	
	body('password').not().isEmpty().withMessage("Password is required.")
]

module.exports = { registerValidation, loginValidation };