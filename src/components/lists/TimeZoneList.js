import { React, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TimeZoneList({ setTimezone }) {
	const list_of_timezones = [
		{
			label: 'Dhaka',
			timezone: 'Asia/Dhaka',
		},
		{
			label: 'Los Angeles',
			timezone: 'America/Los_Angeles',
		},
	];
	const [selectedTimezone, setSelectedTimezone] = useState('');
	useEffect(() => {
		setSelectedTimezone('Asia/Dhaka');
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
							console.log(e.target.value);
							setTimezone(e.target.value);
							setSelectedTimezone(e.target.value);
						}}
					>
						{list_of_timezones.map((e, index) => (
							<MenuItem key={index} value={e.timezone}>
								{e.label}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</div>
	);
}
