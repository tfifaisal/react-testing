import {useEffect, useState} from 'react'
import {SkillsProps} from './Skills.types'

export const Skills = (props: SkillsProps) => {
	const {skills} = props
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setIsLoggedIn(true)
		}, 500)
	}, [])
	return (
		<>
			<ul>
				{skills.map(s => {
					return <li key={s}> {s}</li>
				})}
			</ul>
			{isLoggedIn ? (
				<button>Start Learning</button>
			) : (
				<button onClick={() => setIsLoggedIn(true)}>Login </button>
			)}
		</>
	)
}
