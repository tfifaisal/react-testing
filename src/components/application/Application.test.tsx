import {render, screen} from '@testing-library/react'
import {Application} from './Application'

describe('Applicaton', () => {
	test('renders correctly', () => {
		render(<Application />)

		/**
		 * getByRole expect an optional object where we can specify of what type the role is,
		 *  if we have more than one role in the component
		 * Here we have specified the object as key:value pair
		 * Inside which we have set the level:1, as we expect the heading h1 in the DOM
		 * ---------------------------------------------------
		 * | getByRole by name should always be a preference |
		 * ---------------------------------------------------
		 */

		const headingElement = screen.getByRole('heading', {
			level: 1,
			// Here the level corresponds to the h1 element
		})
		expect(headingElement).toBeInTheDocument()

		const sectionHeading = screen.getByRole('heading', {
			level: 2,
			// Here the level corresponds to the h2 element
		})
		expect(sectionHeading).toBeInTheDocument()

		/**
		 * getByRole expect an optional object where we can specify of what type the role is,
		 *  if we have more than one role in the component
		 * Here we have specified the object as key:value pair
		 * Inside which we have set the name:'Name', as we expect the Name in the DOM
		 * Inside the component <label htmlFor="name">Name</label>
		 */
		const nameElement = screen.getByRole('textbox', {
			name: 'Name',
		})
		expect(nameElement).toBeInTheDocument()
		// We can test the element to be present in the document via getByLabelText
		const nameElement2 = screen.getByLabelText('Name')
		expect(nameElement2).toBeInTheDocument()

		// getByPlaceHolder
		const nameElement3 = screen.getByPlaceholderText('FullName')
		expect(nameElement3).toBeInTheDocument()

		const bioElement = screen.getByRole('textbox', {
			name: 'Bio',
		})
		expect(bioElement).toBeInTheDocument()

		const jobLocationElement = screen.getByRole('combobox')
		expect(jobLocationElement).toBeInTheDocument()

		const termsElement = screen.getByRole('checkbox')
		expect(termsElement).toBeInTheDocument()

		// Testing the input element to be present in the dom using RegEx
		const inputElement = screen.getByText(/I agree to the/i)
		expect(inputElement).toBeInTheDocument()

		// Testing the input element to be present in the dom using custom Function
		const inputElement2 = screen.getByText(content =>
			content.startsWith('I agree')
		)
		expect(inputElement2).toBeInTheDocument()
	})
})
