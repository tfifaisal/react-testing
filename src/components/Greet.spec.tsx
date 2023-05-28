import {render, screen} from '@testing-library/react'
import Greet from './Greet'
test('Greet renders correctly from test.spec.tsx', () => {
	render(<Greet />)
	// Testing the text with the exact string
	// const textElement = screen.getByText('Hello')

	// Testing the text irrespective of the case
	const textElement = screen.getByText(/Hello/i)
	expect(textElement).toBeInTheDocument()
})
