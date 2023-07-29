import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,

} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/Introduction' activeStyle>
			<h4>Introduction</h4>
		</NavLink>
		<NavLink to='/Who' activeStyle>
		<h4>Who</h4>
		</NavLink>
		<NavLink to='/What' activeStyle>
		<h4>What</h4>
		</NavLink>
		<NavLink to='/How' activeStyle>
		<h4>How</h4>
		</NavLink>
		<NavLink to='/TrainingSummary' activeStyle>
		<h4>TrainingSummary</h4>
		</NavLink>
		
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
