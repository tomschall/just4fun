import React from 'react';

function Home() {
	return (
		<div style={homeStyle}>
			<p style={title}>Termin vereibaren?</p>
		</div>
	);
}
const homeStyle = {
		display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
		justifyContent: 'center',
		padding: '50px',
    width: '100%',
}
const title = {
	fontSize: '40px',
	border: 'solid',
	color: '#009444',
	padding: '20px',	
	fontWeight: 'bold'
}
export default Home;
