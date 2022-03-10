import React from 'react';
import Button from '@mui/material/Button';

export default function RefreshButton({ setCurTime, timeZone }) {
	return (
		<div style={{ marginTop: '20px' }}>
			<Button
				variant='contained'
				onClick={() => {
					setCurTime(
						new Date().toLocaleTimeString('en-US', {
							timeZone: timeZone,
						})
					);
				}}
			>
				Refresh
			</Button>
		</div>
	);
}
