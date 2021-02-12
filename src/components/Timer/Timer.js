import React , {useEffect , useState} from 'react';

const Timer = () => {

	const [state , setState] = useState(1200)

	useEffect(() => {
		const dec = () => {
			setState(state - 1)
		}
		let timer = () => {
			setTimeout(dec , 1000)
		}
		if (state === 0) {
			return
		}
		timer()
		return () => {
			clearTimeout(timer);
		}
	} , [state])

	let sec = state % 60 < 10 ? `0${state % 60}` : state % 60
	let minute = Math.floor(state / 60)

	return (
		<div>
			<p>{`${minute}:${sec}`}</p>
		</div>
	);
};

export default Timer;