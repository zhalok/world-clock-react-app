import React, { useEffect, useState } from 'react';
import AnalogClock from 'analog-clock-react';
export default function A_Clock({ curTime }) {
	const [hours, setHours] = useState('');
	const [minutes, setMinutes] = useState('');
	const [seconds, setSeconds] = useState('');
	useEffect(() => {
		if (curTime) {
			const [hours, minutes, seconds] = curTime.split(':');
			setHours(hours);
			setMinutes(minutes);
			setSeconds(seconds.split(' ')[0]);
		}
	}, [curTime]);
	let options = {
		useCustomTime: true, // set this to true

		width: '300px',
		border: true,
		borderColor: '#2e2e2e',
		baseColor: '#17a2b8',
		centerColor: '#459cff',
		centerBorderColor: '#ffffff',
		handColors: {
			second: '#d81c7a',
			minute: '#ffffff',
			hour: '#ffffff',
		},
		seconds: seconds, // set your
		minutes: minutes, // own
		hours: hours, // time here.
	};
	return (
		<div
			style={{
				width: 'fit-content',
				// border: '1px solid black',
				marginLeft: 'auto',
				marginRight: 'auto',
				marginTop: '40px',
			}}
		>
			<AnalogClock {...options} />
		</div>
	);
}
