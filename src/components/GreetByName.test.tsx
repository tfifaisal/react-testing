/**
 * Greet should render the text hello and if a name is passed into the component it should render
 *  Hello followed by the name
 */

import {render, screen} from '@testing-library/react'
import GreetByName from './GreetByName'

/**
Greet Hello
test('Greet Hello', () => {
	render(<GreetByName />)
	const textElement = screen.getByText('Hello')
	expect(textElement).toBeInTheDocument()
})
 */
/** 
Greet by name
test('Greet Hello', () => {
	render(<GreetByName name="Teach For India" />)
	const textElement = screen.getByText('Hello Teach For India')
	expect(textElement).toBeInTheDocument()
})
*/

//Grouping the test
describe('Greet', () => {
	test('Hello', () => {
		render(<GreetByName />)
		const textElement = screen.getByText(/Hello/)
		expect(textElement)
	})
})

/** 
describe('Nest', () => {
	test('Hello by name', () => {
		render(<GreetByName name="Teach For India" />)
		const textElement = screen.getByText('Hello Teach For India')
		expect(textElement).toBeInTheDocument()
	})
})
*/
