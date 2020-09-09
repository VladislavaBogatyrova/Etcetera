
const USERNAME_REGEXP = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*/

export const validatePersonalInfoForm = (values: any) => {
    const errors: any = {}
	if (!values.fullName) {
		errors.fullName = ('Required')
	}
	if (!values.position) {
		errors.position = 'You must fill these input'
    }
    if (!values.birthday) {
		errors.birthday = 'You must fill these input'
	}
	// if (values.birthday && !USERNAME_REGEXP.test(toString(values.birthday))) {
	// 	errors.birthday = 'Invalid username'
	// }
    if (!values.city) {
		errors.city = 'You must fill these input'
    }
    if (!values.phoneNumber) {
		errors.phoneNumber = 'You must fill these input'
	}
	return errors
}
