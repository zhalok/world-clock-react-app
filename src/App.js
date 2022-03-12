import logo from './logo.svg';
import './App.css';
// import img from './images/';
import { useEffect, useState } from 'react';
import TimeZoneList from './components/lists/TimeZoneList';
import RefreshButton from './components/Buttons/Refresh';
import A_Clock from './components/clocks/AnalogClock';
import DigitalClock from './components/clocks/DigitalClock';

function App() {
	const [curTime, setCurTime] = useState('');
	const [timezone, setTimezone] = useState('Asia/Dhaka');
	const [imgSource, setImgSource] = useState('');
	useEffect(() => {
		setTimezone('Asia/Dhaka');
	}, []);
	useEffect(() => {
		setCurTime(new Date().toLocaleTimeString('en-US', { timeZone: timezone }));
	}, [timezone]);

	return (
		<div className='App' style={{ marginTop: '100px' }}>
			<div>
				<h1>World Clock</h1>
			</div>
			<TimeZoneList
				timezone={timezone}
				setTimezone={setTimezone}
				setImgSource={setImgSource}
			/>

			<A_Clock curTime={curTime} />
			<DigitalClock curTime={curTime} />

			<RefreshButton setCurTime={setCurTime} timeZone={timezone} />
			<div style={{ marginTop: '20px' }}>
				<img src={`images/${imgSource}`} width='500px' height='300px' />
			</div>
		</div>
	);
}

export default App;
