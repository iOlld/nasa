import MazBtn from 'maz-ui/components/MazBtn'
import MazInput from 'maz-ui/components/MazInput'
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'

export default {
	install (app) {
		app.component('MazBtn', MazBtn)
		app.component('MazInput', MazInput)
		app.component('MazPhoneNumberInput', MazPhoneNumberInput)
	},
}