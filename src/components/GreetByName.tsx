import {GreetProps} from './greet.types'
const GreetByName = (props: GreetProps) => {
	return <div>Hello {props.name ? props.name : 'Guest'}</div>
}

export default GreetByName
