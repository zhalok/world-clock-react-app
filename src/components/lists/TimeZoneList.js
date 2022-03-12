import { React, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TimeZoneList({ setTimezone, setImgSource }) {
	const list_of_timezones = [
		{ id: 1, country: 'Dubai', tz: 'Asia/Dubai', image: 'dubai.jpg' },
		{ id: 5, country: 'Toronto', tz: 'America/Toronto', image: 'toronto.jpeg' },
		{ id: 8, country: 'Shanghai', tz: 'Asia/Shanghai', image: 'shanghai.jpg' },
		{
			id: 13,
			country: 'Hong_Kong',
			tz: 'Asia/Hong_Kong',
			image: 'hongkong.jpg',
		},
		{
			id: 18,
			country: 'Jerusalem',
			tz: 'Asia/Jerusalem',
			image: 'jerusalem.jpg',
		},
		{ id: 19, country: 'Kolkata', tz: 'Asia/Kolkata', image: 'kolkata.jpg' },
		{ id: 20, country: 'Baghdad', tz: 'Asia/Baghdad', image: 'Baghdad.jpeg' },
		{ id: 21, country: 'Tehran', tz: 'Asia/Tehran', image: 'tehran.png' },
		{ id: 23, country: 'Tokyo', tz: 'Asia/Tokyo', image: 'tokyo.jpeg' },
		{ id: 35, country: 'Colombo', tz: 'Asia/Colombo', image: 'colombo.jpeg' },
		{
			id: 46,
			country: 'Kathmandu',
			tz: 'Asia/Kathmandu',
			image: 'kathmandu.jpg',
		},
		{ id: 35, country: 'Moscow', tz: 'Europe/Moscow', image: 'moscow.jpg' },
		{
			id: 44,
			country: 'Istanbul',
			tz: 'Europe/Istanbul',
			image: 'istanbul.jpg',
		},
		{
			id: 62,
			country: 'Costa_Rica',
			tz: 'America/Costa_Rica',
			image: 'costarica.jpg',
		},
		{
			id: 82,
			country: 'Mexico_City',
			tz: 'America/Mexico_City',
			image: 'mexico.jpeg',
		},
		{
			id: 98,
			country: 'Puerto_Rico',
			tz: 'America/Puerto_Rico',
			image: 'Puerto_Rico.jpg',
		},
		{
			id: 104,
			country: 'New_York',
			tz: 'America/New_York',
			image: 'New_York.jpeg',
		},
		{
			id: 116,
			country: 'Chicago',
			tz: 'America/Chicago',
			image: 'Chicago.jpeg',
		},
		{
			id: 124,
			country: 'Los_Angeles',
			tz: 'America/Los_Angeles',
			image: 'Los_Angeles.jpg',
		},
		{
			id: 112,
			country: 'Petersburg',
			tz: 'America/Indiana/Petersburg',
			image: 'Petersburg.jpeg',
		},
		{
			id: 112,
			country: 'Sweden',
			tz: 'Europe/Stockholm',
			image: 'Stockholm.jpg',
		},
	];
	const [selectedTimezone, setSelectedTimezone] = useState('');

	useEffect(() => {
		// list_of_timezones.sort((a, b) => a.country - b.country);
		setSelectedTimezone(20);
		setTimezone('Europe/Stockholm');
		setImgSource('Stockholm.jpg');
		// console.log();
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
							setTimezone(list_of_timezones[e.target.value].tz);
							setImgSource(list_of_timezones[e.target.value].image);
							setSelectedTimezone(e.target.value);
						}}
					>
						{list_of_timezones.map((e, index) => (
							<MenuItem key={index} value={index}>
								{e.country}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</div>
	);
}
