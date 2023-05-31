import {render, screen, logRoles} from '@testing-library/react'
import {Skills} from './Skills'

describe('Skill component', () => {
	const skills = ['html', 'css', 'js']
	test('Component Renders correclty', () => {
		render(<Skills skills={skills} />)
	})

	test('Renders Login Button', () => {
		render(<Skills skills={skills} />)

		const isLoggedInBtn = screen.getByRole('button', {
			name: 'Login',
		})
		expect(isLoggedInBtn).toBeInTheDocument()
	})

	test('Start Learning Button is Not Rendered', () => {
		render(<Skills skills={skills} />)

		const startLearningBtn = screen.queryByRole('button', {
			name: 'Start Learning',
		})
		expect(startLearningBtn).not.toBeInTheDocument()
	})

	test('Start learnign Button eventually Renders after some time', async () => {
		const view = render(<Skills skills={skills} />)
		logRoles(view.container)
		const startLearningBtn = await screen.findByRole(
			'button',
			{
				name: 'Start Learning',
			},
			{
				timeout: 2000,
			}
		)

		expect(startLearningBtn).toBeInTheDocument()
	})
})
