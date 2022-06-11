import Button from 'primevue/button';
import Card from 'primevue/card'
import Skeleton from 'primevue/skeleton'
import Fieldset from 'primevue/fieldset'
// import Accordion from 'primevue/accordion'
// import AccordionTab from 'primevue/accordiontab'

export default {
	install (app) {
		app.component('PButton', Button)
		app.component('PCard', Card)
		app.component('PSkeleton', Skeleton)
		app.component('PFieldset', Fieldset)
		// app.component('PAccordion', Accordion)
		// app.component('PAccordionTab', AccordionTab)
	},
}