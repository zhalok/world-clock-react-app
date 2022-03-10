import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import TimeZoneList from './components/lists/TimeZoneList';
import RefreshButton from './components/Buttons/Refresh';
import A_Clock from './components/clocks/AnalogClock';
import DigitalClock from './components/clocks/DigitalClock';

function App() {
	const [curTime, setCurTime] = useState('');
	const [timezone, setTimezone] = useState('Asia/Dhaka');
	useEffect(() => {
		setTimezone('Asia/Dhaka');
	}, []);
	useEffect(() => {
		setCurTime(new Date().toLocaleTimeString('en-US', { timeZone: timezone }));
	}, [timezone]);

	return (
		<div className='App' style={{ marginTop: '100px' }}>
			<TimeZoneList timezone={timezone} setTimezone={setTimezone} />

			<A_Clock curTime={curTime} />
			<DigitalClock curTime={curTime} />

			<RefreshButton setCurTime={setCurTime} timeZone={timezone} />
		</div>
	);
}

export default App;
