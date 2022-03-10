import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import TimeZoneList from './components/lists/TimeZoneList';
import Button from '@mui/material/Button';

function App() {
	const [curTime, setCurTime] = useState('');
	const [timezone, setTimezone] = useState('Asia/Dhaka');
	useEffect(() => {
		setTimezone('Asia/Dhaka');
	}, []);
	useEffect(() => {
		setCurTime(new Date().toLocaleTimeString('en-US', { timeZone: timezone }));
	}, [timezone]);
	// setInterval(() => {
	// 	// console.log(timezone);
	// 	setCurTime(
	// 		new Date().toLocaleTimeString('en-US', {
	// 			timeZone: 'Asia/Dhaka',
	// 		})
	// 	);
	// }, 1000);

	return (
		<div className='App' style={{ marginTop: '100px' }}>
			<TimeZoneList timezone={timezone} setTimezone={setTimezone} />
			{curTime}
			<div>
				<Button
					variant='contained'
					onClick={() => {
						setCurTime(
							new Date().toLocaleTimeString('en-US', {
								timeZone: timezone,
							})
						);
					}}
				>
					Refresh
				</Button>
			</div>
		</div>
	);
}

export default App;
