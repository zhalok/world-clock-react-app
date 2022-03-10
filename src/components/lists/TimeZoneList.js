import { React, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TimeZoneList({ setTimezone }) {
	const list_of_timezones = [
		{ id: 1, country: 'Dubai', tz: 'Asia/Dubai' },
		{ id: 5, country: 'Dhaka', tz: 'Asia/Dhaka' },
		{ id: 8, country: 'Shanghai', tz: 'Asia/Shanghai' },
		{ id: 13, country: 'Hong_Kong', tz: 'Asia/Hong_Kong' },
		{ id: 18, country: 'Jerusalem', tz: 'Asia/Jerusalem' },
		{ id: 19, country: 'Kolkata', tz: 'Asia/Kolkata' },
		{ id: 20, country: 'Baghdad', tz: 'Asia/Baghdad' },
		{ id: 21, country: 'Tehran', tz: 'Asia/Tehran' },
		{ id: 23, country: 'Tokyo', tz: 'Asia/Tokyo' },
		{ id: 35, country: 'Colombo', tz: 'Asia/Colombo' },
		{ id: 46, country: 'Kathmandu', tz: 'Asia/Kathmandu' },
		{ id: 35, country: 'Moscow', tz: 'Europe/Moscow' },
		{ id: 44, country: 'Istanbul', tz: 'Europe/Istanbul' },
		{ id: 62, country: 'Costa_Rica', tz: 'America/Costa_Rica' },
		{ id: 82, country: 'Mexico_City', tz: 'America/Mexico_City' },
		{ id: 98, country: 'Puerto_Rico', tz: 'America/Puerto_Rico' },
		{ id: 104, country: 'New_York', tz: 'America/New_York' },
		{ id: 116, country: 'Chicago', tz: 'America/Chicago' },
		{ id: 124, country: 'Los_Angeles', tz: 'America/Los_Angeles' },
		{ id: 112, country: 'Petersburg', tz: 'America/Indiana/Petersburg' },
		{ id: 112, country: 'Sweden', tz: 'Europe/Stockholm' },
	];
	const [selectedTimezone, setSelectedTimezone] = useState('');
	useEffect(() => {
		setSelectedTimezone('Europe/Stockholm');
	}, []);
	return (
		<div style={{ width: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth>
					<InputLabel id='demo-simple-select-label'>Time Zones</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						label='Time Zones'
						value={selectedTimezone}
						onChange={(e) => {
							// console.log(e.target.value);
							setTimezone(e.target.value);
							setSelectedTimezone(e.target.value);
						}}
					>
						{list_of_timezones.map((e, index) => (
							<MenuItem key={index} value={e.tz}>
								{e.country}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</div>
	);
}
