import { React, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TimeZoneList({ setTimezone }) {
	const list_of_timezones = [
		{ id: 1, country: 'Dhaka', tz: 'Asia/Dhaka' },
		{ id: 2, country: 'Dubai', tz: 'Asia/Dubai' },
		{ id: 3, country: 'Kabul', tz: 'Asia/Kabul' },
		{ id: 4, country: 'Yerevan', tz: 'Asia/Yerevan' },
		{ id: 5, country: 'Dhaka', tz: 'Asia/Dhaka' },
		{ id: 6, country: 'Brunei', tz: 'Asia/Brunei' },
		{ id: 7, country: 'Thimphu', tz: 'Asia/Thimphu' },
		{ id: 8, country: 'Shanghai', tz: 'Asia/Shanghai' },
		{ id: 9, country: 'Urumqi', tz: 'Asia/Urumqi' },
		{ id: 1, country: 'Andorra', tz: 'Europe/Andorra' },
		{ id: 2, country: 'Tirane', tz: 'Europe/Tirane' },
		{ id: 3, country: 'Vienna', tz: 'Europe/Vienna' },
		{ id: 4, country: 'Brussels', tz: 'Europe/Brussels' },
		{ id: 5, country: 'Sofia', tz: 'Europe/Sofia' },
		{ id: 6, country: 'Minsk', tz: 'Europe/Minsk' },
		{ id: 7, country: 'Zurich', tz: 'Europe/Zurich' },
		{ id: 8, country: 'Prague', tz: 'Europe/Prague' },
		{ id: 9, country: 'Berlin', tz: 'Europe/Berlin' },
		{ id: 10, country: 'Copenhagen', tz: 'Europe/Copenhagen' },
		{ id: 11, country: 'Tallinn', tz: 'Europe/Tallinn' },
		{ id: 12, country: 'Madrid', tz: 'Europe/Madrid' },
		{ id: 1, country: 'Buenos_Aires', tz: 'America/Argentina/Buenos_Aires' },
		{ id: 2, country: 'Cordoba', tz: 'America/Argentina/Cordoba' },
		{ id: 3, country: 'Salta', tz: 'America/Argentina/Salta' },
		{ id: 4, country: 'Jujuy', tz: 'America/Argentina/Jujuy' },
		{ id: 5, country: 'Tucuman', tz: 'America/Argentina/Tucuman' },
		{ id: 6, country: 'Catamarca', tz: 'America/Argentina/Catamarca' },
		{ id: 7, country: 'La_Rioja', tz: 'America/Argentina/La_Rioja' },
		{ id: 8, country: 'San_Juan', tz: 'America/Argentina/San_Juan' },
		{ id: 9, country: 'Mendoza', tz: 'America/Argentina/Mendoza' },
		{ id: 10, country: 'San_Luis', tz: 'America/Argentina/San_Luis' },
		{ id: 11, country: 'Rio_Gallegos', tz: 'America/Argentina/Rio_Gallegos' },
		{ id: 12, country: 'Ushuaia', tz: 'America/Argentina/Ushuaia' },
		{ id: 13, country: 'Barbados', tz: 'America/Barbados' },
		{ id: 14, country: 'La_Paz', tz: 'America/La_Paz' },
		{ id: 15, country: 'Belem', tz: 'America/Belem' },
		{ id: 16, country: 'Fortaleza', tz: 'America/Fortaleza' },
		{ id: 17, country: 'Recife', tz: 'America/Recife' },
		{ id: 18, country: 'Araguaina', tz: 'America/Araguaina' },
		{ id: 19, country: 'Maceio', tz: 'America/Maceio' },
		{ id: 20, country: 'Bahia', tz: 'America/Bahia' },
		{ id: 21, country: 'Sao_Paulo', tz: 'America/Sao_Paulo' },
		{ id: 22, country: 'Campo_Grande', tz: 'America/Campo_Grande' },
		{ id: 23, country: 'Cuiaba', tz: 'America/Cuiaba' },
		{ id: 24, country: 'Porto_Velho', tz: 'America/Porto_Velho' },
		{ id: 25, country: 'Boa_Vista', tz: 'America/Boa_Vista' },
		{ id: 26, country: 'Manaus', tz: 'America/Manaus' },
		{ id: 27, country: 'Eirunepe', tz: 'America/Eirunepe' },
		{ id: 28, country: 'Rio_Branco', tz: 'America/Rio_Branco' },
		{ id: 29, country: 'Nassau', tz: 'America/Nassau' },
		{ id: 30, country: 'Belize', tz: 'America/Belize' },
		{ id: 31, country: 'St_Johns', tz: 'America/St_Johns' },
		{ id: 32, country: 'Halifax', tz: 'America/Halifax' },
		{ id: 33, country: 'Glace_Bay', tz: 'America/Glace_Bay' },
		{ id: 34, country: 'Moncton', tz: 'America/Moncton' },
		{ id: 35, country: 'Goose_Bay', tz: 'America/Goose_Bay' },
		{ id: 36, country: 'Blanc-Sablon', tz: 'America/Blanc-Sablon' },
		{ id: 37, country: 'Toronto', tz: 'America/Toronto' },
		{ id: 38, country: 'Nipigon', tz: 'America/Nipigon' },
		{ id: 39, country: 'Thunder_Bay', tz: 'America/Thunder_Bay' },
		{ id: 40, country: 'Iqaluit', tz: 'America/Iqaluit' },
		{ id: 41, country: 'Pangnirtung', tz: 'America/Pangnirtung' },
		{ id: 42, country: 'Atikokan', tz: 'America/Atikokan' },
		{ id: 43, country: 'Winnipeg', tz: 'America/Winnipeg' },
		{ id: 44, country: 'Rainy_River', tz: 'America/Rainy_River' },
		{ id: 45, country: 'Resolute', tz: 'America/Resolute' },
		{ id: 46, country: 'Rankin_Inlet', tz: 'America/Rankin_Inlet' },
		{ id: 47, country: 'Regina', tz: 'America/Regina' },
		{ id: 48, country: 'Swift_Current', tz: 'America/Swift_Current' },
		{ id: 49, country: 'Edmonton', tz: 'America/Edmonton' },
		{ id: 50, country: 'Cambridge_Bay', tz: 'America/Cambridge_Bay' },
		{ id: 51, country: 'Yellowknife', tz: 'America/Yellowknife' },
		{ id: 52, country: 'Inuvik', tz: 'America/Inuvik' },
		{ id: 53, country: 'Creston', tz: 'America/Creston' },
		{ id: 54, country: 'Dawson_Creek', tz: 'America/Dawson_Creek' },
		{ id: 55, country: 'Fort_Nelson', tz: 'America/Fort_Nelson' },
		{ id: 56, country: 'Vancouver', tz: 'America/Vancouver' },
		{ id: 57, country: 'Whitehorse', tz: 'America/Whitehorse' },
		{ id: 58, country: 'Dawson', tz: 'America/Dawson' },
		{ id: 59, country: 'Santiago', tz: 'America/Santiago' },
		{ id: 60, country: 'Punta_Arenas', tz: 'America/Punta_Arenas' },
		{ id: 61, country: 'Bogota', tz: 'America/Bogota' },
		{ id: 62, country: 'Costa_Rica', tz: 'America/Costa_Rica' },
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
